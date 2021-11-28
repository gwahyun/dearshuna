import { HashRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ loginUser }) => {
  return (
    <HashRouter>
      <Routes>
        {loginUser ? (
          <Route exact path="/" element={<Home loginUser={loginUser} />} />
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
      </Routes>
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

export default AppRouter;
