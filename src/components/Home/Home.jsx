import React from 'react'
import './Home.css'
import me from '../../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1", {
      y:80,
      duration:0.7,
      opacity:0
    })
     tl1.from(".line2", {
      y:80,
      duration:0.7,
      opacity:0
    }) 
    tl1.from(".line3", {
      y:80,
      duration:0.7,
      opacity:0
    }) 
    tl1.from(".righthome img", {
      x:200,
      duration:0.7,
      opacity:0
    })
  })
  return (
    <div id='home'>
      <div className='lefthome'>
        <div className='details'>
          <div className='line1'>I'M</div>
          <div className='line2'>ASHVINI TAYDE</div>
          <div className='line3'>
            <TypeAnimation
              sequence={[
                'WEB DEVELOPER',        // types this
                2000,                   // waits 2s
                'SOFTWARE DEVELOPER',  
                2000,
                'MERN STACK DEVELOPER', 
                2000,
                'JAVA DEVELOPER',      
                2000,
              ]}
              wrapper="span"
              speed={50}              // typing speed
              repeat={Infinity}       // loop forever
              cursor={true}           // show blinking cursor
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className='righthome'>
        <img src={me} alt='' />
      </div>
    </div>
  )
}

export default Home
