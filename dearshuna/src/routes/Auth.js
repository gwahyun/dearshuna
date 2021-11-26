import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
  const googleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);

        // ...
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
