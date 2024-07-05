import React from 'react'
import './Projects.css'
import img1 from '../../Assets/portfolio.png'
import img3 from '../../Assets/vpm.png'
import img2 from '../../Assets/DigitalMarketing.png'
import img4 from '../../Assets/weather-app.png'
import img6 from '../../Assets/gym-app.png'
import img5 from '../../Assets/BloggingWebsite.png'
import projects from '../../Assets/projects.png'

function Portfolio() {
  return (
 <div className="project-container" id='projects'>
    <div className="project-title" data-aos="zoom-in-up">
    <p className='project-p1'>My Recent Work</p>
    <p className='project-p2'>Projects</p>
    </div>
    <div className="project-logo" data-aos="zoom-in-up">
        <img src={projects} alt="" />
    </div>
    <div className="container portfolio__container">
        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img1} alt="" />
            </div>
            <h3>Responsive Portfolio Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/personal-portfolio"  target="_blank"   rel="noreferrer" className="github-btn">Github</a>
            <a href="https://r-coder0.github.io/personal-portfolio/" className="livedemo-btn" target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img3} alt="" />
            </div>
            <h3>Responsive Resturant Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/client_project"  target="_blank"   rel="noreferrer"  className="github-btn">Github</a>
            <a href="https://varshapackersmovers.in/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img2} alt="" />
            </div>
            <h3>Responsive Digital-Marketing Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/Digital-Marketing"  target="_blank"   rel="noreferrer" className="github-btn">Github</a>
            <a href="https://r-coder0.github.io/Digital-Marketing/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>


        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img4} alt="" />
            </div>
            <h3>Weather App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/Weather-app" className="github-btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://r-coder0.github.io/Weather-app/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img6} alt="" />
            </div>
            <h3>Gym website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/Gym-app" className="github-btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://r-coder0.github.io/Gym-app/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img5} alt="" />
            </div>
            <h3>Blogging Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/R-Coder0/R-Coder-Bootstrap" className="github-btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://r-coder0.github.io/R-Coder-Bootstrap/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>
    </div>
    </div>
  )
}

export default Portfolio
