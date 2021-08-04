import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <span className='NavBar-welcome'>Hi, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/about' className='NavBar-link'>ABOUT</Link>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/about' className='NavBar-link'>ABOUT</Link>
    </div>;
        
    

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;