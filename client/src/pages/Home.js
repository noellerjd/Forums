import React from "react";

import Postboard from "../components/Postboard";
import PostButton from "../components/PostButton";

const Home = () => {
  return (
    <div className="w-[min(calc(100vw-10%),1000px)] flex-col mx-auto">
      <PostButton />
      <Postboard />
    </div>
  );
};

export default Home;
