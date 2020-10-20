import React from 'react';
import { Router } from '@reach/router';
import Header from './components/elements/Header';
import Home from './Home';
import Jobs from './Jobs';
import Job from './Job';

const App = (className) => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Jobs path="/jobs" />
      <Job path="/job/1" />
    </Router>
  </>
);

export default App;
