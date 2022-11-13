import React from "react";

import Postboard from "../components/Postboard";
import PostButton from "../components/PostButton";

const Home = () => {
  return (
    <div className="w-1/2 lg:w-11/12 flex-col mx-auto">
      <PostButton />
      <Postboard />
    </div>
  );
};

export default Home;
