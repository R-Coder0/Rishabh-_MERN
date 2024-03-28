import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import contact from "../../Assets/contact.png"
import { useState } from 'react'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {

  const [inputData, SetInputData] = useState({
    username: "",
    email: "",
    message: "",
});
 // const [Array, SetArray] = useState([]);
  
  const  changeHandle=(e)=>{
    const {name, value} =e.target;
    SetInputData({ ...inputData, [name]:value });
  }

  //const { username,email,message } = inputData;

  const changeHandle2 = (e)=>{
    e.preventDefault();
   // SetArray([...Array, { username,email,message }]);

   const InputData ={
      name:inputData.username,
      email:inputData.email,
      message:inputData.message
    
    };
   
    console.log(InputData)
    alert(" Message submitted")
    sendEmail();
  }

  const form = useRef();

  const sendEmail = () => {
   // e.preventDefault();
   emailjs.sendForm('service_goonqvw', 'template_adnhlow', form.current, 'zUs7t2tu4WSeBjiO8')
     
 };
 

  return (
   <>
   <div className="contact-container" id='contact'>
    <div className="contact-title" data-aos="zoom-in-up">

    <p className='contact-p1'>Get In Touch</p>
    <p className='contact-p2'>Contact Me</p>
    </div>
    <div className="contact-logo" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
      <img src={contact} alt="" />
    </div>
    <div className="container contact__container" data-aos="zoom-in-up">
        <div className="contact__options">
            <article className="contact__option">
            <MdOutlineMail  className='contact__icon'/>
            <h4>Email</h4>
            <h5>rcoder00@gmail.com</h5>
            <a href="mailto:rcoder00@gmail.com" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option">
            <RiMessengerLine  className='contact__icon'/>
            <h4>Messanger</h4>
            <h5>Rishabh Pratap</h5>
            <a href="https://www.messenger.com/t/100027182889191/" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option">
            <BsWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-7542-003-073</h5>
            <a href="https://api.whatsapp.com/send?phone=+917542003073" target="_blank">Send a Message</a>
            </article>
        </div>

        <form className="contact-form" action='Post' ref ={form} onSubmit={changeHandle2}>
          <input type="text" name='username' onChange={changeHandle} placeholder='Your Full Name'  value={inputData.username} required />
          <input type="email" name='email' placeholder='Enter Your Email'  value={inputData.email} onChange={changeHandle} required />
          <textarea name="message" placeholder='Your Messege' rows="7"  value={inputData.message} onChange={changeHandle}></textarea> 
          <button type='submit' className='contact-btn' >Send Message</button>
        </form>
    </div>
    </div>
    
    </>
  )
}

export default Contact
