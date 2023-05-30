import React, { useState } from "react";
//import logo from "../assets/images/white_logo.svg";
import men from "../assets/images/men-building.svg";
import waves from "../assets/images/waves.svg";
import dots from "../assets/images/dots.svg";
import layers from "../assets/images/layers.svg";
import DefaultNavbar from "../components/shared/DefaultNavbar";

const NotFound = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <>
      <main className="bg-[url(../images/background-img.svg)] bg-no-repeat bg-cover bg-center h-screen overflow-hidden relative">
        <img src={dots} class="fixed top-0 left-0 w-full z-20" />
        <img
          src={layers}
          class="fixed top-0 left-0 z-10 opacity-50 w-11/12 hidden md:block"
        />
        <DefaultNavbar />
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-10 relative z-50">
          <div className="grid items-center justify-center">
            <img src={men} alt="" className="pt-16 w-[400px] md:w-[600px]" />
            <h2 className="mx-auto py-10 mt-6 text-5xl md:text-5xl font-bold text-white">
              Page Not Found
            </h2>
          </div>
        </section>
        <img
          src={waves}
          alt="waves"
          className="absolute left-0 bottom-0 w-full z-50"
        />
      </main>
    </>
  );
};

export default NotFound;
