import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddUser = ({match}) => {
    const url="http://localhost:8082";

    const [member, setMember] = useState({});

    useEffect(()=>{
        setMember({
            memFirstName: '',
            memLastName: '',
            ageOfMember: '',
            memGender: '',
            education: '',
            relationWithMember:'',
            user: `${match.params.id}`,
        });
         // eslint-disable-next-line
    }, []);

    const history = useHistory();

    // const {fname, lname, age, gender, relation, education} = member;

    const handleChange = (event) =>{
        setMember({...member, [event.target.name] : event.target.value});
    }

    const submitAddMember = (event) =>{
        event.preventDefault();
        axios.post(`${url}/addmember`, member);
        // event.preventDefault();
        history.push('/userProfile');
    }

    return (
    <div classNameName="container my-4">
      <form className="col-md-6 mx-auto" onSubmit={e => submitAddMember(e)}>
        <h1 className="bold text-center my-3">Add Family Member</h1>

        <div className="form-group">
        <label for="memFirstName">First Name</label>
          <input
            type="text"
            id="memFirstName"
            className="form-control"
            placeholder="Enter your name"
            name="memFirstName"
            value={member.memFirstName}
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
            value={member.memLastName}
            onChange= {handleChange}
            required
          />
        </div>

        <div class="form-group">
            <label>Gender</label>
            <div class="form-group">
                <label class="radio inline mr-3">
                    <input type="radio" id="memGender" name="memGender" value="Male" onChange= {handleChange}/>
                    <span>Male</span>
                </label>
                <label class="radio inline mr-3">
                    <input type="radio" id="memGender" name="memGender" value="Female" onChange= {handleChange}/>
                    <span>Female</span>
                </label>
                <label class="radio inline">
                    <input type="radio" id="memGender" name="memGender" value="Other" onChange= {handleChange}/>
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
            placeholder="Enter your age"
            name="ageOfMember"
            value={member.ageOfMember}
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
            placeholder="Enter your eduacation"
            name="education"
            value={member.education}
            onChange= {handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Relation</label>
          <input
            type="text"
            id="relationWithMember"
            className="form-control"
            placeholder="Enter your relation with the member"
            name="relationWithMember"
            value={member.relationWithMember}
            onChange= {handleChange}
            required
          />
        </div>

        <div className="form-group">
          
          <input
            type="hidden"
            id="user_uid"
            name="user_uid"
            placeholder="user_id"
            className="form-control"
            value={member.user}
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

export default AddUser;