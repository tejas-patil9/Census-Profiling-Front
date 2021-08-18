import React from 'react';
import {Link} from 'react-router-dom';
import {useState , useEffect} from 'react';
import axios from 'axios';


const MembersList= (props) => {
    
    const [familyMembers, setFamilyMembers] = useState([]);

    useEffect(() =>{
        getFamilyMembers();
       
         // eslint-disable-next-line
    },[]);

    const url="http://localhost:8082";    

    // const getFamilyMembers = async () =>{
    //     const response = await axios.get(`${url}/getAllMembers/${props.userData.uid}`);
    //     console.log(response);
    //     setFamilyMembers(response.data);
    // }
    
    const getFamilyMembers = async ()=>{
       await axios.get(`${url}/getAllMembers/${props.userData.uid}`)
        .then(res =>{
            setFamilyMembers(res.data);
        });
    }
   
    const deleteFamilyMembers = async (id) =>{
      await axios.delete(`${url}/deleteMemberById/${id}`)
    }

    // const getMembersData = () => {
    //     props.getMembersData();
    // }

    return (
        <div className="container my-3">
            {/* <Link className="btn btn-outline-primary my-3 float-right" to={`userprofile/addUser/${this.props.userData.uid}`}>Add Member</Link> */}
            <div className="row">
                <div className="col-12">
                <table className="table shadow table-hover">
                <thead className="thead-dark text-center">
                    <tr>
                        <th>Sr. No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Education</th>
                        <th>Realtion</th>
                        <th>Actions</th>
                    </tr>                    
                </thead>

                <tbody className="text-center">
                {
                    familyMembers.map((values, index) => (
                        <tr>
                            <td >{index+1}</td>
                            <td>{values.memFirstName}</td>
                            <td>{values.memLastName}</td>
                            <td>{values.memGender}</td>
                            <td>{values.ageOfMember}</td>
                            <td>{values.education}</td>
                            <td>{values.relationWithMember}</td>

                            <td>
                            {/* to={`/user/editUser/${props.userData.uid}`} */}
                                <Link className="btn btn-primary my-1 mx-1 btn-sm" >Edit</Link>
                                <Link className="btn btn-danger my-1 mx-1 btn-sm" onClick={() => {deleteFamilyMembers(values.memId);}} >Delete</Link>
                            </td>
                        </tr>
                    ))
                }                                        
                </tbody>

            </table>
                </div>
            </div>
            
        </div>
    )
}

export default MembersList;
