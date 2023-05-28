import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import captcha from "../assets/images/captcha.png";
import { NavLink } from "react-router-dom";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SignUpBuyer = () => {
  const [number, setNumber] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = useState();
  const [referral, setReferral] = useState();
  const [option, setOption] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number, password);
  };

  const handleSelectedOption = (e) => {
    setOption(e.target.value);
    console.log(option);
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="lg:flex col-span-6 justify-end items-center  pt-12">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px]" />
        </div>
        <div className="col-span-8 lg:col-span-6  flex flex-col lg:bg-blue-600 h-full pt-12 z-10  form-content">
          <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[700px] mx-auto lg:-ml-[300px] my-auto overflow-y-auto ">
            <h2 className="text-blue-600 text-3xl font-bold">
              Sign Up to AtaraPay (Seller)
            </h2>
            <div className="flex justify-between py-6">
              <p className="text-sm ">
                <span className="text-red-600">*</span> All fields are mandatory
              </p>
              <a
                href="https://www.youtube.com/watch?v=3h7RNC5VglM"
                className="text-sm text-blue-600"
                target="_blank"
              >
                Watch: How To Register as a Seller
              </a>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="pb-2 text-xs">
                    Please Enter Your First Name
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <input
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-xs"
                    id="input1"
                    type="text"
                    placeholder="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div>
                  <p className="pb-2 text-xs">
                    Please Enter Your Last Name
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <input
                    className="appearance-none border rounded-lg w-full py-4 px-5 text-xs text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline"
                    id="input1"
                    type="text"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div>
                  <p className="pb-2 text-xs">
                    This Email Address will be Username at login
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <input
                    className="appearance-none border text-xs rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline"
                    id="input1"
                    type="text"
                    placeholder="Email Address (e.g. mail@atarapay.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <p className="pb-2 text-xs">
                    Please Enter Your Phone Number
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <PhoneInput
                    placeholder="Phone Number (08*   * * *   * * * *)"
                    value={value}
                    onChange={(value) => setValue(value)}
                    defaultCountry="NG"
                  />
                </div>
                <div>
                  <p className="pb-2 text-xs">
                    Please Select A Password
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <input
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 text-xs focus:outline-none focus:shadow-outline"
                    id="input1"
                    type="password"
                    placeholder="Enter Password (* * * * * * * * * * * )"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <p className="pb-2 text-xs">
                    Please Confirm Your Password
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <input
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-xs"
                    id="input1"
                    type="password"
                    placeholder="Confirm Password (* * * * * * * * * * * )"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div>
                  <p className="pb-2 text-xs">
                    Please Select A Role{" "}
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <select
                    value={option}
                    onChange={handleSelectedOption}
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-sm"
                  >
                    <option value="">Select a role </option>
                    <option value="Linkedin">Individual Seller</option>
                    <option value="A friend">Business Seller</option>
                    <option value="Google Search">Marketplace Operator</option>
                  </select>
                  <p className="text-xs text-center pt-2 text-red-500">
                    Business Sellers and Marketplace Operator shall require
                    documentation to verify the business,
                  </p>
                </div>

                <div>
                  <p className="pb-2 text-xs">Referral Code</p>
                  <input
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-xs "
                    id="input1"
                    type="password"
                    placeholder="Referral Code"
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                  />
                  <p className="text-xs text-center pt-2">
                    If you were referred by any existing user, please enter
                    their referral code.
                  </p>
                </div>
                <div>
                  <p className="pb-2 text-xs">How did you find us?</p>
                  <select
                    value={option}
                    onChange={handleSelectedOption}
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-sm"
                  >
                    <option value="">How did you hear about us? </option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="A friend">A friend</option>
                    <option value="Google Search">Google Search</option>
                  </select>
                </div>
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
                  By registering you agree to AtaraPay's
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
                  <NavLink to="/" className="text-blue-600 font-bold px-2">
                    {" "}
                    Buyer
                  </NavLink>
                </p>
                <p className="text-xs">
                  Already have an account yet? Log in as
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
