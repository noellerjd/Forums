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
      <div className="px-5 py-3 mb-3 bg-black rounded-md text-white leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          veniam odit, cupiditate placeat officiis porro nulla at ex, quibusdam
          deleniti voluptate eligendi autem? Alias rerum cumque tempore
          consequuntur doloremque! Nisi minus fugiat, deleniti, blanditiis ad,
          neque nostrum sapiente quisquam atque quo nihil assumenda. Quasi autem
          magnam libero et doloribus ab cum. Doloremque aspernatur in provident
          alias? Eius vitae tempora, veritatis sed ad odit, eligendi asperiores
          numquam consectetur eveniet in minima, accusantium eos inventore
          commodi! Laboriosam voluptatem dolor dicta, ab saepe esse, dolore id
          nobis accusantium obcaecati tempora nihil
        </p>
      </div>
    </div>
  );
};

export default Comment;
