import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogole} = useAuth()
    return (
        <div className="login-container">
            <h1 style={{color:"plum"}}>please login</h1>
            <button onClick={signInUsingGoogole} style={{border:'none',padding:'15px 55px',color:'white',backgroundColor:'plum',borderRadius:"15px",fontSize:'20px'}}>Google sign in</button>
        </div>
    );
};

export default Login;