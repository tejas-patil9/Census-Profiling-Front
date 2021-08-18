import React from 'react';
import AddMember  from '../layouts/AddMember';
import MembersList  from '../layouts/MembersList';

import { useLocation , useHistory} from "react-router-dom";
import axios from 'axios';

function UserProfile() {
    const location = useLocation();

    // useEffect(() => {
    //    console.log(location.pathname); // result: '/secondpage'
    //    console.log(location.search); // result: '?query=abc'
    //    console.log(location.state.detail); // result: 'some_value'
    // }, [location]);
    
    let history = useHistory();
    const onLogout = (e) => {
        axios.get('http://localhost:8082/logout')
        .then(res =>{
            console.log(res.data);
            if(res.data === "You are logged Out"){
                history.push('/logout');
            }
        })
    }

    const userData = location.state.detail;
    
    
    
    return (
        <div className="container-fluid">
             <div class="jumbotron">
                <div className="row ">
                    <div className="col-12 col-sm-6">
                        <h1 class="display-4">Hello, {userData.firstName}!</h1>
                        <h3>Welcome to Your profile!</h3>
                        <p class="lead"> Please provide information about yourself and your family members.</p>
                        <hr class="my-4"/>
                        <button className="btn btn-dark" onClick={onLogout}> Logout</button>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h4 class="lead"> Email : {userData.email}</h4>
                        <p class="lead"> Age : {userData.age}</p>
                        <p class="lead"> Gender : {userData.gender}</p>
                        <p class="lead"> Education : {userData.educationalQualification}</p>
                    </div>
                </div>
                
                
            </div>
            <div className="row">
                <div className="col-sm-4 col-12">
                    <AddMember userData={userData} />
                    
                </div>
                <div className="col-sm-8 col-12">
                    <MembersList userData={userData} />
                </div>
            </div>
        </div>
    )
}

export default UserProfile;

