import React from 'react'
import { useTimer } from 'react-timer-hook';

const Timer = ({setIsOpen, expiryTimestamp}) => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {alert("Test Ended");setIsOpen(false)}});

    return (
        <div style={{textAlign : "center"}}>
            <div style={{fontSize: '40px'}}>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
    )
}

export default Timer