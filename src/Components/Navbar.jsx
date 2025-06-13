// import React, { useState } from 'react'
// import Home from '../Pages/Home'
// import { Link , NavLink} from 'react-router-dom'


// const Navbar = ({ toggleDarkMode }) => {
//   return (
//     <div className='navbar-list d-flex justify-content-between align-items-center px-4 py-2 bg-light shadow-sm'>
//         <ul className=' d-flex list-unstyled gap-4 mb-0'>
//        <li> <NavLink className='text-decoration-none text-dark fw-semibold' to='/'>Home</NavLink></li>
//         <li><NavLink className='text-decoration-none text-dark fw-semibold' to='/about'>About</NavLink></li>
//         <li><NavLink className='text-decoration-none text-dark fw-semibold' to='/contact'>Contact</NavLink></li>
//         <li><NavLink className='text-decoration-none text-dark fw-semibold' to='/cart'>Cart</NavLink></li>
//         </ul>
//         <Link to="/admin" className='btn btn-primary'>Log in</Link>
//         <button className='btn btn-dark' onClick={toggleDarkMode}>Dark Mode</button>
//     </div>
  
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ toggleDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">FoodApp</Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/cart">Cart</NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link to="/admin" className="btn btn-primary">Log in</Link>
            <button className="btn btn-dark" onClick={toggleDarkMode}>Dark Mode</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

