import React, { useState } from "react";
import AuthLayout from "../components/shared/AuthLayout";
import heroImg from "../assets/images/hero-img.svg";
import { Link } from "react-router-dom";
import { useSendBuyerResetLink } from "../api/auth";
import PhoneInput from "react-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useToast } from "../hooks/use-toast";

const ForgotPassword = () => {
  const { mutateAsync: sendLink, isLoading: isSendLinkLoading } =
    useSendBuyerResetLink();
  const {
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const toast = useToast();

  const [view, setView] = useState("form");

  const handleBuyerForgotPassword = async (values) => {
    try {
      const res = await sendLink(values);
      if (res.data.status === "error") {
        toast.error(res.data.message);
      } else {
        setView("success");
      }
    } catch (e) {
      toast.error(
        e?.response?.data?.message ?? "Something went wrong, please try again"
      );
    }
  };

  const onSubmit = async (values) => {
    handleBuyerForgotPassword(values);
  };

  return (
    <AuthLayout>
      <div className="md:grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen overflow-y-auto">
        <div className="col-span-8 justify-end items-center pl-10 lg:pr-[300px] pt-32 mt-10">
          <img src={heroImg} alt="hero" className="w-full md:max-w-[600px]" />
        </div>
        <div className="md:col-span-8 lg:col-span-4 flex flex-col lg:bg-blue-600 h-full pt-12">
          <div className="bg-white border rounded-xl shadow-lg p-10 w-full md:w-[480px] mx-auto lg:-ml-[250px] my-auto ">
            {view === "form" && (
              <>
                <h2 className="text-blue-600 text-2xl font-bold mb-12">
                  Forgot Password (BUYER)
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Controller
                      name="email"
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
                            disabled={isSendLinkLoading}
                          />
                        );
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full focus:outline-none focus:shadow-outline w-full mb-12 mt-4 disabled:pointer-events-none disabled:opacity-60"
                      type="submit"
                      disabled={isSendLinkLoading}
                    >
                      RESET PASSWORD
                    </button>
                  </div>
                  <p className="py-6 text-left text-base tracking-wide">
                    *** A password reset link will be sent to the email address
                    or phone number you provided
                  </p>
                  <div className="text-center my-6">
                    <p className="text-xs">
                      Don't have an account yet?
                      <Link to="/" className="text-blue-600 font-bold px-2">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </>
            )}
            {view === "success" && (
              <div className="flex flex-col justify-center items-center text-center py-10">
                <RiCheckboxCircleFill size={"150"} className="text-teal-600" />

                <p className="mt-6">
                  An email containing the password reset link has been sent to
                  the email address registered to {watch().email}.
                </p>
                <Link to="/login/buyer">
                  <button className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 mt-10 px-4 rounded-full focus:outline-none focus:shadow-outline w-full">
                    Back to login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
