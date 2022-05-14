import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import HomePages from "../pages/HomePage";
import JobDetail from "./JobDetail";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePages num1={0} num2={5} />} />
      <Route path="/1" element={<HomePages num1={0} num2={5} />} />
      <Route path="/2" element={<HomePages num1={5} num2={10} />} />
      <Route path="/3" element={<HomePages num1={10} num2={15} />} />
      <Route path="/job/:id" element={<JobDetail />} />
    </RouterRoutes>
  );
};

export default Routes;

/* "/?page=2" HomePage
   "/job/:id" JobCard
   "/login" Login

*/
