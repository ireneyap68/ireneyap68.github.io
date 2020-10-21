import React from 'react';
import headerImg from '../images/logo.jpg' ;
import Bounce from 'react-reveal/Bounce';
import {ProductConsumer} from '../context/Context';

export default function Header() {
    return (
       <ProductConsumer>
           {value=>{
               const {setClass, darkMode}=value;
               return(
                <section className="header">
                <img src={headerImg} alt="img"/>
                <div className="inside-container">
                    <div className="texts">
                       <Bounce right delay={500} duration={2000} cascade>
                        <h1>Hello, I am Irene Yap</h1>
                       </Bounce>
                       <Bounce left cascade delay={2000} duration={2000} >
                       <h1>Full-Stack Software Engineer </h1>
                      </Bounce>
                       <Bounce bottom delay={4000} duration={3000} >
                       <a href="mailto:ireneyap68@gmail.com" className="contactBtn">Contact</a>
                       </Bounce>
                    </div>
                   
                 
       
       
                </div>
                 {/* dark mode button */}
                 <div className="btnMode">
                   <div className={setClass?'btnIcons newBtnIcons':'  btnIcons'} onClick={darkMode} >
                       <i className="fas fa-moon"></i>
                       <div className={setClass?'newBall ball':'  ball'}></div>
                       <i className="fas fa-sun"></i>
                       
                   </div>
                </div>
                  {/*end of dark mode button */}
               </section>
               )
           }}
       </ProductConsumer>
    )
}
