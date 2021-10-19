import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'



const Login = () => {
    const {signInUsingGoogole,signInUsingGitHub, createUserEmailPassword,handleEmail,handlePassword,error,toggleLogin,isLogIn } = useAuth()
    return (
        <div className="login-container">
            <h1 style={{color:"plum"}}>Please {isLogIn ? 'sign in' : "Sign Up"}</h1>
            <form onSubmit={ createUserEmailPassword }>
                <label style={{marginRight:'10px',color:'plum'}} htmlFor="email">Email:</label>

                <input onBlur={handleEmail} style={{padding:'10px',border:'2px solid plum'}} type="text" name="enter your email" required />
                <br />
                <br />
                <label style={{marginRight:'10px',color:'plum'}} htmlFor="password">Password</label>
                <input onBlur={handlePassword} style={{padding:'10px',border:'2px solid plum'}} type="password" name="your password" id="" required />
                <br />
                 <input  style={{marginTop:'10px',padding:'15px 40px',backgroundColor:'plum',border:'none',borderRadius:'12px',color:'white'}} type="submit" value={isLogIn ? 'sign in' : "Sign Up"} />
            </form>
           <div style={{marginTop:'15px',color:"plum"}}>
           <label htmlFor="checkbox">Already have an account?</label>
            <input onChange={toggleLogin} type="checkbox" name="" id="" />
           </div>
            <div style={{color:"red"}}><h2>{error}</h2></div>
            <div style={{marginTop:'20px',color:"plum"}}>
                ______________ or _____________
            </div>
            <h1 style={{color:"plum"}}>please login</h1>
            <button onClick={signInUsingGoogole} style={{border:'none',padding:'15px 55px',color:'white',backgroundColor:'plum',borderRadius:"15px",fontSize:'20px',marginRight:'20px'}}>Google sign in</button>
            <button onClick={signInUsingGitHub} style={{border:'none',padding:'15px 55px',color:'white',backgroundColor:'plum',borderRadius:"15px",fontSize:'20px',marginTop:"30px"}}>Github sign in</button>
        </div>
    );
};

export default Login;
          