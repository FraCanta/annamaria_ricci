import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Mobile from "./Mobile";
import LenisScroll from "../LenisScroll/LenisScroll";
import { useRouter } from "next/router";

const Layout = (props) => {
  useEffect(() => {
    // Applicare transizioni dopo il caricamento della pagina
    const items = document.querySelectorAll("li, a.bg-red");

    items.forEach((item, index) => {
      // Attiva la transizione con il delay specifico
      setTimeout(() => {
        item.classList.remove("opacity-0", "translate-y-4");
        item.classList.add("opacity-100", "translate-y-0");
      }, 300 + 50 * index); // Delay dinamico in base all'indice
    });
  }, []); // Applica questa logica solo una volta dopo il primo rendering
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
