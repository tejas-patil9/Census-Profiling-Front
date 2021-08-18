import React from 'react';
import axios from 'axios';
import {useState } from 'react';

function SameCity() {
    const [users , setUsers] = useState([]);
    const [city , setCity] = useState('');

   const onSearchChange =(e)=>{
       setCity(e.target.value);
   }

   

   const onSubmitCity = (e) =>{
    axios.get(`http://localhost:8082/getUsersByCity/${city}`).then(
        res => {
            console.log(res.data);
            setUsers(res.data);
        }
    );
    setCity('');  
        e.preventDefault();
        
   }
    
   const userStyle ={
    display : 'grid',
    gridTemplateColumns : 'repeat(2 ,1fr )',
    gridGap : '1rem'

    }
    const onClear = () =>{
        setUsers([]);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 offset-sm-2">
                    <input class="form-control" type="text" name="search" placeholder="Type city"  onChange={onSearchChange}/>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3 text-center mx-3">
                        <button className="btn btn-dark " onClick={onSubmitCity}>Get Users</button>
                    </div>
                    <div className="col-12 col-sm-3 text-center mx-3">
                        <button className="btn btn-dark " onClick={onClear}>Clear</button>
                    </div>
                </div>
                
            </div>
            <div className="mt-3">
                <div style={userStyle}>
                    {users.map(member => (
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="card-title">
                                            Name : {member.firstName} {member.lastName}
                                        </div>
                                        <p><i className="fa fa-graduation-cap"></i> : {member.educationalQualification}</p>
                                        <p><i className="fa fa-envelope"></i> : {member.email}</p>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <p>Age : {member.age}</p>
                                        <p><i className="fa fa-venus-mars"></i> : {member.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SameCity;
