import React from "react";
import "./About.css";
import me from "../../assets/profile.jpg"; // your profile image
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
 useGSAP(()=>{
  
    gsap.from(".about-image img", {
      x:200,
      duration:0.7,
      opacity:0,
      scrollTrigger:{
        trigger:".about-image img",
        scroll:'body',
        scrub:2,
        start:"top 60%",
        end:"bottom 50%"
      }
    })
   
  })
  
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2>
          <span className="star">✦</span> About Me{" "}
          <span className="star">✦</span>
        </h2>
        <p>Transforming ideas into digital experiences</p>
      </div>

      <div className="about-container">
        {/* Left side text */}
        <div className="about-text">
          <h3>
            Hello, I'm <span>Ashvini</span>
          </h3>
          <p>
            I’m a Full Stack Web Developer with expertise in React JS, Next JS,
            Node JS, and Tailwind CSS. Skilled in building responsive,
            user-friendly web apps, integrating REST APIs, and optimizing
            performance. Strong in JavaScript and database management with focus
            on writing clean and maintainable code.
          </p>
          <div className="about-buttons">
            <a href="/Ashvini.pdf" className="btn download">
               Download CV
            </a>
            <a href="#projects" className="btn projects">
              💻 View Projects
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div className="about-image">
          <img src={me} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
