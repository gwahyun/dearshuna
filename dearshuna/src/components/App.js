import React, { useState } from "react";
import AppRouter from "./Router";
import firebase from "../base";
import { authService } from "../base";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.updateCurrentUser);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}
export default App;
