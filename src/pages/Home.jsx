import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl">Welcome to atara pay</h1>

      <div className="mt-10 flex flex-col space-y-4">
        <NavLink to="/signup/buyer">Buyer signup</NavLink>
        {/* <NavLink to="/signup/seller">Seller signup</NavLink> */}
        <NavLink to="/login/buyer">Buyer login</NavLink>
        <NavLink to="/login/seller">Seller login</NavLink>
        <NavLink to="/otp">Otp</NavLink>
        <NavLink to="/forgot">Forgot password</NavLink>
      </div>
    </div>
  );
};

export default Home;
