import React from "react";
import Add from "../Images/Avataradd.png";
const Register = () => {
  return (
    <div className="f-Container">
      {" "}
      <div className="f-wrapper">
        <span className="f-logo">Zahra's Chat</span>
        <span className="f-title">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" /> 
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
// 15. hidden file link 