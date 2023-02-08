import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StudentDetail from './StudentDetail/StudentDetail';
import StudentTable from './StudentTable/StudentTable';


const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <div className='Dashboard'>
            <div className='DashboardHeader'>
                <h2>eLitmus</h2>
                <div className='DashboardHeaderRight'>
                    <div>
                        <p>Welcome</p>
                        <p>{localStorage.getItem("name")}</p>
                    </div>
                    <AccountCircleIcon className='Icons' />
                    <LogoutIcon className='Icons' onClick={logout} />
                </div>
            </div>
            {
                isOpen?
                <StudentDetail setIsOpen={setIsOpen} userData={userData} />
                :
                <StudentTable setIsOpen={setIsOpen} setUserData={setUserData} />
            }
        </div>
    )
}

export default Dashboard