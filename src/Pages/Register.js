import React, { useState } from "react";
import Add from "../Images/Avataradd.png";
import { /*getAuth,*/ createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import {
  /*getStorage,*/
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

//////////////////////////////////////////
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate ();

  const handleSubmit = async (event) => {
    event
      .preventDefault
      ///console.log(event.target[0].value
      ();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    ///const auth = getAuth();
    try {
          const res = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          //////////////////////////////////
          //Create a unique image name

          ///const storage = getStorage();
          const storageRef = ref(storage, displayName);

          const uploadTask = uploadBytesResumable(storageRef, file);

      
          uploadTask.on(
            (error) => {
              // Handle unsuccessful uploads
              setErr(true);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then(
                async (downloadURL) => {
                  /*console.log("File available at", downloadURL);*/

                  ///// create user on firebase
                  await updateProfile(res.user, {
                    displayName,
                    photoURL: downloadURL,
                  });
                  ///// create user on firebase
                  await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                  });
                  
await setDoc(doc(db, "userChats", res.user.uid), {});
navigate("/");
                });
            }
          );
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