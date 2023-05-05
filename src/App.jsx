import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpBuyer from "./pages/SignUpBuyer";
import SignUpSeller from "./pages/SignUpSeller";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./pages/Otp";
import LoginBuyer from "./pages/LoginBuyer";
import LoginSeller from "./pages/LoginSeller";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpBuyer />} />
        <Route path="/signup/seller" element={<SignUpSeller />} />
        <Route path="/login/seller" element={<LoginSeller />} />
        <Route path="/login/buyer" element={<LoginBuyer />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default App;
