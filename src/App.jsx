import React from "react";
import Login from "./page/auth/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./page/auth/SignUp";
import Dashboard from "./page/dashboard/Dashboard";
import Main from "./component/main/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
