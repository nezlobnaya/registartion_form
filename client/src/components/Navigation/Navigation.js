import { NavLink } from 'react-router-dom';


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

export default Navigation;