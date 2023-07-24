import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GuestLayout = () => {
  return (
    <>
      <div className="h-[75px] w-full">
      <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestLayout;
