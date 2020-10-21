import React from 'react';
import './App.css';
import {Element} from 'react-scroll';

import {Route} from 'react-router-dom';

import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Title from './components/Title';


function App() {
  
  return (
    <div className="App">


      <Navbar />

      <Route exact path="/" component={Header} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/" component={Skills} />
      <Route exact path="/" component={Project} />
      <Route exact path="/" component={Weather} />
      


      
    </div>
  );
}

export default App;
