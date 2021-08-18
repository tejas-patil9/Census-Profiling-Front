import React, { Component } from 'react';
import axios from 'axios';



class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            email : "",
            password: "",
            numOfKids : 0,
            city : "",
            educationalQualification : "",
            age : 0,
            role : "USER"
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.firsthandler = this.firsthandler.bind(this);
        this.lasthandler = this.lasthandler.bind(this);
        this.passwordhandler = this.passwordhandler.bind(this);
        this.genderhandler = this.genderhandler.bind(this);
        this.cityHandler = this.cityHandler.bind(this);
        this.ageHandler = this.ageHandler.bind(this);
        this.kidHandler = this.kidHandler.bind(this);
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    emailHandler = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    cityHandler = e => {
        this.setState({
            city: e.target.value
        })
    }

    educationHandler = e => {
        this.setState({
            educationalQualification: e.target.value
        })
    }

    ageHandler = e =>{
        this.setState({
            age: e.target.value
        })
    }
    kidHandler = e => {
        this.setState({
            numOfKids : e.target.value
        })
    }

    handleSubmit = (event) => {
        
        console.log(this.state);
        let user ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender : this.state.gender,
            email : this.state.email,
            password : this.state.password,
            numOfKids : this.state.numOfKids,
            city: this.state.city,
            educationalQualification : this.state.educationalQualification,
            age : this.state.age,
            role : this.state.role
        }
        axios.post('http://localhost:8082/registration' ,user)
        .then(res=>{
            console.log(res.data);
            console.log(res.status);
            if(res.status === 200){
                this.props.history.push('/');
            }
            
        }).catch(e=>{
            console.log(e.message);
            if(e.message === "Request failed with status code 409"){
                alert("User With Entered Email already Exists");
            }
            
        }); //
        this.setState({
            firstName: "",
            lastName: "",
            gender: "",
            email : "",
            password: "",
            numOfKids : 0,
            city : "",
            educationalQualification : "",
            age : 0
        })
     event.preventDefault();
     
        
    }




    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="cardo">
                            <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                    <h1 className="text-center">User Registration</h1>
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                        <label>FirstName :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                        <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                                        </div>
                                    </div>
                                    
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                        <label>LastName :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                        <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Email :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="email" value={this.state.email} onChange={this.emailHandler} placeholder="Email" required/><br />
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Password :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." required /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Age :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                         <input type="number" value={this.state.age} onChange={this.ageHandler} placeholder="Enter your Age" /><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Gender :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <select onChange={this.genderhandler} defaultValue="Select Gender">
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
                                         <input type="number" value={this.state.numOfKids} onChange={this.kidHandler}  /><br />
                                        </div>
                                    </div>
                                    
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>City :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text" value={this.state.city} onChange={this.cityHandler} placeholder="Residing city" required/><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Educational Qualification :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <select onChange={this.educationHandler} defaultValue="Education">
                                            <option defaultValue>Education</option>
                                            <option value="PostGraduation">PG and Above(Masters)</option>
                                            <option value="UnderGraduation">Under Graduation (Bachelors)</option>
                                            <option value="JuniorCollege">Junior College (12th)</option>
                                            <option value="HighSchool">School (10th)</option>
                                            </select><br />
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-dark btn-block" value="Register" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Register;