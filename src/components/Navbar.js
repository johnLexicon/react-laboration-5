import { NavLink } from 'react-router-dom';
import logo from '../assets/lexicon.jpg';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <!-- Container wrapper --> */}
      <div className="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a
            className="navbar-brand mt-2 mt-lg-0"
            href="https://www.lexicon.se/"
          >
            <img src={logo} height="30" alt="" loading="lazy" />
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/new">
                NEW USER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                ABOUT
              </NavLink>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>

        <div className="d-flex align-items-center">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#f"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              className="rounded-circle"
              height="25"
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#f">
                My profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#f">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#f">
                Logout
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
};

export default Navbar;
