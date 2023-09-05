import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '..//LoginSignup/person.png';
import email_icon from '..//LoginSignup/email.png';
import Password_icon from '..//LoginSignup/password.png';

function LoginSignup () {
const [action,setAction]=useState("SignUp");


  return (
    <div className='box'>
    <div className='container'>
      <div className='header'>
      <div className="text">{action}</div>
      <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt=''/>
          <input type="text" placeholder='Name' required/>   
        </div>}
        
        <div className="input">
          <img src={email_icon}alt=''/>
          <input type="Email" placeholder='Email Id' required  /></div>
          <div className="input">
          <img src={Password_icon}alt=''/>
          <input type="Password"placeholder='Password'  required/></div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forget-password">Lost Password <span> Click Here</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Signup"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup