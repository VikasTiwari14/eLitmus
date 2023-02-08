import { Button, TextField } from '@mui/material'
import React, {useState, useEffect} from 'react'
import SaveIcon from '@mui/icons-material/Save';
import "./UserDetailForm.css"

const UserDetailForm = ({setTab, setTestDetails, setId}) => {
    const [userDetail, setUserDetail] = useState({
        name : "",
        email : "",
        testInvitationCode : ""
    });
    const [isHide, setIsHide] = useState(true);
    const [message, setMessage] = useState("");

    const handleChange = (name, value) => {
        setUserDetail({...userDetail, [name] : value});
        setIsHide(true);
    }

    const checkValidity = (variable) => {
        if(variable === "") return true;
        return false;
    }

    const saveDetails = async() => {
        if(checkValidity(userDetail.name) || checkValidity(userDetail.email) || checkValidity(userDetail.testInvitationCode)){
            setIsHide(false);
            setMessage("All fields are Mandatory");
            return;
        }

        try{
            const res = await fetch("http://localhost:8000/save/user-data",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(userDetail),
            });
            const data = await res.json();

            console.log(data);
            setUserDetail({
                name : "",
                email : "",
                testInvitationCode : ""
            })
            setIsHide(true);
            setTab(1);
            setTestDetails(data.data.testDetails);
            setId(data.data.id);
            localStorage.setItem("id", data.data.id);
        }
        catch(err){
            setMessage("Some Error Occured!");
            setIsHide(false);
        }
    }
    return (
        <div className='UserDetailForm'>
            <TextField label="Name" className='MaterialInput' value={userDetail.name} onChange={(e) => handleChange("name", e.target.value)} />
            <TextField label="Email" className='MaterialInput' value={userDetail.email} onChange={(e) => handleChange("email", e.target.value)} />
            <TextField label="Test Invitation Code" className='MaterialInput' value={userDetail.testInvitationCode} onChange={(e) => handleChange("testInvitationCode", e.target.value)} />
            <Button variant="contained" className='MaterialButton' startIcon={<SaveIcon />} onClick={saveDetails}>Save Details</Button>
            {
                !isHide&&<span style={{color : "red"}}>{message}</span>
            }
        </div>
    )
}

export default UserDetailForm