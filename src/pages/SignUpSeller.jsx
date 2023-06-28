import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/global/Input";
import PasswordInput from "../components/global/PasswordInput";
import ReCAPTCHA from "react-google-recaptcha";
import { isBrowser, isMobile } from "react-device-detect";
import { useRegisterSeller } from "../api/auth";
import { useToast } from "../hooks/use-toast";

const SignUpSeller = () => {
  const { mutateAsync: registerSeller, isLoading: isRegisterLoading } =
    useRegisterSeller();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [captured, setCaptured] = useState(false);

  const handleSignUpSeller = async (values) => {
    try {
      const deviceType = isBrowser
        ? "browser"
        : isMobile
        ? "mobile"
        : "unknown";
      values.device_type = deviceType;
      const deviceVersion = "1.0";
      values.device_version = deviceVersion;
      const res = await registerSeller(values);
      if (res.data.status === "error") {
        toast.error(res.data.message);
      } else {
        navigate("/otp");
      }
    } catch (e) {
      toast.error(
        e?.response?.data?.message ?? "Something went wrong, please try again"
      );
    }
  };

  const onSubmit = async (values) => {
    if (!captured) return toast.error("Please verify that you are human");
    handleSignUpSeller(values);
  };

  return (
    <AuthLayout>
      <div className="md:grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="lg:flex col-span-6 justify-end items-center  pt-12">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px]" />
        </div>
        <section className="md:col-span-8 lg:col-span-6  flex flex-col lg:bg-blue-600 h-full pt-12 form-card z-10">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label=" Please Enter Your First Name"
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
                    label="Please Enter Your Last Name"
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
                    Please Enter Your Phone Number
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <Controller
                    name="phone_number"
                    control={control}
                    render={({ field }) => {
                      return (
                        <PhoneInput
                          {...field}
                          onChange={(e) =>
                            field.onChange({ target: { value: e } })
                          }
                          placeholder="Phone Number (08*   * * *   * * * *"
                          error={errors?.phone_number?.message}
                          disabled={isRegisterLoading}
                        />
                      );
                    }}
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
                  <p className="pb-2 text-xs">
                    Please Select A Role{" "}
                    <span className="text-red-500 text-sm">*</span>
                  </p>
                  <select
                    className="appearance-none border rounded-lg w-full py-4 px-5  text-gray-700 leading-tight border-blue-300 focus:outline-none focus:shadow-outline text-sm"
                    {...register("reg_type")}
                    disabled={isRegisterLoading}
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
                  />
                  <p className="text-xs text-center pt-2">
                    If you were referred by any existing user, please enter
                    their referral code.
                  </p>
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

              <div className="grid md:flex items-center justify-center my-6 gap-4">
                <ReCAPTCHA
                  sitekey="6LcK-ZsUAAAAAE5QMsoKYJHF8ZGtl9uulCaP-DQT"
                  onChange={() => {
                    setCaptured(true);
                  }}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                  disabled={isRegisterLoading}
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
        </section>
      </div>
    </AuthLayout>
  );
};

export default SignUpSeller;
