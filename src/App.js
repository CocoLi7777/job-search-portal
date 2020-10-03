import React from 'react';
import { Router } from '@reach/router';
import Header from './components/elements/Header';
import Home from './Home';

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
    </Router>
  </>
);

export default App;
