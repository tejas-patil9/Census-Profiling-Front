import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';

const EditUser = ({match}) => {

    const [member, setMember] = useState({
        memId: `${match.params.id}`,
        memFirstName : '',
        memLastName : '',
        memGender : '',
        relationWithMember : '',
        ageOfMember : '',
        education : '',
        user: '',
    });

    const url="http://localhost:8082";

    const {id} = useParams();

    const history = useHistory();

    const {  memFirstName, memLastName, memGender, relationWithMember, ageOfMember, education, user } = member;
    console.log(member);

    useEffect(() => {
        getMember();
        // eslint-disable-next-line
    }, []);

    const getMember = async () =>{
        const result = await axios.get(`${url}/getMemberById/${id}`);
        console.log(result);
        setMember(result.data);
    };

    const handleChange = (e) =>{
        setMember({...member, [e.target.name] : e.target.value });
    };

    const onMemberSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/updateFamilyMemInfo`, member);
        history.push('/userprofile');
    };

    return (
        <div classNameName="container my-4">
            <form className="col-md-6 mx-auto" onSubmit={e => onMemberSubmit(e)}>
                <h1 className="bold text-center my-3">Edit Family Member</h1>

                <div className="form-group">
                <input
                    type="text"
                    id="memId"
                    className="form-control"
                    name="memId"
                    value={member.memId}
                    onChange= {handleChange}
                    required
                />
                </div>

                <div className="form-group">
                <label for="mem_first_name">First Name</label>
                <input
                    type="text"
                    id="memFirstName"
                    className="form-control"
                    placeholder="Enter your name"
                    name="memFirstName"
                    value={memFirstName}
                    onChange= {handleChange}
                    required
                />
                </div>

                <div className="form-group">
                <label for="mem_last_name">Last Name</label>
                <input
                    type="text"
                    id="memLastName"
                    className="form-control"
                    placeholder="Enter your surname"
                    name="memLastName"
                    value={memLastName}
                    onChange= {handleChange}
                    required
                />
                </div>

                <div class="form-group">
                            <label>Gender</label>
                            <div class="form-group">
                                <label class="radio inline mr-3">
                                    <input type="radio" id="memGender" name="memGender" checked= {memGender === "Male"} value="Male" onChange= {handleChange}/>
                                    <span>Male</span>
                                </label>
                                <label class="radio inline mr-3">
                                    <input type="radio" id="memGender" name="memGender" checked= {memGender === "Female"} value="Female" onChange= {handleChange}/>
                                    <span>Female</span>
                                </label>
                                <label class="radio inline">
                                    <input type="radio" id="memGender" name="memGender" checked= {memGender === "Other"} value="Other" onChange= {handleChange}/>
                                    <span>Other</span>
                                </label>
                            </div>
                </div>

                <div className="form-group">
                <label for="age">Age</label>
                <input
                    type="number"
                    id="ageOfMember"
                    className="form-control"
                    placeholder="Enter your username"
                    name="ageOfMember"
                    value={ageOfMember}
                    onChange= {handleChange}
                    required
                />
                </div>

                <div className="form-group">
                <label>Education</label>
                <input
                    type="text"
                    id="education"
                    className="form-control"
                    placeholder=""
                    name="education"
                    value={education}
                    onChange= {handleChange}
                    required
                />
                </div>

                <div className="form-group">
                <label>Relation</label>
                <input
                    type="text"
                    id="relationWithUser"
                    className="form-control"
                    placeholder="Enter your relation with the member"
                    name="relationWithUser"
                    value={relationWithMember}
                    onChange= {handleChange}
                    required
                />
                </div>

                <div className="form-group">
                
                <input
                    type="text"
                    id="user"
                    name="user"
                    placeholder="user"
                    className="form-control"
                    value={user}
                />
                </div>

                <div className="text-center">
                <button type="submit" className="btn btn-primary mt-2">
                    Submit
                </button>
                </div>
            </form>
        </div>

    )
}

export default EditUser;