import React, {useState } from 'react';

import axios from 'axios';

function AllFamilyMembers() {

    const[member , setMember] = useState([]);
  //  const[isCleared , setIsCleared] = useState(false);

    const onGetMembers=()=>{
        axios.get("http://localhost:8082/getAllFamilyMembers")
        .then(res=>{
            console.log(res.data);
            setMember(res.data);
        }).catch(err =>{
            console.log(err.message);
        })
        // setIsCleared(true);
    }
    const onClear=()=>{
        setMember([]);
    }
    const userStyle ={
        display : 'grid',
        gridTemplateColumns : 'repeat(2 ,1fr )',
        gridGap : '1rem'
    
    }
    return (
        <div className="container">
            <h2 className="text-center">Get Members information added by all users</h2>
                <div className="row ">
                    <div className="col-auto offset-sm-5 my-3">
                        <div className="text-center">
                            <button className="btn btn-dark" onClick={onGetMembers}>Get Info</button>
                        </div>
                    </div>
                    <div className="col-auto my-3">
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={onClear}>Clear</button>
                        </div>
                    </div>
                </div>
            
             
             <div className="mt-3 cardo">
                <div style={userStyle}>
                    {member.map(member => (
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="card-title">
                                            Name : {member.memFirstName} {member.memLastName}
                                        </div>
                                        <p><i className="fa fa-graduation-cap"></i> : {member.education}</p>
                                        {/* <p><i className="fa fa-envelope"></i> : {member.email}</p> */}
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <p>Age : {member.ageOfMember}</p>
                                        <p><i className="fa fa-venus-mars"></i> : {member.memGender}</p>
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

export default AllFamilyMembers
