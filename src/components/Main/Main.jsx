import React from 'react';
import "./Main.css";

import gif from "../../Assets/main-gif.gif"

function Main() {
  return (
    <>
      
      <div className="main-container">
        <div className="main-gif" data-aos="fade-down-right"  data-aos-delay="100" data-aos-duration="1200">
          <img src={gif} alt="" />
        </div>


        <div className="main-data"   data-aos="fade-down-left"  data-aos-delay="100"    data-aos-duration="1200">
          <p className='p-1'>
            HI, I AM
          </p>

          <p className='p-2'>
            Rishabh Pratap
          </p>

          <p className='p-3'>
            Web Developer ,<br/> UI/UX Designer, <br/> Content Creator <br/>  & Content Writer
          </p>

        </div>
      </div>
    </>
  )
}

export default Main
