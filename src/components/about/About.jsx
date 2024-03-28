import React from "react";
import "./About.css";
import about from "../../Assets/about.png";

function About() {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-title " data-aos="zoom-in-up">
          <p className="about-p1"> Get to Know</p>
          <p className="about-p2"> About Me</p>
        </div>
        <div
          className="about-img"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={about} alt="" />
        </div>
        <div className="about-description" data-aos="zoom-in">
          <p className="about-p3">
            I am a student and I am strong in design and integration with
            intuitive problem￾solving skills.
            <br /> Proficient in Frontend design and development also familiar
            with UI design.
            <br /> passionate about implementing and launching new projects.
            <br /> Ability to translate business requirements into technical
            solution.
            <br /> Looking to start my career as entry-level-frontend-developer
            with a reputed firm driven by technology.
          </p>
        </div>
        <div className="about-btn">
          <a href="#contact" className="abt-btn">
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
