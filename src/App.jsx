import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpBuyer from "./pages/SignUpBuyer";
import SignUpSeller from "./pages/SignUpSeller";
import ForgotPassword from "./pages/ForgotPasswordBuyer";
import ForgotPasswordSeller from "./pages/ForgotPasswordSeller";
import Otp from "./pages/Otp";
import LoginBuyer from "./pages/LoginBuyer";
import LoginSeller from "./pages/LoginSeller";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpBuyer />} />
        <Route path="/signup/seller" element={<SignUpSeller />} />
        <Route path="/login/seller" element={<LoginSeller />} />
        <Route path="/login/buyer" element={<LoginBuyer />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot/buyer" element={<ForgotPassword />} />
        <Route path="/forgot/seller" element={<ForgotPasswordSeller />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
