import { NavLink } from 'react-router-dom';
import AuthNav from "./auth-nav";


function Navigation() {
    return(
      <nav className="navbar sticky-top navbar-expand-lg navbar-light mb-4" style={{backgroundColor: "#e3f2fd"}}>
        <div className='container'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item font-weight-normal"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
            <li className="nav-item font-weight-normal"><NavLink exact className="nav-link" activeClassName="active" to="/records/">Admin report</NavLink></li>
            <li className="nav-item font-weight-normal"><NavLink exact className="nav-link" activeClassName="active" to="/records/new">New Record</NavLink></li>
            <li className="nav-item font-weight-normal"><NavLink exact className="nav-link" activeClassName="active" to="/profile">Profile</NavLink></li>
          </ul>
          <AuthNav />
        </div>
      </nav>
    );
  }

export default Navigation;