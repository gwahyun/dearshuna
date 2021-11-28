import React from "react";

const Home = ({ loginUser }) => {
  console.log(loginUser);

  return (
    <div>
      <h1>HOME</h1>
      <img src={loginUser.photoURL} />
      <h2>{loginUser.displayName}님 어서오세요!</h2>
    </div>
  );
};
export default Home;
