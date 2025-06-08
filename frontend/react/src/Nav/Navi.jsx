import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/love1.png";
import { FaBars } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import "./Nav.css";

const Navi = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowSideBar(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = () => setShowSideBar(false);

  return (
    <>
      <nav className='navbar sticky-nav'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='title'>
      
          {<Link className='a' to='/Home'>FREZIVA</Link> }
              { <h4>🦐
🦐
🦐
FROM SEA TO SCREEN 
TRACE EVERY CATCH 🦀🦀🦀

</h4> }
          
        </div>

        {/* Desktop Nav */}
        <div className='mobile-view'>
          <ul className='nav-link'>
                <li><NavLink to="/Home">Home</NavLink></li>
              <li><NavLink to="/Product">Products</NavLink></li>
                 <li><NavLink to="/Track">Track</NavLink></li>

            <li className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* <p>About <GoChevronDown /></p> */}
              <div className="dropdown-content">
          
             
              </div>
            </li>
            {/* {/* <li><NavLink to="/Project">Project</NavLink></li> */}
      
          </ul>
        </div>

        {/* Sidebar for Mobile */}
        <div className={`mobile-views ${showSideBar ? 'active' : ''}`} ref={menuRef}>
          <ul className='nav-link'>
            {/* <li><NavLink to='/' onClick={handleNavClick}>Home</NavLink></li> */}
            <li className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <p>About <GoChevronDown /></p>
              <div className="dropdown-content">
                {/* <Link className='a' to="/About" onClick={handleNavClick}>About Us</Link>
               */}
              </div>
            </li>
            {/* <li><NavLink to="/Project" onClick={handleNavClick}>Project</NavLink></li>
           */}
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="iconsbar">
          <FaBars onClick={() => setShowSideBar(!showSideBar)} />
        </div>
      </nav>
      <div className='nav2'></div>
    </>
  );
};

export default Navi;
