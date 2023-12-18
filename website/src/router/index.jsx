import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import React from "react"

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} /> */}
    </Routes>
  );
};