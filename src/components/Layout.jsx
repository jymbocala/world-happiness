import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col py-12 px-8 mx-auto w-full max-w-screen-xl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
