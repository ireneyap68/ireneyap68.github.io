import React from 'react';
import './App.css';
import {Element} from 'react-scroll';
import {Route} from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import Header from './components/Header';
import {ProductConsumer} from './context/Context';



function App() {
  return (
  <ProductConsumer>
    {value=>{
      const {setClass}=value;
      return(
        <div className={setClass?'dark-mode-black':'App'}>
   
        <Navbar />
 
 
  <Element name="Home">
    <Route exact path="/" component={Header} />
  </Element>
  <div className="basic">
  <Element name="About">
    <Route exact path="/" component={About} />
  </Element>

  <Element  name="Skills">
    <Route exact path="/" component={Skills} />
  </Element>

  <Element name="Project">
    <Route exact path="/" component={Project} />
  </Element>

  <Element name="Weather">
    <Route exact path="/" component={Weather} />
  </Element>
    

  </div>

       
    </div>
      )
    }}
  </ProductConsumer>
  );
}

export default App;