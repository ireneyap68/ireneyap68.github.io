import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../context/Context';


export default function Project() {
    return (
   <ProductConsumer>
       {value=>{
           const {setClass}=value;
           return(
            <div className="projects">
            <div className="container">
              <Title title="projects" color={setClass?'#fefefe':'grey'}  />

              
              <div className="projects-center">
                {value.filterProjects.map(item=>{
                    return(
                        <div className={setClass ?"newBorder single-project":"single-project"} key={item.id}>
                            
                        <a href={item.extlink} target="_blank" rel="noopener noreferrer"><img src={item.img} alt=""/>CLICK AND TRY</a>
                        <p>{item.title} creating by : {item.cat}</p>
                       
                    </div>
                    )
                })}
              </div>
            </div>
        </div>
           )
       }}
   </ProductConsumer>
    )
}