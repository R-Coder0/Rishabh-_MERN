import React from 'react'
import "./Skills.css";
import html from "../../Assets/html.png"
import node from "../../Assets/node.png"
import css from "../../Assets/css.png"
import js from "../../Assets/js.png"
import xd from "../../Assets/xd.png"
import react from "../../Assets/react.png"
import express from "../../Assets/express.png"
import mongodb from "../../Assets/mongodb.png"
import figma from "../../Assets/figma.png"
import git from "../../Assets/git.png"
import github from "../../Assets/github.png"
import skills from "../../Assets/skills.png"

function Skills() {
  return (
    <>
    <div className="skill-container" id='skills'>
        
    <div className="skill-title " data-aos="zoom-in-up">
          <p className="skill-p1"> What Skill I Have</p>
          <p className="skill-p2"> My Skills</p>
        </div>
        <div className="skills-logo"  data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <img src={skills} alt="" />
        </div>
        <div className="skills-img">
            <div className="skill-html" data-aos="zoom-in">
                <img src={html} alt="" className='img-html'/>
                <p className='p-skill'>Advance</p>
            </div>

            <div className="skill-css" data-aos="zoom-in">
                <img src={css} alt="" className='img-css'/>
                <p className='p-skill'>Advance</p>
            </div>

            <div className="skill-js" data-aos="zoom-in">
                <img src={js} alt="" className='img-js'/>
                <p className='p-skill'>Intermediate</p>
            </div>

            <div className="skill-react" data-aos="zoom-in">
                <img src={react} alt="" className='img-react'/>
                <p className='p-skill'>Intermediate</p>

            </div>

            <div className="skill-node" data-aos="zoom-in">
                <img src={node} alt="" className='img-node'/>
                <p className='p-skill'>Beginner</p>


            </div>

            <div className="skill-express" data-aos="zoom-in">
                <img src={express} alt="" className='img-express'/>
                <p className='p-skill'>Beginner</p>

            </div>

            <div className="skill-mongodb" data-aos="zoom-in">
                <img src={mongodb} alt="" className='img-mongodb'/>
                <p className='p-skill'>Intermediate</p>

            </div>

            <div className="skill-git" data-aos="zoom-in">
                <img src={git} alt="" className='img-git'/>
                <p className='p-skill'>Advance</p>

            </div>

            <div className="skill-github" data-aos="zoom-in">
                <img src={github} alt="" className='img-github' />
                <p className='p-skill'>Advance</p>

            </div>

            <div className="skill-figma" data-aos="zoom-in">
                <img src={figma} alt="" className='img-figma'/>
                <p className='p-skill'>Advance</p>

            </div>

            <div className="skill-xd" data-aos="zoom-in">
                <img src={xd} alt="" className='img-xd'/>
                <p className='p-skill'>Intermediate</p>

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Skills
