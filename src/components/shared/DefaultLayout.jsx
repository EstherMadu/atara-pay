import React from "react";
import DefaultNavbar from "./DefaultNavbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultNavbar />
      {children}
    </>
  );
};

export default DefaultLayout;
