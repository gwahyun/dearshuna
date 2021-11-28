import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ logginUser }) => {
  const [user, setUser] = useState(null);

  return (
    <ul>
      <NavLink to="/message">
        <li>Message</li>
      </NavLink>
      <NavLink to="/onlyforshuna">
        <li>OnlyforShuna</li>
      </NavLink>
      <NavLink to="/home">
        <li>Home</li>
      </NavLink>
      <NavLink to="/message">
        <li>Message</li>
      </NavLink>
      {logginUser ? (
        <li>
          <img src={logginUser.photoURL} />
          {logginUser.displayName}님 어서오세요
        </li>
      ) : (
        <NavLink to="/auth">
          <li>Auth</li>
        </NavLink>
      )}
    </ul>
  );
};

export default Nav;
