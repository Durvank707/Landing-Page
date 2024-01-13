import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='container'>
        <video src='/videos/video-1.mp4' autoPlay muted loop></video>
        <h1>Adventure Awaits</h1> 
        <p>What are you waiting for?</p>
        <div className='dash-button'>
            <button className='dash-button1'>Get Started</button>
            <button className='dash-button2'>Watch Trailer</button>
        </div>
    </div>
  )
}

export default Dashboard