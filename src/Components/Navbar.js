import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {

  return (
    <div className="Navbar">
      <span className="nav-logo">Zahra's Chat</span>
      <div className="user">
        <img
          id="nav-img"
          alt=""
          src="https://images.pexels.com/photos/8601231/pexels-photo-8601231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <span>Zahra</span>
        <button id="nav-btn" onClick={() => signOut(auth)}>
          Logout{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
