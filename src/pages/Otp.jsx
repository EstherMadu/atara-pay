import React from "react";
import DefaultLayout from "../components/shared/DefaultLayout";
import waves from "../assets/images/waves.svg";

const Otp = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen">
        <section className="flex items-center justify-center mt-40">
          <div className="text-center">
            <h2 className="text-center text-4xl text-blue-600 font-bold ">
              Verify your Phone Number
            </h2>
            <p className="py-8 text-lg font-medium tracking-wide w-96 lg:w-full mx-auto lg:mx-0">
              Click on 'Request OTP' to get an OTP sent to your phone. Use this
              for verification
            </p>

            <button
              className="bg-transparent border border-blue-300 text-black py-3 px-6 rounded-2xl focus:outline-none focus:shadow-outline w-96"
              type="submit"
            >
              Enter OTP Here
            </button>
            <div className="grid lg:grid-cols-2 items-center justify-center my-8">
              <button
                className="bg-blue-600  text-white py-4 rounded-full focus:outline-none focus:shadow-outline w-72 mb-4 lg:mb-0"
                type="submit"
              >
                SUBMIT
              </button>
              <button
                className="bg-blue-600  text-white py-4 rounded-full focus:outline-none focus:shadow-outline w-72"
                type="submit"
              >
                REQUEST OTP
              </button>
            </div>
          </div>
        </section>
        <footer className="sticky bottom-0 mt-auto">
          <img
            src={waves}
            alt="waves"
            className="footer_img relative bottom-0 w-full"
          />
        </footer>
      </div>
    </DefaultLayout>
  );
};

export default Otp;
