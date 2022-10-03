import React from "react";

const Login = () => {
  return (
    <div className="f-Container">
      {" "}
      Register
      <div className="f-wrapper">
        <span className="f-logo">Zahra's Chat</span>
        <span className="f-title">Login</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
