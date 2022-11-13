import React from "react";

import Comment from "../components/Comment";
import FullPost from "../components/FullPost";

const PostPage = () => {
  return (
    <div className="w-[min(calc(100vw-10%),1000px)] flex-col mx-auto pb-5">
      <FullPost />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default PostPage;
