import React from "react";
import "./Skills.css";
import jsLogo from "../../assets/js.png";
import tsLogo from "../../assets/ts.png";
import reactLogo from "../../assets/react.png";
import nextLogo from "../../assets/next.webp";
import reduxLogo from "../../assets/redux.png";
import tailwindLogo from "../../assets/tailwind.png";
import gsapLogo from "../../assets/redux.png";
import bootstrapLogo from "../../assets/bootstrap.svg";
import nodeLogo from "../../assets/node.png";
import express from "../../assets/express.png";

import nestLogo from "../../assets/nest.svg";
import mysql from '../../assets/mysql.svg';
import postgress from '../../assets/postgreSQL.webp';
import mongo from '../../assets/mongodb.svg';
import git from '../../assets/git.png';
import postman from '../../assets/postman.png';

import github from '../../assets/github.jpeg';
import java from '../../assets/java.jpg';
import python from '../../assets/python.png';

import c from '../../assets/c.jpeg';

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    // floating animation for all skill icons
     gsap.to(".skill-item img", {
    x: 20,                
    duration: 2,          
    repeat: -1,           
    yoyo: true,           
    ease: "power1.inOut"  // smooth float effect
  });

    // scroll animation for whole skills container
    gsap.from(".skills-container", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".skills-container",
        scroll: 'body',
        scrub: 2,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none none"
      }
    })
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title"><span className="full">*</span> MY STACK</h1>


      <div className="skills-container">
        {/* Frontend */}
        <div className="skills-column">
          <h3 className="skills-subtitle">FRONTEND</h3>
          <div className="skills-grid">
            <div className="skill-item"><img src={jsLogo} alt="JS" /><p>JavaScript</p></div>
            <div className="skill-item"><img src={tsLogo} alt="TS" /><p>TypeScript</p></div>
            <div className="skill-item"><img src={reactLogo} alt="React" /><p>React</p></div>
            <div className="skill-item"><img src={nextLogo} alt="NextJS" /><p>Next.js</p></div>
            <div className="skill-item"><img src={reduxLogo} alt="Redux" /><p>Redux</p></div>
            <div className="skill-item"><img src={tailwindLogo} alt="Tailwind" /><p>Tailwind CSS</p></div>
            <div className="skill-item"><img src={gsapLogo} alt="GSAP" /><p>GSAP</p></div>
            <div className="skill-item"><img src={bootstrapLogo} alt="Bootstrap" /><p>Bootstrap</p></div>
          </div>
        </div>
        <div className='linee'></div>

        {/* Backend */}
        <div className="skills-column">
          <h3 className="skills-subtitle">BACKEND</h3>
          <div className="skills-grid">
            <div className="skill-item"><img src={nodeLogo} alt="Node" /><p>Node.js</p></div>
            <div className="skill-item"><img src={nestLogo} alt="NestJS" /><p>NestJS</p></div>
            <div className="skill-item"><img src={express} alt="Express" /><p>Express</p></div>
          </div>

          {/* Databases */}
          <div className="skills-column">
            <h3 className="skills-subtitle" style={{ marginTop: "50px" }}>DATABASE</h3>
            <div className="skills-grid">
              <div className="skill-item"><img src={mysql} alt="MySQL" /><p>MySQL</p></div>
              <div className="skill-item"><img src={postgress} alt="PostgreSQL" /><p>PostgreSQL</p></div>
              <div className="skill-item"><img src={mongo} alt="MongoDB" /><p>MongoDB</p></div>
            </div>
          </div>
        </div>
        <div className='linee'></div>

        {/* Tools */}
        <div className="skills-column">
          <h3 className="skills-subtitle">TOOLS</h3>
          <div className="skills-grid">
            <div className="skill-item"><img src={git} alt="Git" /><p>Git</p></div>
            <div className="skill-item"><img src={github} alt="GitHub" /><p>GitHub</p></div>
            <div className="skill-item"><img src={postman} alt="Postman" /><p>Postman</p></div>
          </div>

          {/* Languages */}
          <div className="skills-column">
            <h3 className="skills-subtitle" style={{ marginTop: "50px" }}>LANGUAGES</h3>
            <div className="skills-grid">
              <div className="skill-item"><img src={java} alt="Java" /><p>Java</p></div>
              <div className="skill-item"><img src={c} alt="C" /><p>C</p></div>
              <div className="skill-item"><img src={python} alt="python" /><p>Python</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
