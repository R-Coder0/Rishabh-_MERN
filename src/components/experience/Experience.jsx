import React from 'react'
import "./Experience.css"
import experience from "../../Assets/experience.png";
import intern4 from "../../Assets/lgm.png";

function Experience() {
  return (
    <>
    <div className="experience-container" id='experience'>
    <div className="experience-title" data-aos="zoom-in-up">
          <p className="experience-p1"> What Experience I Have</p>
          <p className="experience-p2"> My Experience</p>
        </div>
        <div className="experience-logo" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <img src={experience} alt="" />
        </div>

        <div className="experience-details "  >
            <p className='experience-p3'>Web Developer Intern</p>
            <p className='experience-p4'> BharatIntern</p>
            <p className='experience-p5'>sep-23 to oct-23</p>
            <img src={intern4} alt="" data-aos="zoom-in-up" />
        </div>

    </div>
      
    </>
  )
}

export default Experience
