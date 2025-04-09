import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Mobile from "./Mobile";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Mobile />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
