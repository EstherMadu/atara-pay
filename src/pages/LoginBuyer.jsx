import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import { NavLink } from "react-router-dom";

const LoginBuyer = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number, password);
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 h-screen overflow-hidden">
        <div className="hidden lg:flex col-span-8 justify-end items-center pl-10 lg:pr-[300px] pt-12">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px]" />
        </div>
        <div className="lg:col-span-4 flex flex-col lg:bg-blue-600 h-full pt-12">
          <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[480px] mx-auto lg:-ml-[250px] my-auto">
            <h2 className="text-blue-600 text-xl font-bold mb-2">
              Buyer's Login
            </h2>
            <p className="text-xs mb-6">LOGIN TO TRUSTPAY (BUYERS)</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-3  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline"
                  id="input1"
                  type="text"
                  placeholder="Phone number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline"
                  id="input2"
                  type="password"
                  placeholder="Password (************)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-right pt-2 text-sm">
                  <NavLink to="/forgot" className="text-blue-600 font-bold">
                    Forgotten Password
                  </NavLink>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  LOGIN
                </button>
              </div>
              <div className="text-center my-6">
                <p className="py-4 text-xs tracking-tight">
                  Login as{" "}
                  <NavLink
                    to="/login/seller"
                    className="text-blue-600 font-bold px-2"
                  >
                    Seller
                  </NavLink>
                </p>
                <p className="text-xs">
                  Don't have an account yet? Register as{" "}
                  <NavLink to="/" className="text-blue-600 font-bold px-2">
                    Buyer
                  </NavLink>
                  or
                  <NavLink
                    to="/signup/seller"
                    className="text-blue-600 font-bold px-2"
                  >
                    Seller
                  </NavLink>
                </p>

                <NavLink to="/otp" className="text-blue-600 font-bold px-2">
                  OTP
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginBuyer;
