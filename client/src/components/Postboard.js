import React from "react";

import Post from "./Post";

export default function Postboard() {
  return (
    // Post Board Section
    <section className="flex justify-center pt-5">
      {/* Post Main Container */}
      <div className="p-5 w-6/12 md:w-10/12 rounded-md bg-black justify-center">
        {/* Post Card Container */}
        <div className="flex flex-col flex-wrap ">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
}
