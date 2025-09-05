import React from "react";
import Navbar from "./Navbar";
import Mobile from "./Mobile";
import LenisScroll from "../LenisScroll/LenisScroll";
import Footer from "./Footer";
import { useRouter } from "next/router"; // 👈 aggiungi questo

const Layout = (props) => {
  const router = useRouter(); // 👈 inizializza router

  const noLayoutPages = ["/prenota-la-tua-consulenza"];
  const showLayout = !noLayoutPages.includes(router.pathname);

  return (
    <>
      <LenisScroll />
      {showLayout && <Navbar />}
      {showLayout && <Mobile />}
      <main>{props.children}</main>
      {showLayout && <Footer />}
    </>
  );
};

export default Layout;
