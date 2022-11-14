import React from "react";

const FullPost = () => {
  const post_contents = "this is a test\n\n\nthis    is coo";

  return (
    <div className="flex flex-wrap bg-lightblack p-1 my-2 rounded-md shadow-md px-4 text-white">
      <h1 className="text-2xl my-2 font-bold">
        This is a sample post titledsahj khgkadsfghkjasdhfk
        lasdfhlsakhjffhdjksahfjk lsadhfkjlsadhfkljdsah
      </h1>
      <div className="flex gap-x-3 justify-start w-full text-tan pb-2 items-center">
        <img
          className="w-10 rounded-full"
          src="https://lh3.googleusercontent.com/a/ALm5wu0bz25TaO5u5pwSE2o6igDFAeFApfHLeUry1EiLEA=s288-p-rw-no"
          alt="pp"
        ></img>
        <p className="cursor-pointer hover:text-lightblue">Authorname</p>
        <p className="text-xs">●</p>
        <p>November 13, 2022 9:10:17 PM</p>
      </div>
      <p className="px-5 py-3 mb-3 w-full bg-black rounded-md text-white leading-relaxed whitespace-pre">
        {post_contents}
      </p>
    </div>
  );
};

export default FullPost;
