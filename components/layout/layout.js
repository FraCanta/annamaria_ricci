import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Mobile from "./Mobile";
import LenisScroll from "../LenisScroll/LenisScroll";
import Footer from "./Footer";
import AdvertBanner from "../Banner/AdvertBanner";

const Layout = (props) => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Mobile />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
