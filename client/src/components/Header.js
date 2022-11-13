import React from "react";

const Header = () => {
  return (
    // Header Container
    <div>
      <div
        className="flex place-items-center justify-evenly h-20 bg-black shadow-sm"
        id="header-title"
      >
        <h1 className="flex text-white text-3xl">Forums</h1>
      </div>
    </div>
  );
};

export default Header;
