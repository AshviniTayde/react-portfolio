// import React from 'react'
// import Card from '../Card/Card'
// import './Projects.css'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// gsap.registerPlugin(ScrollTrigger);


// const Projects = () => {
// useGSAP(()=>{
//   gsap.from("#h11", {
//       y:100,
//       duration:0.7,
//       opacity:0,
//       scrollTrigger:{
//         trigger:"#h11",
//         scroll:'body',
//         scrub:2,
//         start:"top 80%",
//         end:"top 30%",
//       }
//     })
//      gsap.from(".slider", {
//       y:100,
//       duration:0.7,
//       opacity:0,
//       scrollTrigger:{
//         trigger:".slider",
//         scroll:'body',
//         scrub:2,
//         start:"top 80%",
//         end:"top 30%",
//       }
//     })
// })
  
//   return (
//     <div id='projects'>
//     <h1 id='h11'>Projects</h1>
//     <div className='slider'>
//         <Card title='E-commerce Website'/>
//         <Card title='Portfolio Website'/>
//         <Card title='Age-Calculator'/>
//         <Card title='Puzzle-Game'/>
//         <Card title='Static-Furniture-website'/>


//     </div>

//     </div>
//   )
// }

// export default Projects





import React, { useState } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import proj1a from "../../assets/forever1.png";
import proj1b from "../../assets/forever2.png";
import proj1c from "../../assets/forever3.png";
import proj1d from "../../assets/forever4.png";


import proj2a from "../../assets/puzzle1.png";
import proj2b from "../../assets/puzzle2.png";
import proj2c from "../../assets/puzzle3.png";


import proj3a from "../../assets/age_cal1.png";
import proj3b from "../../assets/age_cal3.png";
import proj3c from "../../assets/age_cal2.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Forever E-commerce Website",
      description:
        "A responsive MERN-based online shopping platform with product browsing, cart, checkout, and admin product management.",
      images: [proj1a, proj1b, proj1c, proj1d],
      live: "https://forever-fronted.vercel.app/",
      details: "https://github.com/AshviniTayde/forever-full-stack",
    },
    {
      id: 2,
      title: "Puzzle Game: Picture Puzzle",
      description:"An interactive picture puzzle game built with JavaScript. Players drag and swap tiles to solve the shuffled image, with logic to detect a correct win state. Fully responsive and engaging UI for desktop and mobile.  ",
      images: [proj2a, proj2b,proj2c],
      live: "https://picture-puzzle-game-red.vercel.app/",
      details: "https://github.com/AshviniTayde/Picture-Puzzle-Game",
    },
    {
      id: 3,
      title: "Age Calculator",
      description:
        "A sleek JavaScript-based age calculator app. Users can input their date of birth to instantly calculate their exact age in years, months, and days, with responsive design for mobile and desktop.",
      images: [proj3a, proj3b, proj3c],
      live: "https://js-age-calculator.vercel.app/",
      details: "https://github.com/AshviniTayde/JS-Age-Calculator",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div
            className="project-card"
            key={proj.id}
            onMouseEnter={() => setHoveredId(proj.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {hoveredId === proj.id ? (
              <Swiper
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 300,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="project-swiper"
              >
                {proj.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`${proj.title}-${i}`} className="project-img" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img src={proj.images[0]} alt={proj.title} className="project-img" />
            )}

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-buttons">
                <a href={proj.live} target="_blank" rel="noreferrer" className="btn">
                  Live Demo
                </a>
                <a href={proj.details} target="_blank" rel="noreferrer" className="btn secondary">
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

