import React, { Component } from 'react';
import Title from './Title';
import AboutLogo from '../images/aboutLogo.JPG';
import {ProductConsumer} from '../context/Context';
 
export default function About() {
    return (
    <ProductConsumer>
       {value=>{
          const {setClass}=value;
         return(
          <section className="about">
          <div className="container">
           <Title title="About" color={setClass?'#fefefe':'grey'}  />
           <div className="about-center">
               <div className="about-logo">
                  <img src={AboutLogo} alt="aboutlogo"/>
               </div>
               <div className={setClass ?"about-texts dark-mode-white":"about-texts"}>

               <div className={setClass ?"dark-mode-orange":"profile"}>
                   <h1>My profile</h1>
                   
                </div>
                   
                  <div className="name">
                  
                    <p><span className={setClass ?"dark-mode-orange":""}></span> First Name: Ai Lieng | Last Name: Yap</p>

                 </div>
                
                 <div className="adress">
                   <p><span className={setClass ?"dark-mode-orange":""}>Address:</span> Antioch, California 94509</p> 
                 </div>
                 <div className="email">
                   <p><span className={setClass ?"dark-mode-orange":""}>Email:</span> <a href="mailto:ireneyap68@gmail.com" 
                   className={setClass?"dark-mode-mail":""}
                   >ireneyap68@gmail.com</a></p> 
                 </div> 
                 
                 <div className="website">
                   <p><span className={setClass ?"dark-mode-orange":""}>Website:</span> www.ireneyap68.com(under construction)</p> 
                 </div>
                 <div className={setClass ?"about-media dark-mode-orangeBack":"about-media"}>
                 <a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square"></i>
                 </a>

                <a href="https://www.linkedin.com/in/odysseas-kolas-275582113/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>
                </a>

                 <a href="https://www.facebook.com/odyseas.kolas" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i>
                 </a>

                 <a href="https://www.twitter.com/odyssea11677554" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>
                 </a>
                     </div> 

             </div>
           
           </div>

           <div className={setClass ?"dark-mode-lightWhite generally":"generally"}>
               <span className={setClass?"dark-mode-orange":""}>Generally,</span><p>I graduated from Segi College, Malaysia in major Business Administration.I worked in my field from business development till finance management since many years. The software development came to my life when I wanted to create something for myself...and that was...it became my hobby and then I started my software engineering bootcamp to dive in the skills that I like so much. Below you will see my overall skills that i have in all fields in my life. </p>
               <div className="certificates">
                  <h4>My certificates:</h4>
                  <p>* Degree as <b>Business Administration</b>  from Malaysia.</p>
                  <p>* Many certificates <b> from the oil and gas field.</b></p>
                  <p>* Certificates in responsive websites,<b> html, css, javascript,   jquery, react.js, Bootstrap</b> from <b style={{color:'green'}}>General Assembly</b></p>
                 
               </div>
              
             </div>
          </div>
        </section>
         )
       }}
    </ProductConsumer>
    )
}