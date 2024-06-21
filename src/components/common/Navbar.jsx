import React from 'react';
import { Link } from 'react-router-dom';


import '../../assets/css/bootstrap.min.css'
import '../../assets/css/all.min.css'
import '../../assets/css/swiper-bundle.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/animate.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/style.css'

import logo from '../../assets/images/encoraa-logo-d.png'

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-menu">
              <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div className="header-bar d-xl-none">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className="main-menu">
              <li className="header-menu-bg active">
                <Link to="/">Home</Link>
              </li>
              <li className="header-menu-bg">
                <Link to="#">Services<i className="fas fa-chevron-down"></i></Link>
                <ul className="sub-menu">
                  <li><Link to="/Home">Eco-Sustenance</Link></li>
                  <li><Link to="/consulting">Consulting</Link></li>
                  <li><Link to="/training">Training</Link></li>
                </ul>
              </li>
              <li className="header-menu-bg">
                <Link to="/technology">Technology</Link>
              </li>
              <li className="header-menu-bg">
                <Link to="#">Media<i className="fas fa-chevron-down"></i></Link>
              </li>
              <li className="header-menu-bg">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
