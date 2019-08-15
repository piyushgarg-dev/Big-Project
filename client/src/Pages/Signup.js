import React, { useState } from "react";
import "./css/signup.css";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [alertClass, setalertclass] = useState();
  const [alertmsg, setalertmsg] = useState();

  const handelNameChange = e => {
    setname(e.target.value);
  };
  const handelEmailChange = e => {
    setemail(e.target.value);
  };
  const handelUsernameChange = e => {
    setusername(e.target.value);
  };
  const handelPasswordChange = e => {
    setpassword(e.target.value);
  };

  const handelFormSubmit = e => {
    e.preventDefault();
    const formdata = {
      name,
      email,
      username,
      password
    };

    const signupOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    };

    fetch("/signup", signupOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setalertclass(data.class);
        setalertmsg(data.msg);
      });
  };

  return (
    <div>
      <div className="signup-page">
        <div
          style={{
            justifyContent: "center",
            textAlign: "center"
          }}
          className={alertClass}
        >
          {alertmsg}
        </div>
        <form onSubmit={handelFormSubmit}>
          <div className="head">Sign Up</div>
          <div className="input-fields">
            <div className="formgroup">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={handelNameChange}
                name="username"
                required
              />
            </div>

            <div className="formgroup">
              <label>E-mail:</label>
              <input
                type="email"
                value={email}
                onChange={handelEmailChange}
                name="username"
                required
              />
            </div>

            <div className="formgroup">
              <label>Username</label>
              <input
                value={username}
                type="text"
                onChange={handelUsernameChange}
                name="username"
                required
              />
            </div>

            <div className="formgroup">
              <label>Password</label>
              <input
                value={password}
                type="password"
                onChange={handelPasswordChange}
                name="username"
                required
              />
            </div>
            <div className="formgroup">
              <input type="submit" value="Sign Up" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
