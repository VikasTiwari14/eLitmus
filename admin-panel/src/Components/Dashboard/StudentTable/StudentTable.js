import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import axios from 'axios';

const StudentTable = ({setIsOpen, setUserData}) => {
    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/get/user-data/for/admin/id/${localStorage.getItem("id")}`)
        .then((res) => {
            if(res.data.success){
                setMainData(res.data.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Student Id</TableCell>
                    <TableCell align="right">Student Name</TableCell>
                    <TableCell align="right">Student Email</TableCell>
                    <TableCell align="right">Test Invitation Code</TableCell>
                    <TableCell align="right">Test Start Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    mainData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => {setIsOpen(true);setUserData(row)}}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.testInvitationCode}</TableCell>
                        <TableCell align="right">{moment(row.testTime).format("DD-MM-YYYY HH:mm")}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default StudentTable