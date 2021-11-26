import React from "react";
import firebase from "../base";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
  const googleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <button value="googleLogin" onClick={googleLogin}>
        구글로그인!!!
      </button>
    </div>
  );
};
export default Auth;
