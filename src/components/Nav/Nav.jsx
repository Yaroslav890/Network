import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () =>  {     
    return (
    <nav className = {s.nav}>
            <div><NavLink to = '/content'>Profile</NavLink></div>
            <div><NavLink to = '/dialogs'>Messages</NavLink></div>
            <div><NavLink to = '/users'>Users</NavLink></div>
    </nav>  
    );
  }
  
  export default Nav;