import React from "react";

export default function Comment() {
  return (
    <div className="bg-white rounded-lg border shadow-lg p-4 w-1/5">
      <label className="text-gray-800 font-regular">Write a comment!</label>
      <textarea
        maxLength={50}
        className="bg-gray-200 p-1 h-20 w-full mt-0"
      ></textarea>
    </div>
  );
}
