import React from "react";

const Comment = () => {
  return (
    <div className="bg-white rounded-lg border shadow-lg p-4">
      <label className="text-gray-800 font-regular text-lg">
        Write a comment!
      </label>
      <textarea
        maxLength={150}
        className="flex justify-start flex-wrap bg-gray-200 rounded-sm p-1 h-20 w-full mt-0 shadow-sm hover:shadow-lg"
      ></textarea>
      <div className="flex justify-end">
        <button className="transition ease-in-out duration-300 hover:bg-blue hover:shadow-lg flex bg-lightblue text-white px-3 rounded-full text-lg mt-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comment;
