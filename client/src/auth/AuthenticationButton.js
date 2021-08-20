import React from "react";
import LoginButton from "./Login/LoginButton";
import LogoutButton from "./Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;