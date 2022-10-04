import React, { useState } from "react";
import Add from "../Images/Avataradd.png";
import { /*getAuth,*/ createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (event) => {
    event
      .preventDefault
      ///console.log(event.target[0].value
      ();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].file[0];

    ///const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };

  /* .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
*/

  return (
    <div className="f-Container">
      {" "}
      <div className="f-wrapper">
        <span className="f-logo">Zahra's Chat</span>
        <span className="f-title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="f-input" />
          <input type="email" placeholder="Email" className="f-input" />
          <input type="password" placeholder="Password" className="f-input" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" className="img-f" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Opps! Something has gone wrong.</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};
export default Register;
// 15. hidden file link
///https://firebase.google.com/docs/storage/web/upload-files
///https://console.firebase.google.com/u/0/project/chat-1bd3c/authentication/providers 