import React, { Component } from 'react'
import AdminService from '../AdminService'
//import axios from 'axios';


class ViewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uid: this.props.match.params.uid,
            user : [],
            member : []

        }
        this.back = this.back.bind(this);
    }

    componentDidMount(){
       AdminService.getUserById(this.state.uid).then( res => {
            this.setState({user: res.data});
            console.log(res.data);
        })
        
    }

    // getFamMmber(){
    //     axios.get(`http://localhost:8082/getAllMembers/${this.state.user.uid}`)
    //     .then(res => {
    //         console.log(res.data);
    //         this.setState({member :res.data});
    //     }).catch(err =>{
    //         console.log(err.message);
    //     })
    // }

    back(){
        this.props.history.push('/adminprofile');
    }

    render() {
        return (
            <div className="view">
                <br></br>
                <div className = "card cardo col-md-6 offset-md-3 ">
                    <h3 className = "text-center"> User Details </h3>
                    <div className = "card-body ">
                        <div className = "row">
                            <label className="col-6 col-sm-3">  First Name  : </label>
                            <div className="col-sm-9"> { this.state.user.firstName }</div>
                        </div>
                        
                        <div className = "row">
                            <label className="col-6 col-sm-3"> Last Name :  </label>
                            <div className="col-sm-9"> { this.state.user.lastName }</div>
                        </div>
                        
                        <div className = "row">
                            <label className="col-6 col-sm-3">  Email :  </label>
                            <div className="col-sm-9"> { this.state.user.email }</div>
                        </div>
                        
                        <div className = "row">
                            <label className="col-6 col-sm-3">  Password :  </label>
                            <div className="col-sm-9"> { this.state.user.password }</div>
                        </div>
                        
                        <div className = "row">
                            <label className="col-6 col-sm-3">  Gender :  </label>
                            <div className="col-sm-9"> { this.state.user.gender }</div>
                        </div>
                        
                        <div className = "row">
                            <label className="col-6 col-sm-3">  Age : </label>
                            <div className="col-sm-9"> { this.state.user.age }</div>
                        </div>
                        
                        <div className = "row">
                            <label className="col-6 col-sm-3">  Educational Qualification :  </label>
                            <div className="col-sm-9"> { this.state.user.educationalQualification }</div>
                        </div>
                      
                        <div className = "row">
                            <label className="col-6 col-sm-3">  City :  </label>
                            <div className="col-sm-9"> { this.state.user.city }</div>
                        </div>
                        
                        <div className = "row">
                            <label className="col-6 col-sm-3">  NumOfKids :  </label>
                            <div className="col-sm-9"> { this.state.user.numOfKids }</div>
                            
                        </div>
                        
                        
                    </div>
                     <div className="text-center">
                        <button className="btn btn-dark btn-block" onClick={this.back} style={{marginLeft: "10px"}}>Back</button>
                     </div>
                </div>
            </div>
        )
    }
}

export default ViewUser;