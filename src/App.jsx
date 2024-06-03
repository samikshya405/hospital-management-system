import React from "react";
import Login from "./page/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
