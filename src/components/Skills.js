import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../context/Context';

export default function Skills() {
    return (
      <ProductConsumer>
          {value=>{
              const {setClass} =value;
              return(
                <div className="skills">
                <div className="container">
                    <Title title=" Skills" color={setClass?"white":"grey"} />
             <div className="skills-center">
               <div className="skills-web">
                   <h4 className={setClass?"dark-mode-orange":""}>Software Dev skills :</h4>
                   {value.devSkills.map(item=>{
                       return(
                           <li key={item.id}  className={setClass?"dark-mode-lightWhite":""}>
                               <h3>{item.title}</h3><span className={setClass?"newBar bar":"bar"}><span className={item.percent}><p>{item.number}</p></span></span>
                           </li>
                       )
                   })}
                
                 </div>
     
                 <div className="skills-other" >
                     <h4 className={setClass?"dark-mode-orange":""}>Other skills:</h4>

                     {value.otherSkills.map(item=>{
                       return(
                           <li key={item.id} className={setClass?"dark-mode-lightWhite":""}>
                               <h3>{item.title}</h3><span className={setClass?"newBar bar":"bar"}><span className={item.percent}><p>{item.number}</p></span></span>
                           </li>
                       )
                   })}

                 </div>

                 <div className="skills-other" >
                     <h4 className={setClass?"dark-mode-orange":""}>Languages:</h4>

                     {value.languages.map(item=>{
                       return(
                           <li key={item.id} className={setClass?"dark-mode-lightWhite":""}>
                               <h3>{item.title}</h3><span className={setClass?"newBar bar":"bar"}><span className={item.percent}><p>{item.number}</p></span></span>
                           </li>
                       )
                   })}

                 </div>
                 
      
             </div>
                </div>
             </div>
              )
          }}
      </ProductConsumer>
    )
}