import React from 'react';
import { Link, NavLink,  } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header-container'>
           
          <Link to='/home'>Home</Link>
           <Link to='/services'>Services</Link>
           
        </div>
    );
};

export default Header;