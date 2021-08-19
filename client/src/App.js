import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';



function App() {
  return (
    <div className="App">     
          <Navigation />
          <div className="container">
            <Main />
          </div>
    </div>
  );
}

export default App;