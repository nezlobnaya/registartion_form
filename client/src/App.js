import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import RecordsList from './components/RecordsList/RecordsList';
import RecordSuccess from './components/Success/RecordSuccess';
import RecordAdd from './components/Form/Form';


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

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/records/">Admin report</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/records/new">New Record</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/records" component={RecordsList} />
      <Route exact path="/records/new" component={RecordAdd} />
      <Route exact path="/success" component={RecordSuccess} />

    </Switch>
  );
}

export default App;