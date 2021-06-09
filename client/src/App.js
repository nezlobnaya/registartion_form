import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">     
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

export default App;