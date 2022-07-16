import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';


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

    <Route path='/understanding'>
      <Understanding />
    </Route>

    </div>
    </Router>
  );
}

export default App;
