import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/login";
import ForgotPassword from "../pages/login/forgot-password";
import ResetPassword from "../pages/login/reset-password";

const LoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default LoginRoutes;
