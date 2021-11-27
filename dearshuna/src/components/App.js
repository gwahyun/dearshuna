import React, { useState } from "react";
import AppRouter from "./Router";
import firebase from "../base";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const auth = getAuth(firebase);
  onAuthStateChanged(auth, (user) => {
    setLoggedIn(user);
    console.log(user);
  });

  return <AppRouter isLoggedIn={isLoggedIn} />;
}
export default App;
