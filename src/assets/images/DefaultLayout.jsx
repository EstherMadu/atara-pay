import React from "react";
import DefaultNavbar from "../../components/shared/auth/DefaultNavbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultNavbar />
      {children}
    </>
  );
};

export default DefaultLayout;
