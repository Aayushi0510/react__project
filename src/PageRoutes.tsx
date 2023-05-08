import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardWrapper from "./Pages/Dashboard/DashboardWrapper";

const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardWrapper/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
