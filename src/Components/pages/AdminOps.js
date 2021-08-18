import React, { Component } from 'react';
import axios from 'axios';

export class AdminOps extends Component {
    constructor(props){
        super(props);
        this.state = {
            targetMem:[] 
        }
        this.getUsers = this.getUsers.bind(this);
        this.onClear = this.onClear.bind(this);
    }
    
    getUsers(){
        axios.get('http://localhost:8082/getMembersByAgeGroup')
        .then(res => {
            console.log(res.data);
            this.setState({targetMem : res.data});
            console.log(this.state);
        }).catch(err =>{
            console.log(err.message); //
        });
    }
    onClear(){
        this.setState({targetMem : []});
    }
    // getTargetUsers(){
    //     axios.get('http://localhost:8082/getUsersByAgeGroup')
    //     .then(res => {
    //         console.log(res.data);
    //     }).catch(err =>{
    //         console.log(err.message);
    //     })
    // }
    render() {
        return (
            <div>
            <div className="row ">
                    <div className="col-auto offset-sm-5 my-3">
                        <div className="text-center">
                            <button className="btn btn-dark" onClick={this.getUsers}>Get Info</button>
                        </div>
                    </div>
                    <div className="col-auto my-3">
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={this.onClear}>Clear</button>
                        </div>
                    </div>
                </div>
            <div style={userStyle}>
                {this.state.targetMem.map(member => (
                    <div className="card bg-light">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 col-sm-6">
                                    <div className="card-title">
                                        Name : {member.memFirstName} {member.memLastName}
                                    </div>
                                    <p><i className="fa fa-graduation-cap"></i> : {member.education}</p>
                                </div>
                                <div className="col-6 col-sm-6">
                                    <p>Age : {member.ageOfMember}</p>
                                    <p><i className="fa fa-venus-mars"></i> : {member.memGender}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}
const userStyle ={
    display : 'grid',
    gridTemplateColumns : 'repeat(2 ,1fr )',
    gridGap : '1rem'

}
export default AdminOps;
