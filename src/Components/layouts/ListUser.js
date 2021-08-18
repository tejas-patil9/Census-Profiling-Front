import React, { Component } from "react";
import AdminService from "../AdminService";
import { withRouter } from "react-router-dom";
import { Table, Button } from "reactstrap";

class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
  }
  //reactsratp tble button stat props axios componentdidmount=useeffect

  deleteUser(uid) {
    AdminService.deleteUser(uid).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.uid !== uid),
      });
    });
  }

  componentDidMount() {
    AdminService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push("/addUser/_add");
  }
  viewUser(uid){
    this.props.history.push( `/viewUser/${uid}`);
  }
//   viewEmployee(id){
//     this.props.history.push(`/view-employee/${id}`);
// }
  // viewUser(uid) {
  //   AdminService.User(uid).then((res) => {
  //     this.setState({
  //       users: this.state.users.filter((user) => user.uid !== uid),
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <h2 className="text-center">List of All users</h2>
        <div className="row m-2">
          <Button color="warning"  onClick={this.addUser}>
            Add User
          </Button>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12">
            <Table striped>
            <thead className="thead-dark text-center">
              <tr>
                <th> FirstName </th>
                <th> LastName </th>
                <th> Email </th>
                <th> Gender </th>
                <th> Password </th>
                <th> NumOfKids </th>
                <th> City </th>
                <th> Qualification </th>
                <th> Age </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.uid}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.password}</td>
                  <td>{user.numOfKids}</td>
                  <td>{user.city}</td>
                  <td>{user.educationalQualification}</td>
                  <td>{user.age}</td>
                  <td>
                  <Button
                      color="primary"
                      onClick={() => this.viewUser(user.uid)}
                    >
                      View
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => this.deleteUser(user.uid)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
            </div>
          
        </div>
      </div>
    );
  }
}


export default withRouter(ListUser);