import axios from 'axios';
import React, { useState } from 'react'
import "./Home.css"

const Home = ({setIsOpen}) => {
    const [testId, setTestId] = useState("");

    const handleClick = async() => {
        axios.get(`http://localhost:8000/get/user-data/by/id/${testId}`)
        .then((res) => {
            if(!res.data.success){
                alert("Invalid Test Id");
                return;
            }

            console.log(res)

            localStorage.setItem("id", testId);
            localStorage.setItem("duration", res.data.data.testDetails.duration);
            localStorage.setItem("imageInterval", res.data.data.testDetails.imageInterval);
            setIsOpen(true);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='Home'>
            <h1>eLitmus</h1>
            <h4>Enter Your Unique Test Id to Continue.</h4>
            <input type="text" value={testId} onChange={(e) => setTestId(e.target.value)} />
            <button onClick={handleClick}>Continue</button>
        </div>
    )
}

export default Home