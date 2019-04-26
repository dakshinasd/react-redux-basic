import React from 'react';
import Posts from './components/Posts';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Post from './components/Post';
import Contact from './components/Contact';

function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="App container">
        <Switch>
          <Route path="/" exact component = {Posts} />
          <Route path="/contact" component = {Contact} />
          <Route path="/:post_id" component = {Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
