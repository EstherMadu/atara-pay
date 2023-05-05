import React from "react";
import AuthNavbar from "./AuthNavbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <AuthNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;
