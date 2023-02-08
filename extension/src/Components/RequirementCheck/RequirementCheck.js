import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import "./RequirementCheck.css"

const RequirementCheck = ({setTab, id}) => {
    const [isAudioLoading, setIsAudioLoading] = useState(0);
    const [isVideoLoading, setIsVideoLoading] = useState(0);

    useEffect(() => {
        setTimeout(checkAudio, 1000);
        setTimeout(checkVideo, 2000);
    }, [])

    const checkVideo = () => {
        const video = document.createElement('video');

        if (video.canPlayType('video/mp4')) {
            setIsVideoLoading(1);
        } 
        else {
            setIsVideoLoading(2);
        }
    }

    const checkAudio = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            setIsAudioLoading(1);
        })
        .catch(error => {
            setIsAudioLoading(1);
        });
    }

    return (
        <div className='RequirementCheck'>
            <h4>Audio and Video Requirement Check</h4>
            <div className='CheckSupport'>
                <p>Checking Audio Support...</p>
                {
                    isAudioLoading === 0?
                    <CircularProgress />
                    :
                    (
                        isAudioLoading === 1?
                        <CheckCircleIcon style={{color : "green"}} />
                        :
                        <CancelIcon style={{color : "red"}} />
                    )
                }
            </div>
            <div className='CheckSupport'>
                <p>Checking Video Support...</p>
                {
                    isVideoLoading === 0?
                    <CircularProgress />
                    :
                    (
                        isVideoLoading === 1?
                        <CheckCircleIcon style={{color : "green"}} />
                        :
                        <CancelIcon style={{color : "red"}} />
                    )
                }
            </div>
            {
                (isVideoLoading === 1 && isAudioLoading === 1)?
                <div>Your Unique Test Id is : {id}, paste this Id in test page to continue.</div>
                :
                <></>
            }
            {(isVideoLoading === 1 && isAudioLoading === 1)?<Button variant="contained" className='MaterialButton' onClick={() => window.close()}>Done</Button>:<></>}
        </div>
    )
}

export default RequirementCheck