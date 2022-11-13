import React from "react";

import Post from "./Post";

const Postboard = () => {
  const getPosts = () => {
    let posts = [];
    for (let i = 0; i < 10; i++) {
      posts.push(<Post key={i} />);
    }

    return posts;
  };

  return <div className="mt-4">{getPosts()}</div>;
};

export default Postboard;
