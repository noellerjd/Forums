import React from "react";

import Post from "../components/Post";
import Comment from "../components/Comment";

export default function PostPage() {
  return (
    <div className="w-1/2 lg:w-11/12 flex-col mx-auto">
      <Post />
      <Comment />
    </div>
  );
}
