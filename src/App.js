import React from 'react';
import { Router } from '@reach/router';
import Header from './components/elements/Header';
import Home from './Home';

const App = (className) => (
  <>
    <Header />
    <Router>
      <Home path="/" />
    </Router>
  </>
);

export default App;
