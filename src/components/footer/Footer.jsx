import React from 'react'
import './Footer.css'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer data-aos="zoom-in-up">
        <a href="#" className="footer__logo">Rcoder00</a>

        <ul className="links" data-aos="zoom-in-up">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certificate">Certificate</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__social" data-aos="zoom-in-up">
            <a href="https://www.linkedin.com/in/kunal-chauhan-354a32213/" target='_blank' ><BsLinkedin/></a>
            <a href="https://www.instagram.com/rishabh_pratap005/" target='_blank'><FaInstagram/></a>
            <a href="https://twitter.com/Coderishu005" target='_blank'><FaTwitter/></a>
        </div>
        <div className="footer__copy">
            <small>&copy; Rcoder00. All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
