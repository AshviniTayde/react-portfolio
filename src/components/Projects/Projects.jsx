import React from 'react'
import Card from '../Card/Card'
import './Projects.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
useGSAP(()=>{
  gsap.from("#h11", {
      y:100,
      duration:0.7,
      opacity:0,
      scrollTrigger:{
        trigger:"#h11",
        scroll:'body',
        scrub:2,
        start:"top 80%",
        end:"top 30%",
      }
    })
     gsap.from(".slider", {
      y:100,
      duration:0.7,
      opacity:0,
      scrollTrigger:{
        trigger:".slider",
        scroll:'body',
        scrub:2,
        start:"top 80%",
        end:"top 30%",
      }
    })
})
  
  return (
    <div id='projects'>
    <h1 id='h11'>Projects</h1>
    <div className='slider'>
        <Card title='E-commerce Website'/>
        <Card title='Portfolio Website'/>
        <Card title='Age-Calculator'/>
        <Card title='Puzzle-Game'/>
        <Card title='Static-Furniture-website'/>


    </div>

    </div>
  )
}

export default Projects