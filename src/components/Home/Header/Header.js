import React from 'react';
import { Link, NavLink,  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './header.css'

const Header = () => {
    const {user,logOut} = useAuth()
    return (
            <div className='header-container'> 
                <Link style={{margin:'10px',textDecoration:"none", color:"white",fontSize:"20px"}} to='/home'>Home</Link>
                <Link style={{margin:'10px',textDecoration:"none",  color:"white",fontSize:"20px"}} to='/about'>About Us</Link>
                <Link style={{margin:'10px',textDecoration:"none",  color:"white",fontSize:"20px"}} to='/service'>Our Services</Link>

                {user?.email ?
                    <button onClick={logOut} style={{border:'none',backgroundColor:'plum',margin:'10px',color:"white",fontSize:"20px"}} >Log Out</button>: 
                    <Link style={{margin:'10px',textDecoration:"none",color:"white",fontSize:"20px"}} to='/login'>Log in</Link> 
                }
                <h2 style={{display:'inline',color:'white',marginLeft:"20px"}}>sign in as: {user?.displayName}</h2> 
            </div>
    );
};

export default Header;