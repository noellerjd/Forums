import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button className="bg-lightblue text-white text-xl py-1 px-3 rounded-md">
        Loading...
      </button>
    );
  }

  return (
    <button
      className="bg-lightblue text-white text-xl py-1 px-3 rounded-md"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default LoginButton;
