import axios from 'axios';
import React,{useState, useRef, useEffect} from 'react'
import Webcam from 'react-webcam';
import Timer from './Timer';

const VideoStream = ({setIsOpen}) => {
    const id = localStorage.getItem("id");
    const duration = localStorage.getItem("duration");
    const imageInterval = localStorage.getItem("imageInterval");
    
    const webRef = useRef(null);
    const time = new Date();

    useEffect(() => {
        let t = imageInterval*60*1000;
        setInterval(() => {
            saveImage(webRef.current.getScreenshot());
        }, t);
    }, [])

    const saveImage = (file) => {
        var formData = new FormData();
        formData.append('file', file);
    
        axios.post('http://localhost:8000/save/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            updateImageInUserData(res.data.data);
        })
        .catch(err => {
            console.error(err);
        });

    }

    const updateImageInUserData = async(url) => {
        try{
            const res = await fetch("http://localhost:8000/add/images/in/user-data",{
                method: "PUT",
                headers: {
                    "Content-Type":"application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    id : id,
                    url : url
                }),
            });
            const data = await res.json();
        }
        catch(err){
            console.log(err);
        }
    }

    time.setMinutes(time.getMinutes() + parseInt(duration));

    return (
        <div className='VideoStream'>
            <Timer setIsOpen={setIsOpen} expiryTimestamp={time} />
            <Webcam ref={webRef} width={400} />
            {/* <button onClick={saveImage}>Save</button> */}
        </div>
    )
}

export default VideoStream