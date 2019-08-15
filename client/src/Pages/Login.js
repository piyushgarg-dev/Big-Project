import React, { useState, useEffect } from "react";
//import { GoogleLogin } from 'react-google-login';
import "./css/login.css";

const Login = (props) => {
  useEffect(() => {
    document.title = "Login";
  });
  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');
  const [alertClass,setalertclass] = useState();
  const [alertMsg,setalertmsg] = useState();


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
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setalertmsg(data.msg);
      setalertclass(data.class);
      if(data.token){
        localStorage.setItem('JWT_Token',data.token);
        window.location.reload();
      }
      

    
    })
  }
  const redirectToSignUp = () =>{
    window.localStorage.setItem('redirect','signup');
    window.location.reload();
  }
  const handelUsernameChange = (e) =>{
    setusername(e.target.value);
  }

  const handelPasswordChange = (e) =>{
    setpassword(e.target.value);
  }




  return (
    <div>
    
      <div className="login-page">
      <div className={alertClass}>
        {alertMsg}
      </div>
      <form onSubmit={handelFormSubmit}>
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
          </form>
          <button className="btn btn-danger mybtn"
          onClick={redirectToSignUp}
          >Sign Up</button>
          
      </div>
     
      
    
    
    </div>
   
  );
};

export default Login;
