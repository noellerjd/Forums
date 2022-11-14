import React from "react";

import Postboard from "../components/Postboard";
import CreatePostForm from "../components/CreatePostForm";

const Home = () => {
  return (
    <div className="w-[min(calc(100vw-10%),1000px)] flex-col mx-auto pb-10">
      <CreatePostForm />
      <Postboard />
    </div>
  );
};

export default Home;
