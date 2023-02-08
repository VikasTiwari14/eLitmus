import React, {useState, useEffect} from 'react'
import "./Login.css"
// import {useHistory} from "react-router-dom";
import axios from 'axios';
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // let history = useHistory();


    const signIn = async() => {
        if (email === "" || password === "") {
            alert("Enter Username and Password");
            return;
        }

        try {
            const res = await axios.post("http://localhost:8000/admin/login", {
                email: email,
                password: password
            });

            console.log(res);
        
            if(res.data.success){
                localStorage.setItem("name", res.data.data.name);
                localStorage.setItem("email", res.data.data.email);
                localStorage.setItem("id", res.data.data.id);
                navigate("/dashboard");
            }
            else{
                alert(res.data.message);
            }
        } 
        catch (error) {
            alert("Some Error Occured!");
        }
    }


    return (
        <div className='Login'>
            <div className='LoginCard'>
                <div className='LogoContainer'>
                    <h1>eLitmus</h1>
                </div>
                <hr/>
                <div className='FormContainer'>
                    <div>
                        <span>Email</span>
                        <TextField type="text" style={{fontSize: "1rem"}} value={email}
                                      onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <span>Password</span>
                        <TextField type="password" style={{fontSize: "1rem"}} value={password}
                                      onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <Button variant='contained' className="LoginBtn" onClick={signIn}>
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login