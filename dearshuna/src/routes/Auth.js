import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
  const googleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button value="googleLogin" onClick={googleLogin}>
        구글로그인
      </button>
    </div>
  );
};
export default Auth;
