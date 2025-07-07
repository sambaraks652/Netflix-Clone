import React from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>Sign In</h1>
      </div>
    </div>
  );
};

export default Login;
