import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import firebase from "../base";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Nav from "./Nav";

function App() {
  const [init, setInit] = useState();
  const [loginUser, setLoggedIn] = useState(null);
  const auth = getAuth(firebase);
  useEffect(() => {
    onAuthStateChanged(auth, (userObj) => {
      setLoggedIn(userObj);
    });
  }, []);

  return <AppRouter loginUser={loginUser} />;
}
export default App;
