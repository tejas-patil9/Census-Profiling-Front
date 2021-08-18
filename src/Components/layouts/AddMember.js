import React, { Component } from 'react';
import axios from 'axios';

export class AddMember extends Component {
    constructor(props){
        super(props);
        this.state = {
            memFirstName : '',
            memLastName : '',
            memGender : '',
            relationWithMember : '',
            ageOfMember : '',
            education : '',
            user : 0
        }
    }
    firsthandler = (event) => {
        this.setState({
            memFirstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            memLastName: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            memGender: event.target.value
        })
    }
    relationhandler = (event) => {
        this.setState({
            relationWithMember : event.target.value
        })
    }
    agehandler = (event) => {
        this.setState({
            ageOfMember : event.target.value
        })
    }
    educationhandler = (event) => {
        this.setState({
            education : event.target.value
        })
    };
    
    handleSubmit = async e =>{
        this.setState({user : this.props.userData.uid});
        e.preventDefault();
        console.log(this.props.userData.uid);
         
        let famMember ={
            memFirstName : this.state.memFirstName,
            memLastName : this.state.memLastName,
            memGender : this.state.memGender,
            relationWithMember : this.state.relationWithMember,
            ageOfMember : this.state.ageOfMember,
            education : this.state.education,
            user : this.props.userData.uid
        };
       await axios.post('http://localhost:8082/addmember' , famMember)
        .then(res=>{
            console.log(res.data);
            this.props.getFamilyMembers();
        })
    }
    
    
    
    render() {
        
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="cardo">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <h1 className="text-center">Add Member</h1>
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>FirstName :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                         <input type="text" placeholder="FirstName..." onChange={this.firsthandler}/><br />
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Last Name :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text" placeholder="Last Name" onChange={this.lasthandler}/><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Gender :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <select onChange={this.genderhandler}>
                                            <option defaultValue>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            </select><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Relation with Member :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <select onChange={this.relationhandler}>
                                                <option defaultValue>Select Relation</option>
                                                <option value="Father">Father</option>
                                                <option value="Mother">Mother</option>
                                                <option value="Wife">Wife</option>
                                                <option value="Husband">Husband</option>
                                                <option value="Brother">Brother</option>
                                                <option value="Sister">Sister</option>
                                                <option value="Son">Son</option>
                                                <option value="Daughter">Daughter</option>
                                            </select><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Age :</label> 
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <input type="text" placeholder="Age" onChange={this.agehandler} max="110" min="1" required/><br />
                                        </div>
                                    </div>

                                    <div className="row p-1">
                                        <div className="col-sm-4 col-12">
                                            <label>Educational Qualification :</label>
                                        </div>
                                        <div className="col-sm-8 col-12">
                                            <select  defaultValue="Education" onChange={this.educationhandler}>
                                            <option defaultValue>Education</option>
                                            <option value="PostGraduation">PG and Above(Masters)</option>
                                            <option value="UnderGraduation">Under Graduation(Bachelors)</option>
                                            <option value="JuniorCollege">Junior College(12th)</option>
                                            <option value="HighSchool">High School(10th)</option>
                                            </select><br />
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-dark btn-block" value="Add Member" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr />
                    
                </div>
            </div>
        )
    }
}

export default AddMember
