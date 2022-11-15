import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Comment from "../components/Comment";
import Post from "../components/Post";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex justify-center text-black h-screen place-items-center">
        <div className="w-10">
          <img
            className="content-center"
            src="https://media3.giphy.com/media/uyCJt0OOhJBiE/giphy.gif?cid=ecf05e474zzpmdl31f3o2x6hy1s73211tmk3hqudjuo47fw5&rid=giphy.gif&ct=s"
            alt="loading..."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[min(calc(100vw-10%),1000px)] flex-col mx-auto bg-lightblack p-1 my-2 rounded-md shadow-md px-4">
      <div className="flex justify-start items-center gap-x-5">
        <img
          src={user?.picture}
          className="rounded-full w-20 my-5"
          alt={user?.given_name + "'s profile picture"}
        />
        <h1 className="text-white">{user?.given_name}'s Profile</h1>
      </div>
      <div className="flex justify-center bg-black p-3 flex-col mb-5">
        <h1 className="text-lg text-center text-white font-semibold">
          Recent Posts
        </h1>
        <Post />
        <Post />
        <Post />
      </div>
      <div className="flex justify-center bg-black p-3 flex-col mb-5 empty:hidden">
        <h1 className="text-lg text-center text-white font-semibold">
          Recent Comments
        </h1>
        <div className="">
          <a href="/post-page" alt="Comment">
            <Comment />
          </a>
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Profile;
