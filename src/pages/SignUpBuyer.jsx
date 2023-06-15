import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import captcha from "../assets/images/captcha.png";
import { NavLink, useNavigate } from "react-router-dom";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import Input from "../components/global/Input";
import PasswordInput from "../components/global/PasswordInput";
import { useRegisterBuyer } from "../api/auth";

const SignUpBuyer = () => {
  const navigate = useNavigate();
  const { mutateAsync: registerBuyer, isLoading: isRegisterLoading } =
    useRegisterBuyer();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUpBuyer = async (values) => {
    console.log(values);
    try {
      if (values.password !== values.password_confirmation) {
        return setError("Password do not match");
      }
      const res = await registerBuyer(values);
      console.log(res);
      if (res.data.status === "error") {
        setError(res.data.message);
      }
    } catch (e) {
      console.log(e);
      setError(
        e?.response?.data?.message ?? "Something went wrong, please try again"
      );
    }
  };

  const onSubmit = async (values) => {
    setError("");
    handleSignUpBuyer(values);
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="lg:flex col-span-6 justify-end items-center pt-12">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px] " />
        </div>
        <div className=" col-span-8 lg:col-span-6 flex flex-col lg:bg-blue-600 h-full pt-12 form-card z-10">
          <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[700px] mx-auto lg:-ml-[300px] my-auto">
            <h2 className="text-blue-600 text-3xl font-bold">
              Sign Up to AtaraPay (Buyer)
            </h2>
            <p className="text-xs py-6">* All fields are mandatory</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              {!!error && (
                <div className="bg-red-500 text-white rounded-xl px-4 py-2 mb-6">
                  {error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="First name"
                    bordered
                    {...register("firstname", {
                      required: "Please Enter Your First Name",
                    })}
                    error={errors?.firstname?.message}
                    disabled={isRegisterLoading}
                  />
                </div>
                <div>
                  <Input
                    label="Last name"
                    bordered
                    {...register("lastname", {
                      required: "Please Enter Your Last Name",
                    })}
                    error={errors?.lastname?.message}
                    disabled={isRegisterLoading}
                  />
                </div>
                <div>
                  <Input
                    label=" This Email Address will be Username at login"
                    bordered
                    {...register("email", {
                      required: "Please enter your address",
                    })}
                    error={errors?.email?.message}
                    disabled={isRegisterLoading}
                  />
                </div>
                <div>
                  <p className="pb-2 text-xs">
                    This Phone Number will be Username at login
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <PhoneInput
                    placeholder="Phone Number (08*   * * *   * * * *"
                    {...register("phone_number")}
                    error={errors?.phone_number?.message}
                    disabled={isRegisterLoading}
                  />
                </div>

                <div>
                  <PasswordInput
                    label=" Please Select A Password"
                    placeholder="Enter Password (* * * * * * * * * * * )"
                    bordered
                    {...register("password")}
                    error={errors?.password?.message}
                    disabled={isRegisterLoading}
                  />
                </div>
                <div>
                  <PasswordInput
                    label=" Please Confirm Your Password"
                    placeholder="Confirm Password (* * * * * * * * * * * )"
                    bordered
                    {...register("password_confirmation")}
                    error={errors?.password_confirmation?.message}
                    disabled={isRegisterLoading}
                  />
                </div>
                <div>
                  <Input
                    label="Referral code"
                    bordered
                    {...register("referral_code")}
                    error={errors?.referral_code?.message}
                    disabled={isRegisterLoading}
                  />
                </div>
                <div>
                  <p className="pb-2 text-xs">How did you find us?</p>
                  <select
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-sm"
                    {...register("reg_type")}
                    disabled={isRegisterLoading}
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
                  <NavLink
                    to="/signup/seller"
                    className="text-blue-600 font-bold px-2"
                  >
                    {" "}
                    Seller
                  </NavLink>
                </p>
                <p className="text-xs">
                  Already have an account? Log in as
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
                  <NavLink to="/error/page">404</NavLink>
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
