import React from 'react'
import "../styles/Workvideo.css"

const Workvideo = () => {
  return (
    <div className='Work_caja'>
        <div>
           <h2>DEMOSTRACION DE NUESTRO TRABAJO</h2> 
        </div>
        <div className='Box_video'>
            <video src="/images/TikTokVideoWork.mp4" controls>
            </video>
        </div>
    </div>
  )
}

export default Workvideo