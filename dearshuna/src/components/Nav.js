import React from "react";
import { HashRouter, Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Message from "../routes/Message";
import OnlyforShuna from "../routes/OnlyforShuna";

const Nav = ({ logginUser }) => {
  return (
    <HashRouter>
      <Nav>
        <ul>
          <Route path="/message" element={<Message />}>
            <li>Message</li>
          </Route>
          {/* <Route path="/album" element={<Album />}>
            <li>Album</li>
          </Route> */}
          <Route path="/onlyforshuna" element={<OnlyforShuna />}>
            <li>dearShuna</li>
          </Route>
          {logginUser ? (
            <li>{logginUser.displayName}어서와</li>
          ) : (
            <Route path="/Auth" element={<Auth />}>
              <li>
                <button>로그인하기</button>
              </li>
            </Route>
          )}
        </ul>
      </Nav>
    </HashRouter>
  );
};

export default Nav;
