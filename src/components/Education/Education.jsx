import React from 'react'
import './Education.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
import java from '../../assets/java.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(()=>{
    gsap.from(".circle", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:'body',
        scrub:2,
        start:"top 60%",
        end:"bottom 30%"
      }
    })
    gsap.from(".line", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:'body',
        scrub:2,
        start:"top 60%",
        end:"bottom 50%"
      }
    })
    gsap.from(".aboutdetails h1", {
      x:-100,
      duration:0.7,
      opacity:0,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:'body',
        scrub:2,
        start:"top 50%",
        end:"bottom 50%"
      }
    })
    gsap.from(".aboutdetails ul", {
      y:100,
      duration:0.7,
      opacity:0,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:'body',
        scrub:2,
        start:"top 50%",
        end:"bottom 50%"
      }
    })
    gsap.from(".rightabout", {
      x:100,
      duration:0.7,
      opacity:0,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:'body',
        scrub:2,
        start:"top 50%",
        end:"bottom 50%"
      }
    })
   
  })
  return (
    <div id='education'><h1 id='edu' >Education</h1>
      <div className='leftabout'>
        <div className='circle-line'>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
        </div>
        <div className='aboutdetails'>
          <div className='personalinfo'>
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME </span>: ASHVINI TAYDE</li>
              <li><span>AGE </span>: 22 YEARS</li>
              <li><span>GENDER </span>: FEMALE</li>
              <li><span>LANGUAGE </span>: English,Hindi,Marathi</li>


            </ul>
          </div>
          <div className='educaton'>
            <h1>EDUCATION</h1>
            <ul>
              <li><span>DEGREE  </span>:  BSC</li>
              <li><span>BRANCH </span>: COMPUTER SCIENCE</li>
              <li><span>CGPA </span>: 8.18</li>
            </ul>
          </div>
          <div className='skills'>
            <h1>SKILLS</h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>JAVA</li>
              <li>DSA</li>
              <li>MYSQL,SQL</li>
              <li>Git & Github</li>
            </ul>
          </div>
        </div>

      </div>
      {/* <div className='rightabout'>
        <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
        <Card title="JAVA DEVELOPER" image={java}/>
        <Card title="DATA STRUCTURES & ALGORITHMS" image={dsa}/>

      </div> */}

    </div>
  )
}

export default Education;