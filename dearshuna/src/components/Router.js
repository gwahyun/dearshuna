import { HashRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Message from "../routes/Message";
import OnlyforShuna from "../routes/OnlyforShuna";
import Nav from "./Nav";

const AppRouter = ({ loginUser }) => {
  return (
    <HashRouter>
      <Nav loginUser={loginUser} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/onlyforshuna" element={<OnlyforShuna />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
