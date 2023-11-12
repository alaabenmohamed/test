import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
            <img src="logo.png" alt="logo" />
          </span>
          <div className="text header-text">
            <span className="name">CodingLab</span>
            <span className="profession">Web developer</span>
          </div>
        </div>
        <i className="bx bx-chevron-right toggle"></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className='bx bx-search icon' ></i>
            <input type="text" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="#">
                <i className='bx bx-home-alt icon' ></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            {/* Repeat for other menu items */}
          </ul>
        </div>
        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className='bx bx-log-in icon' ></i>
              <span className="text nav-text">Login/Sign Up</span>
            </a>
          </li>
          <li className="mode">
            <div className="moon-sun">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark Mode</span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
