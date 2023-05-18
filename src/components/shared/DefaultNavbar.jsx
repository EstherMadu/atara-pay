import React, { useState } from "react";
// import logo from "../../assets/images/logo.svg";
import logo from "../../assets/images/white_logo.svg";

// export default () => {
//   // const [navbar, setNavbar] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // <nav className="w-full fixed top-0 inset-x-0 ">
//     //   <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex pt-4 mb-20">
//     //     <div>
//     //       <div className="flex items-center justify-between md:block">
//     //         <a href="#">
//     //           <img src={logo} alt="" className="w-32 " />
//     //         </a>
//     //         <div className=" md:hidden">
//     //           <button
//     //             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//     //             onClick={() => setNavbar(!navbar)}
//     //           >
//     //             {navbar ? (
//     //               <svg
//     //                 xmlns="http://www.w3.org/2000/svg"
//     //                 className="w-6 h-6"
//     //                 viewBox="0 0 20 20"
//     //                 fill="currentColor"
//     //               >
//     //                 <path
//     //                   fillRule="evenodd"
//     //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//     //                   clipRule="evenodd"
//     //                 />
//     //               </svg>
//     //             ) : (
//     //               <svg
//     //                 xmlns="http://www.w3.org/2000/svg"
//     //                 viewBox="0 0 24 24"
//     //                 fill="none"
//     //                 stroke="currentColor"
//     //                 strokeWidth="2"
//     //                 strokeLinecap="round"
//     //                 strokeLinejoin="round"
//     //               >
//     //                 <path d="M3 12h18M3 6h18M3 18h18"></path>
//     //               </svg>
//     //             )}
//     //           </button>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div>
//     //       <div
//     //         className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//     //           navbar ? "block" : "hidden"
//     //         }`}
//     //       >
//     //         <ul className="items-center bg-white lg:bg-transparent justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-sm ">
//     //           <li>
//     //             <a href="#">0700 TRUSTPAY</a>
//     //           </li>
//     //           <li>
//     //             <a href="#">Login</a>
//     //           </li>
//     //           <li>
//     //             <a href="#">Sign Up</a>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </nav>

//     <nav className=" flex items-center justify-between flex-wrap lg:pt-4 lg:px-12">
//       <div className="flex items-center flex-shrink-0  mr-6 mt-10 lg:mr-96">
//         <img src={logo} className="w-28" alt="Logo" />
//       </div>
//       <div className="block  mt-10 lg:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center px-3 py-2 rounded text-white"
//         >
//           <svg
//             className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//           <svg
//             className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//           </svg>
//         </button>
//       </div>
//       <div
//         className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <div className="text-sm lg:flex-grow">
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
//           >
//             About us
//           </a>
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
//           >
//             Services
//           </a>
//           <a
//             href="#"
//             className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
//           >
//             Solutions
//           </a>
//         </div>
//         <div>
//           <button className="inline-flex items-center mt-10 lg:mt-2 bg-fuchsia-600 rounded border-0 py-2 px-4 text-white">
//             Reach Out
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full fixed top-0 inset-x-0 p-4 z-50">
      <div className="flex items-center justify-between md:block">
        <div className="flex justify-between text-white mx-4 my-4">
          <a href="#">
            <img src={logo} alt="" className="w-28" />
          </a>

          <ul className="hidden lg:flex ml-40">
            <li className="mr-4">Why Escrow?</li>
            <li className="mr-4">Online Merchant</li>
            <li className="mr-4">Integrations</li>
            <li className="mr-4">Pricing</li>
            <li className="mr-4">Help</li>
            <li className="mr-4">Contact us</li>
          </ul>

          <ul className="hidden lg:flex  ">
            <li className="mr-4">0700 TRUSTPAY</li>
            <li className="mr-4">Login</li>
            <li className="mr-4">Sign Up</li>
          </ul>
        </div>

        {/* <div className="lg:hidden ">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div> */}
        <div className="lg:hidden">
          <button
            className="p-2 text-gray-700 rounded-md  focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {navbar && (
            <div className="w-full bg-white py-2">
              <ul className="flex flex-col items-center">
                <li className="text-black py-2">Why Escrow?</li>
                <li className="text-black py-2">Online Merchant</li>
                <li className="text-black py-2">Integrations</li>
                <li className="text-black py-2">Pricing</li>
                <li className="text-black py-2">Help</li>
                <li className="text-black py-2">Contact us</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

{
  /* <nav className="  flex items-center justify-between flex-wrap lg:pt-4 lg:px-8">
      <div className="">
        <img src={logo} className="w-28" alt="Logo" />
      </div>
      <div className="block  mt-10 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            About us
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Solutions
          </a>
        </div>
        <div>
          <button className="inline-flex items-center mt-10 lg:mt-2 bg-fuchsia-600 rounded border-0 py-2 px-4 text-white">
            Reach Out
          </button>
        </div>
      </div>
    </nav> */
}
