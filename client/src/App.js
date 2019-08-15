import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./App.css";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  if (localStorage.getItem("JWT_Token") != null) {
    return <Dashboard />;
  } else {
    if (localStorage.getItem("redirect") == null) {
      return (
      <>
      <Login />
      
      </>
        );
    } else if (localStorage.getItem("redirect") == "signup") {
      return <Signup />;
    }
  }
}

export default App;
