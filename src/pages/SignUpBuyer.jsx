import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/global/Input";
import PasswordInput from "../components/global/PasswordInput";
import { isBrowser, isMobile } from "react-device-detect";
import { useRegisterBuyer } from "../api/auth";
import { useToast } from "../hooks/use-toast";

const SignUpBuyer = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { mutateAsync: registerBuyer, isLoading: isRegisterLoading } =
    useRegisterBuyer();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [captured, setCaptured] = useState(false);

  const handleSignUpBuyer = async (values) => {
    try {
      if (values.password !== values.password_confirmation) {
        return toast.error("Password do not match");
      }
      let deviceType = isBrowser ? "browser" : isMobile ? "mobile" : "unknown";
      values.device_type = deviceType;
      const deviceVersion = "1.0";
      values.device_version = deviceVersion;
      const res = await registerBuyer(values);
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
    handleSignUpBuyer(values);
  };

  return (
    <AuthLayout>
      <div className="md:grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="lg:flex md:col-span-6 justify-end items-center pt-12">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px] " />
        </div>
        <section className="md:col-span-8 lg:col-span-6 flex flex-col lg:bg-blue-600 h-full pt-12 form-card z-10">
          <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[700px] mx-auto lg:-ml-[300px] my-auto">
            <h2 className="text-blue-600 text-3xl font-bold">
              Sign Up to AtaraPay (Buyer)
            </h2>
            <p className="text-xs py-6">* All fields are mandatory</p>
            <form onSubmit={handleSubmit(onSubmit)} className="form-register">
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

              <div className="grid md:flex items-center justify-center mt-8 lg:mb-0 gap-4">
                <ReCAPTCHA
                  sitekey="6LcK-ZsUAAAAAE5QMsoKYJHF8ZGtl9uulCaP-DQT"
                  onChange={() => {
                    setCaptured(true);
                  }}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline w-full disabled:opacity-50 disabled:pointer-events-none"
                  type="submit"
                  disabled={isRegisterLoading}
                >
                  SIGN UP
                </button>
              </div>
              <div className="text-center mt-6 mb-4">
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
                <p className="text-xs py-2">
                  Register as{" "}
                  <Link
                    to="/signup/seller"
                    className="text-blue-600 font-bold px-2"
                  >
                    {" "}
                    Seller
                  </Link>
                </p>
                <p className="text-xs">
                  Already have an account? Log in as
                  <Link
                    to="/login/buyer"
                    className="text-blue-600 font-bold px-2"
                  >
                    Buyer
                  </Link>
                  or{" "}
                  <Link
                    to="/login/seller"
                    className="text-blue-600 font-bold px-2"
                  >
                    Seller
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </AuthLayout>
  );
};

export default SignUpBuyer;
