import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginRoutes from "./routes/login.routes";
import Homepage from "./pages/homepage/homepage";
import Dashboard from "./pages/dashboard/homepage/main";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login/*" element={<LoginRoutes />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
