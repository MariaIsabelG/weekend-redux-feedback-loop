import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../Home/Home';
import Understanding from '../FeedbackForm/Understanding'
import Feeling from '../FeedbackForm/Feeling';
import Support from '../FeedbackForm/Support';
import Comments from '../FeedbackForm/Comments';
import Review from '../FeedbackForm/Review';


function App() {

  return (
    <Router>
      <div className='App'>

        <Route path='/' exact>
          <Home />
        </Route>

      <Route path='/feeling' exact>
          <Feeling />
        </Route>

        <Route path='/understanding' exact>
          <Understanding />
        </Route>

        <Route path='/support' exact>
          <Support />
        </Route>

        <Route path='/comments' exact>
          <Comments />
        </Route>

        <Route path='/review' exact>
          <Review />
        </Route>
    </div>
    </Router>
  );
}

export default App;
