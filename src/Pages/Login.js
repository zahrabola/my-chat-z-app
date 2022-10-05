import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
   const [err, setErr] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
     e.preventDefault();
     const email = e.target[0].value;
     const password = e.target[1].value;

     try {
       await signInWithEmailAndPassword(auth, email, password);
       navigate("/");
     } catch (err) {
       setErr(true);
     }
   };
  return (
    <div className="f-Container">
      <div className="f-wrapper">
        <span className="f-logo">Zahra's Chat</span>
        <span className="f-title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="f-input" />
          <input type="password" placeholder="Password" className="f-input" />
          <button>Sign in</button>
        </form>
        <p>
          You don't have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
