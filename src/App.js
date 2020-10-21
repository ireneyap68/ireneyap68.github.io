import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './components/Homepage'
import About from './components/About'
import Blog from './components/Blog'
import Project from './components/Project'
import Weather from './components/Weather'

function App() {
  let testPosts = [
    {
      title: 'I love plants',
      body: 'Especially the calatheas, but they don\'t love me back 😭'
    },
    {
      title: 'Computers amirite?',
      body: 'Dumb, just like me'
    },
    {
      title: 'Gratitude is a key to happiness',
      body: 'thanks pete'
    }
  ]
  let [posts, setPosts] = useState(testPosts)

  return (
    <Router>
    <div className="App">
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
