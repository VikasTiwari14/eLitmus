import moment from 'moment'
import React from 'react'

const StudentDetail = ({setIsOpen, userData}) => {
    return (
        <div className='StudentDetail'>
            <div className='StudentDetailHeader'>
                <p style={{color : "blue"}} onClick={() => setIsOpen(false)}>back</p>

                <div className='StudentHeader'>
                    <h3>{userData?.name} ( {userData?.email} )</h3>
                    <h4>ID : {userData?.id}</h4>
                </div>

                <div className='StudentHeader'>
                    <h3>Test Invitation Code : {userData?.testInvitationCode}</h3>
                    <h3>Test Start Time : {moment(userData?.testTime).format("DD-MM-YYYY HH:mm:ss")}</h3>
                </div>
                <h2>User Images</h2>
                {
                    (userData.images && userData.images.length)?
                    <div className='ImageContainer'>
                        {
                            userData?.images.map((dt, key) => {
                                return <div style={{display : "grid", textAlign: "center"}}>
                                    <img src={dt.url} />
                                    {moment(dt?.timeStamp).format("DD-MM-YYYY HH:mm:ss")}
                                </div>
                            })
                        }
                    </div>
                    :
                    <div>
                        <h4 style={{textAlign : "center"}}>No Images Found</h4>
                    </div>
                }
            </div>
        </div>
    )
}

export default StudentDetail