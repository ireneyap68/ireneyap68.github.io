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
        const {setClass} = value;
        return(  
          <div className={setClass?'dark-mode-black':'App'}>
            <Navbar />

            <Route exact path="/" component={Header} />
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Skills} />
            <Route exact path="/" component={Project} />
            <Route exact path="/" component={Weather} />
          
          </div>

        )
      }}
    </ProductConsumer>
  );
}

export default App;
