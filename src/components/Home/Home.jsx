import React from 'react'
import './Home.css'
import me from '../../assets/home.png'
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 0.7,
      opacity: 0
    })
    tl1.from(".line2", {
      y: 80,
      duration: 0.7,
      opacity: 0
    })
    tl1.from(".line3", {
      y: 80,
      duration: 0.7,
      opacity: 0
    })
    tl1.from(".righthome img", {
      x: 200,
      duration: 0.7,
      opacity: 0
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
                'WEB DEVELOPER',
                2000,
                'SOFTWARE DEVELOPER',
                2000,
                'MERN STACK DEVELOPER',
                2000,
                'JAVA DEVELOPER',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <a href="/Ashvini_CV.pdf"
              className="btn download"
              target="_blank"
              rel="noopener noreferrer"
              download="Ashvini_Tayde_CV.pdf">
              Download CV
            </a>
            <a href="#projects" className="btn projects">
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ashvini-tayde-2a9b85226" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/AshviniTayde" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:ashvinit11@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className='righthome'>
        <img src={me} alt='' />
      </div>
    </div>
  )
}

export default Home
