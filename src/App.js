import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage'
import About from './About'
import Blog from './Blog'
import Project from './Project'

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/project">Project</Link>
      </nav>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/project" component={Project} />
    </div>
    </Router>
  );
}

export default App;
