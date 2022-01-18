import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <nav className=' bg-gray p-2'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className="d-flex align-items-center">
          <div className="me-5">
            <img src={logo} alt='Logo' className="w-100" />
          </div>
          <NavLink to='/' className='me-5 link-secondary'>
            Recent Articles
          </NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div>
          <NavLink to='/create' className='create'>Create Article</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
