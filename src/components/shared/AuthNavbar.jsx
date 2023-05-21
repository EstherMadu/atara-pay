import React from "react";
import logo from "../../assets/images/logo.svg";
//import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="w-full fixed top-0 inset-x-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex pt-4 mb-20">
        <div>
          <div className="flex items-center justify-between md:block">
            <a href="#">
              <img src={logo} alt="" className="w-32 " />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
