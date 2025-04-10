import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Mobile from "./Mobile";
import LenisScroll from "../LenisScroll/LenisScroll";

const Layout = (props) => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Mobile />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
