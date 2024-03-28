import React from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import { RiContactsBook2Line } from "react-icons/ri";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <>
    
      <nav>
        <div className="nav-title" id="nav-title" data-aos="zoom-in">
          <a href="#">RCODER00</a>
        </div>
        <div className={isActive ? 'show-nav' : 'nav-item'} id="nav-item">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiFillHome onClick={handleClick} /> </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <BiUser onClick={handleClick} />
          </a>
          <a
            href="#skills"
            onClick={handleClick}
            className={activeNav === "#skills" ? "active" : ""}
          >
            <BiCodeAlt />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <BiBookAlt onClick={handleClick} />
          </a>
          <a
            href="#certificate"
            onClick={() => setActiveNav("#certificate")}
            className={activeNav === "#certificate" ? "active" : ""}
          >
            <TbCertificate onClick={handleClick}/>
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            <AiFillProject onClick={handleClick} />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <RiContactsBook2Line onClick={handleClick}/>
          </a>
        </div>
        <GiHamburgerMenu className="nav__icon2" onClick={handleClick} />
      </nav>
    </>
  );
}

export default Navbar;
