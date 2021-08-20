import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Loading from './components/Loading/';
import { useAuth0 } from "@auth0/auth0-react";



function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

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