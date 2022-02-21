import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/backgroundvideo.mp4"

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className="video" src={coverVideo} autoPlay loop muted/>
        <h1>Sirre</h1>
        <p>Especialized | Consulting | Management | Training</p>
    </div>
  )
}

export default Cover