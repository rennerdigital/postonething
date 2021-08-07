import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <span className='NavBar-welcome'>Hi, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/user' className='NavBar-link'>MY ONE THING</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/user/all' className='NavBar-link'>ALL THE THINGS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/about' className='NavBar-link'>ABOUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
    </div>
    :
    <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
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