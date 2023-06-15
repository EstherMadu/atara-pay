import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/global/Input";
import PasswordInput from "../components/global/PasswordInput";
import { useSellerLogin } from "../api/auth";

const LoginSeller = () => {
  const navigate = useNavigate();
  const { mutateAsync: login, isLoading: isLoginLoading } = useSellerLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const handleLogin = async (values) => {
    try {
      const res = await login(values);
      console.log(res);
      if (res.data.status === "error") {
        setError(res.data.message);
      } else {
        navigate("/dashboard");
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
    handleLogin(values);
  };

  return (
    <AuthLayout>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="  col-span-8 justify-end items-center pl-10 lg:pr-[300px] pt-12 mt-24">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px]" />
        </div>
        <div className="col-span-8 lg:col-span-4 flex flex-col lg:bg-blue-600 h-full lg:pt-12">
          <div className="form-card z-10">
            <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[480px] mx-auto lg:-ml-[250px] my-auto">
              <h2 className="text-blue-600 text-xl font-bold mb-2">
                Seller's Login
              </h2>
              <p className="text-xs mb-6">LOGIN TO AtaraPay (SELLER)</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                {!!error && (
                  <div className="bg-red-500 text-white rounded-xl px-4 py-2 mb-6">
                    {error}
                  </div>
                )}
                <div className="mb-4">
                  <Input
                    label="Email"
                    {...register("email", {
                      required: "Please Enter Your Email Address",
                    })}
                    error={errors?.email?.message}
                    disabled={isLoginLoading}
                  />
                </div>
                <div className="mb-6">
                  <PasswordInput
                    label="Password"
                    bordered
                    {...register("password", {
                      required: "Please enter your password",
                    })}
                    error={errors?.password?.message}
                    disabled={isLoginLoading}
                  />
                  <p className="text-right pt-2 text-sm">
                    <NavLink to="/forgot" className="text-blue-600 font-bold">
                      Forgot Password
                    </NavLink>
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                    disabled={isLoginLoading}
                  >
                    LOGIN
                  </button>
                </div>
                <div className="text-center my-6">
                  <p className="py-4 text-xs tracking-tight">
                    Login as{" "}
                    <NavLink
                      to="/login/buyer"
                      className="text-blue-600 font-bold px-2"
                    >
                      Buyer
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginSeller;
