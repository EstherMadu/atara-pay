import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/global/Input";
import PasswordInput from "../components/global/PasswordInput";
import { useCheckBuyer, useLogin } from "../api/auth";

const LoginBuyer = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(null);
  const { mutateAsync: checkBuyer, isLoading: isCheckBuyerLoading } =
    useCheckBuyer();
  const { mutateAsync: login, isLoading: isLoginLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const handleCheckBuyer = async ({ phone: email, ...values }) => {
    try {
      const res = await checkBuyer({ email, ...values });
      console.log({ res });
      if (res.data.status === "error") {
        setError(res.data.message);
      } else {
        if (res.data.data.firstTime) {
          setStage(2);
        } else {
          setStage(3);
        }
      }
    } catch (e) {
      console.log({ e });
      setError(
        e?.response?.data?.message ?? "Something went wrong, please try again"
      );
    }
  };

  const handleLogin = async ({ phone: email, ...values }) => {
    try {
      const res = await login({ email, ...values });
      console.log({ res });
      navigate("/dashboard");
    } catch (e) {
      console.log({ e });
      setError(
        e?.response?.data?.message ?? "Something went wrong, please try again"
      );
    }
  };

  const onSubmit = async (values) => {
    setError("");
    console.log({ stage });
    if (!stage) {
      handleCheckBuyer(values);
    } else if (stage === 3) {
      handleLogin(values);
    }
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="col-span-8 justify-end items-center pl-10 lg:pr-[300px] pt-12 mt-24">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px]" />
        </div>
        <div className="col-span-8 lg:col-span-4 flex flex-col lg:bg-blue-600 h-full lg:pt-12 ">
          <div className="form-card z-10">
            <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[480px] mx-auto lg:-ml-[250px] my-auto ">
              <h2 className="text-blue-600 text-xl font-bold mb-2">
                Buyer's Login
              </h2>
              <p className="text-xs mb-6">LOGIN TO AtaraPay (BUYER)</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                {!!error && (
                  <div className="bg-red-500 text-white rounded-xl px-4 py-2 mb-6">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <Input
                    label="Phone number"
                    bordered
                    {...register("phone", {
                      required: "Please enter your phone number",
                    })}
                    error={errors?.phone?.message}
                    disabled={isCheckBuyerLoading || isLoginLoading}
                  />
                  {stage === 2 && (
                    <>
                      <Input
                        label="First name"
                        bordered
                        {...register("firstname", {
                          required: "Please enter your first name",
                        })}
                        error={errors?.firstname?.message}
                        disabled={isCheckBuyerLoading || isLoginLoading}
                      />
                      <Input
                        label="Last name"
                        bordered
                        {...register("lastname", {
                          required: "Please enter your last name",
                        })}
                        error={errors?.lastname?.message}
                        disabled={isCheckBuyerLoading || isLoginLoading}
                      />
                      <Input
                        label="Email address"
                        bordered
                        {...register("email", {
                          required: "Please enter your address",
                        })}
                        error={errors?.email?.message}
                        disabled={isCheckBuyerLoading || isLoginLoading}
                      />
                    </>
                  )}
                  {(stage === 2 || stage === 3) && (
                    <div className="mb-6">
                      <PasswordInput
                        label="Password"
                        bordered
                        {...register("password")}
                        error={errors?.password?.message}
                        disabled={isCheckBuyerLoading || isLoginLoading}
                      />
                    </div>
                  )}
                  {stage === 2 && (
                    <div className="mb-6">
                      <PasswordInput
                        label="Password confirmation"
                        bordered
                        {...register("password_confirmation")}
                        error={errors?.password_confirmation?.message}
                        disabled={isCheckBuyerLoading || isLoginLoading}
                      />
                    </div>
                  )}
                  {stage === 3 && (
                    <p className="text-right pt-2 text-sm">
                      <NavLink to="/forgot" className="text-blue-600 font-bold">
                        Forgotten Password
                      </NavLink>
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full disabled:pointer-events-none disabled:opacity-60"
                    type="submit"
                    disabled={isCheckBuyerLoading || isLoginLoading}
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
      </div>
    </AuthLayout>
  );
};

export default LoginBuyer;
