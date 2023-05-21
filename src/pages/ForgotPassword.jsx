import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number, password);
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="col-span-8 justify-end items-center pl-10 lg:pr-[300px] pt-32 mt-10">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px]" />
        </div>
        <div className="col-span-10 lg:col-span-4 flex flex-col lg:bg-blue-600 h-full pt-12">
          <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[480px] mx-auto lg:-ml-[250px] my-auto">
            <h2 className="text-blue-600 text-2xl font-bold mb-12">
              Forgot Password
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-3 text-sm  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline"
                  id="input1"
                  type="text"
                  placeholder="Email Address or Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mb-12 mt-4"
                  type="submit"
                >
                  RESET PASSWORD
                </button>
              </div>
              <p className="py-6 text-left w-80 text-base tracking-wide">
                *** A password reset link will be sent to the email address or
                phone number you provided
              </p>
              <div className="text-center my-6">
                <p className="text-xs">
                  Don't have an account yet?
                  <NavLink to="/" className="text-blue-600 font-bold px-2">
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
