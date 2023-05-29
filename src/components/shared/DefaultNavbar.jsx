import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" container flex items-center justify-between flex-wrap  ">
      <div className="flex items-center flex-shrink-0   ">
        <img src={logo} className="w-28 mt-4" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-black-400 hidden"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "black" }}
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "black" }}
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow lg:ml-40 lg:mt-4">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black mr-8 "
          >
            Why Escrow?
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black mr-8"
          >
            Online Merchant
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black mr-8"
          >
            Integrations
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black mr-8"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black mr-8"
          >
            Help
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black mr-8"
          >
            Contact Us
          </a>
        </div>
        <div>
          <a
            href=""
            className=" block mt-4 lg:inline-block lg:mx-2 text-sm text-blue-500"
          >
            0700 ATARAPAY{" "}
          </a>

          <NavLink
            to="/signup/seller"
            className=" block mt-4 lg:inline-block lg:mx-2 text-sm text-blue-500"
          >
            {" "}
            Seller
          </NavLink>

          <NavLink
            to="/login/buyer"
            className="block mt-4 lg:inline-block lg:ml-2 text-sm text-blue-500"
          >
            {" "}
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
