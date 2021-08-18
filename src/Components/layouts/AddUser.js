import React, { Component } from 'react';
//import axios from 'axios';
import {  withRouter} from 'react-router-dom';
import AdminService from '../AdminService';

// 
 class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            uid: this.props.match.params.uid,
            firstName : '',
            lastName : '',
            email : '',
            password : '',
           gender : '',
            age : '',
            numOfKids : 0,
            city : "",
            education : ""
        }
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeCityhandler = this.changeCityhandler.bind(this);
        this.changeNumofKidsHandler = this.changeNumofKidsHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeEducationHandler = this.changeEducationHandler.bind(this);
    }
    changefirstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    changelastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    changepasswordHandler =(event) =>{
        this.setState({
            password: event.target.value
        })
    }
    changegenderHandler =(event) =>{
        this.setState({
            gender: event.target.value
        })
    }
    changeEmailHandler =(event) =>{
        this.setState({
            email: event.target.value
        })
    }
    changeCityhandler =(event) =>{
        this.setState({
            city: event.target.value
        })
    }
    changeEducationHandler =(event) =>{
        this.setState({
            education: event.target.value
        })
    }
    changeAgeHandler =(event) =>{
        this.setState({
            age: event.target.value
        })
    }
    changeNumofKidsHandler =(event) =>{
        this.setState({
            numOfKids: event.target.value
        })
    }

    componentDidMount(){

        // step 4
        if(this.state.uid === '_add'){
            return
        }else{
            AdminService.getUserById(this.state.uid).then( (res) =>{
                let user = res.data;
                this.setState({firstName: user.firstName,
                    lastName: user.lastName,
                    email : user.email,
                    password : user.password,
                    gender : user.gender,
                    age: user.age,
                    education : user.education,
                    city: user.city,
                    numOfKids: user.numOfKids
                });
            });
        }        
    }
    saveUser = (e) => {
        e.preventDefault();
        
        let user = {
            firstName: this.state.firstName,lastName: this.state.lastName,gender : this.state.gender,email : this.state.email,
            password : this.state.password,numOfKids : this.state.numOfKids, city: this.state.city
            ,educationalQualification : this.state.education,age : this.state.age
        };
        console.log('user => ' + JSON.stringify(user));

        // step 5
        // if(this.state.uid === '_add'){
            AdminService.addUser(user).then(res =>{
                this.props.history.push('/adminprofile');
            });
        }
    
  
    




    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="cardo">
                            <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                    <h1 className="text-center">Add User</h1>
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                        <label>FirstName :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                        <input type="text" value={this.state.firstName} onChange={this.changefirstNameHandler} placeholder="FirstName..." /><br />
                                        </div>
                                    </div>
                                    
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                        <label>LastName :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                        <input type="text" value={this.state.lastName} onChange={this.changelastNameHandler} placeholder="LastName..." /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Email :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="email" value={this.state.email} onChange={this.changeEmailHandler} placeholder="Email" required/><br />
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Password :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="password" value={this.state.password} onChange={this.changepasswordHandler} placeholder="Password..." required /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Age :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                         <input type="number" value={this.state.age} onChange={this.changeAgeHandler} placeholder="Enter your Age" /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Gender :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <select onChange={this.changegenderHandler} defaultValue="Select Gender">
                                            <option defaultValue>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            </select><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>No. of Kids :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                         <input type="number" value={this.state.numOfKids} onChange={this.changeNumofKidsHandler}  /><br />
                                        </div>
                                    </div>
                                    
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>City :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text" value={this.state.city} onChange={this.changeCityhandler} placeholder="Residing city" required/><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Educational Qualification :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <select onChange={this.changeEducationHandler} defaultValue="Education">
                                            <option defaultValue>Education</option>
                                            <option value="PG">PG and Above</option>
                                            <option value="UG">Under Graduation</option>
                                            <option value="College">Junior College</option>
                                            <option value="School">Schooling</option>
                                            </select><br />
                                        </div>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default withRouter (AddUser);