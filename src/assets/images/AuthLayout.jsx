import React from "react";
import AuthNavbar from "../../components/shared/AuthNavbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <AuthNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;
