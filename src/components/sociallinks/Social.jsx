import React from 'react';
import "./Social.css";
import{FaLinkedinIn} from 'react-icons/fa'
import{BsGithub} from 'react-icons/bs'
import{BsStackOverflow} from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa";
import{BsInstagram} from 'react-icons/bs'
import resume from "../../Assets/resume.pdf"

function Social() {
  return (
    <>
    <div className="social-container">
        

        <div className="social-cv">
        <a href={resume} download className="cv-btn" data-aos="fade-up-right"  data-aos-delay="100"    data-aos-duration="1200"> Download CV</a>
        <a href="#contact" className=" talk-btn" data-aos="fade-up-left"  data-aos-delay="100"    data-aos-duration="1200">Let's Talk</a>
        </div>
              
        <div className="social-links" data-aos="zoom-in">
        <a href="https://www.linkedin.com/in/rishabh-pratap-445b761a2" target="_blank"><FaLinkedinIn/></a>
    <a href="https://github.com/R-Coder0" target="_blank"><BsGithub/></a>
    <a href="https://www.facebook.com/R.Coder.05" target="_blank"><FaFacebookF /></a>
    <a href="https://stackoverflow.com/users/21003375/rishabh-pratap" target="_blank"><BsStackOverflow/></a>
    <a href="https://www.instagram.com/rishabh_pratap005/" target="_blank"><BsInstagram/></a>
        </div>
    </div>
      
    </>
  )
}

export default Social
