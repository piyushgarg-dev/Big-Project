import React, { useState, useEffect } from "react";
//import { GoogleLogin } from 'react-google-login';
import "./css/login.css";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  });
  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');


  const handelFormSubmit = (e) =>{
    e.preventDefault();
    const cred = {
        username,
        password
    }
    const loginOptions = {
        method:'POST',
        headers:{
        "Content-Type": "application/json"
        },
        body:JSON.stringify(cred)
    }
    console.log('cred',cred)

    fetch('/login',loginOptions)
    .then(res=>res.json)
    .then(data=>console.log(data))
  }

  const handelUsernameChange = (e) =>{
    setusername(e.target.value);
  }

  const handelPasswordChange = (e) =>{
    setpassword(e.target.value);
  }




  return (
    <div>
    <form onSubmit={handelFormSubmit}>
      <div className="login-page">
       
          <div className="head">Login</div>
          <div className="input-fields">
            <label>Username:</label>
            <input type="text"
             onChange={handelUsernameChange} 
             value={username}
             name="username"
             required />


            <label>Password:</label>
            <input type="password"
             onChange={handelPasswordChange} 
             value={password}
             name="password" 
             required 
            
             />
              
            <input type="submit" value="Log In" />
           
          </div>
        
      </div>
    </form>
    
    </div>
   
  );
};

export default Login;
