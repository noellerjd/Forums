import React from "react";

const Comment = () => {
  return (
    <div className="flex flex-wrap bg-lightblack p-1 my-2 rounded-md shadow-md px-4 text-white gap-x-3 items-center">
      <img
        className="w-10 rounded-full"
        src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.18169-9/17203209_187227001766238_2724205868803555695_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=EZUibc6K0VIAX-RiBsy&tn=MW28BY5A1ambei2X&_nc_ht=scontent.fapa1-1.fna&oh=00_AfA_MOJH3ujSQ2vfPAxRRg1zFZ1c_rw2IuNXvlRo184SWA&oe=6398E06D"
        alt="pp2"
      ></img>
      <div className="text-tan text-sm py-1">
        <p className="cursor-pointer hover:text-lightblue">Justin Noeller</p>
        <p>November 13, 2022 9:15:20 PM</p>
      </div>
      <div className="px-5 py-3 mb-3 w-full bg-black rounded-md text-white leading-relaxed">
        <p>Lorem</p>
      </div>
    </div>
  );
};

export default Comment;
