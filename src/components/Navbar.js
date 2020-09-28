import React, { useState, Fragment} from 'react';
import { setAuth } from '../utils/auth';
import { Link, withRouter} from 'react-router-dom';

function Navbar({history, location}) {

    const [isReportsCollapsed, setIsReportsCollapsed] = useState(false);
    const [isSettingsCollapsed, setIsSettingsCollapsed] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isActive,setIsActive]= useState({'dashboard':true, 'products':false, 'accounts':false});
    const isLogInPage = location.pathname==='/login' ? true : false;
    
    const handleActive = page => {
      const activePages={...isActive};
      for(const page in isActive) {
        activePages[page]=false;
      }
      activePages[page] = true;
      setIsActive(activePages);
    };

    const handleLogout = () => {
      setAuth(false);
      history.push('/login');
      localStorage.clear('projectData');
    }
    return (
        <nav className="navbar navbar-expand-xl">
        <div className="container h-100">
          <Link to="/" className="navbar-brand">
            <h1 className="tm-site-title mb-0">Product Admin</h1>
          </Link>
          {!isLogInPage &&
          <Fragment>
          <button
            className="navbar-toggler ml-auto mr-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          >
            <i className={!isNavCollapsed ? "fas fa-times tm-nav-icon" : "fas fa-bars tm-nav-icon"}></i>
          </button>
          {!isNavCollapsed &&
                <div className="dropdown-menu" style={{display:'block', width:'30vh', height:'100vh', position:'fixed', top:'0px'}}>
                  <Link to="/" className="dropdown-item"
                    style={isActive['dashboard'] ? { backgroundColor: '#f5a623', color: '#fff'} : {}}
                    onClick={() => handleActive('dashboard')} 
                  >Dashboard
                  </Link>
                  <Link to="/products" className="dropdown-item"
                    style={isActive['products'] ? { backgroundColor: '#f5a623', color: '#fff'} : {}}
                    onClick={() => handleActive('products')}
                  >Products</Link>
                  <Link to="/accounts" className="dropdown-item" 
                    style={isActive['accounts'] ? { backgroundColor: '#f5a623', color: '#fff'} : {}}
                    onClick={() => handleActive('accounts')} 
                  >Accounts</Link>
                  <span className="nav-link d-block logout-btn" to="/login" onClick={handleLogout}>
                  Admin, <b>Logout</b>
                </span>
                </div>
          }
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
                <Link to="/" 
                  className="nav-link"
                  style={isActive['dashboard'] ? { backgroundColor: '#f5a623', color: '#fff'} : {}}
                  onClick={() => handleActive('dashboard')}
                >
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setIsReportsCollapsed(!isReportsCollapsed)}
                >
                  <i className="far fa-file-alt"></i>
                  <span> Reports <i className="fas fa-angle-down"></i> </span>
                </a>
                {isReportsCollapsed &&
                <div className="dropdown-menu" style={{display:'block'}}>
                  <a className="dropdown-item" href="#">Daily Report</a>
                  <a className="dropdown-item" href="#">Weekly Report</a>
                  <a className="dropdown-item" href="#">Yearly Report</a>
                </div>
                }
              </li>
              <li className="nav-item">
                <Link to="/products" 
                  className="nav-link"
                  style={isActive['products'] ? { backgroundColor: '#f5a623', color: '#fff'} : {}}
                  onClick={() => handleActive('products')}
                >
                  <i className="fas fa-shopping-cart"></i> Products
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/accounts" 
                  className="nav-link"
                  style={isActive['accounts'] ? { backgroundColor: '#f5a623', color: '#fff'} : {}}
                  onClick={() => handleActive('accounts')}
                >
                  <i className="far fa-user"></i> Accounts
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setIsSettingsCollapsed(!isSettingsCollapsed)}
                >
                  <i className="fas fa-cog"></i>
                  <span> Settings <i className="fas fa-angle-down"></i> </span>
                </a>
                {isSettingsCollapsed &&
                <div className="dropdown-menu" style={{display:'block'}}>
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">Billing</a>
                  <a className="dropdown-item" href="#">Customize</a>
                </div>
                }
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item logout-btn">
                <span className="nav-link d-block" to="/login" onClick={handleLogout}>
                  Admin, <b>Logout</b>
                </span>
              </li>
            </ul>
          </div>
          </Fragment>}
        </div>
        
      </nav>
    );
}

export default withRouter(Navbar);