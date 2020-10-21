import React from 'react';
import './App.css';
import {Element} from 'react-scroll';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
    <Router>
    <div className="App">


      <Navbar />

      <Route exact path="/" component={Header} />





      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/project">Project</Link>
        <Link to="/weather">Weather</Link>
      </nav>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/blog" render={() => <Blog posts={posts}/>} />
      <Route path="/project" component={Project} />
      <Route path="/weather" component={Weather} />
    </div>
    </Router>
  );
}

export default App;
