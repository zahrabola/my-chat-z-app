import React from "react";

const Login = () => {
  return (
    <div className="f-Container">
      <div className="f-wrapper">
        <span className="f-logo">Zahra's Chat</span>
        <span className="f-title">Login</span>
        <form>
          <input type="email" placeholder="Email" className="f-input" />
          <input type="password" placeholder="Password" className="f-input" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
