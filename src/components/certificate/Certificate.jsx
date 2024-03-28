import React from "react";
import "./Certificate.css";
import C1 from "../../Assets/certificate1.png";
import C3 from "../../Assets/certificate3.png";
import C4 from "../../Assets/certificate4.png";
import C6 from "../../Assets/certificate6.png";
import C7 from "../../Assets/certificate7.png";
import logo from "../../Assets/logo123.png";


import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, } from 'swiper';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Certificate() {
  return (
    <>
  <div className="certificate-container" id="certificate">
    <div className="experience-title" data-aos="zoom-in-up">
          <p className="experience-p1"> What Certification I Have</p>
          <p className="experience-p2"> My Certificate</p>
        </div>
        <div className="experience-logo" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
           <img src={logo} alt="" />
        </div>
     
    </div>

      <div className="certification" data-aos="zoom-in-up">
      <Swiper className="container achivement__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >


        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C1} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C3} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C4} alt="" />
          </div>
        
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C6} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="achivement">
          <div className="certificate__img">
            <img src={C7} alt="" />
          </div>
        
        </SwiperSlide>
      </Swiper>
    </div>


    
    </>
  );
}

export default Certificate;
