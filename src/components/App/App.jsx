import React from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='App'>

    <Route path='/' exact>
      <Home />
    </Route>

    <Route path='/feeling'>
      <Feeling />
    </Route>

    </div>
    </Router>
  );
}

export default App;
