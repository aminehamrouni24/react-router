import React from 'react'
import sample from '../Video/sample.mp4'
import './Video.css'
function Video() {
    return (
        <div>
         <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
    </video>   
        </div>
    )
}

export default Video
