import React from "react";
import { Outlet } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

import { heroApi } from "../Data/Data.js";
const Layout = () => {
  return (
    <div>
      <Hero heroApi={heroApi} />
      <div>
        <Outlet />
      </div>
      <Cart />
      <Footer />
    </div>
  );
};

export default Layout;
