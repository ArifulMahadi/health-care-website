import React from 'react';
import { Link, NavLink,  } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
            <div className='header-container'> 
                <Link style={{margin:'10px',textDecoration:"none", color:"white",fontSize:"20px"}} to='/home'>Home</Link>
                <Link style={{margin:'10px',textDecoration:"none",  color:"white",fontSize:"20px"}} to='/about'>About Us</Link>
                <Link style={{margin:'10px',textDecoration:"none",  color:"white",fontSize:"20px"}} to='/service'>Our Services</Link>

                <Link style={{margin:'10px',textDecoration:"none",color:"white",fontSize:"20px"}} to='/login'>Log in</Link> 
                <h2 style={{display:'inline',color:'white',marginLeft:"20px"}}>sign in as:</h2> 
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Header;