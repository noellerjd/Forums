import React from "react";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    // Header Container
    <div>
      <div
        className="flex place-items-center justify-evenly h-20 bg-black shadow-sm"
        id="header-title"
      >
        <h1 className="flex text-white text-3xl">Forums</h1>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Header;
