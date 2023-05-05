import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import captcha from "../assets/images/captcha.png";
import { NavLink } from "react-router-dom";

const SignUpBuyer = () => {
  const [number, setNumber] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number, password);
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 h-screen overflow-hidden">
        <div className=" hidden lg:flex col-span-6 justify-end items-center  pt-12">
          <img
            src={heroImg}
            alt="hero"
            className="w-full md:max-w-[600px] opacity-20"
          />
        </div>
        <div className="lg:col-span-6 flex flex-col lg:bg-blue-600 h-full pt-12 z-10">
          <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[700px] mx-auto lg:-ml-[300px] my-auto">
            <h2 className="text-blue-600 text-3xl font-bold">
              Sign Up to Trustpay (Buyer)
            </h2>
            <p className="text-xs py-6">* All fields are mandatory</p>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-xs"
                  id="input1"
                  type="text"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-5 text-xs text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline"
                  id="input1"
                  type="text"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <input
                  className="appearance-none border text-xs rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline"
                  id="input1"
                  type="text"
                  placeholder="Email Address (e.g. mail@atarapay.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 text-xs focus:outline-none focus:shadow-outline"
                  id="input1"
                  type="text"
                  placeholder="Phone Number (08*   * * *   * * * *)"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 text-xs focus:outline-none focus:shadow-outline"
                  id="input1"
                  type="text/number"
                  placeholder="Enter Password (* * * * * * * * * * * )"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-xs"
                  id="input1"
                  type="text"
                  placeholder="Confirm Password (* * * * * * * * * * * )"
                  value={number}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="grid md:flex items-center justify-center mb-6 lg:mb-0">
                <img src={captcha} alt="captcha" className="w-80" />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  SIGN UP
                </button>
              </div>
              <div className="text-center">
                <p className="pb-2 text-xs tracking-tight">
                  By registering you agree to TrustPay's
                  <a href="#" className="text-blue-600 font-bold px-2">
                    Terms of Use
                  </a>
                  and{" "}
                  <a className="text-blue-600 font-bold px-2">
                    Privacy Policy{" "}
                  </a>
                </p>
                <p className="text-xs py-4">
                  Register as{" "}
                  <NavLink
                    to="/signup/seller"
                    className="text-blue-600 font-bold px-2"
                  >
                    {" "}
                    Seller
                  </NavLink>
                </p>
                <p className="text-xs">
                  Already have an account yet? Login as
                  <NavLink
                    to="/login/buyer"
                    className="text-blue-600 font-bold px-2"
                  >
                    Buyer
                  </NavLink>
                  or{" "}
                  <NavLink
                    to="/login/seller"
                    className="text-blue-600 font-bold px-2"
                  >
                    Seller
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

export default SignUpBuyer;
