import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

function Footer() {
  return (
    <>
      <footer className="my-14 grid grid-cols-1 md:grid-cols-3 gap-10 p-4 lg:p-0">
        <div className="flex flex-col">
          <Link href="/">
            <Image
              src="/assets/logo_annamaria.svg"
              alt="Logo"
              width={120}
              height={113}
            />
          </Link>
          <p className="text-gray100 mt-4">
            Copyright © 2025 Anna Maria Ricci. <br /> Tutti i diritti riservati.
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold mb-2 text-gray100">Menu</h4>
          <ul className="flex flex-col gap-3 leading-none">
            <li
              className="text-gray100 hover:text-gray90 cursor-pointer text-[17px]"
              style={{ transitionDelay: `calc(0.02s * 1 + 0.3s)` }}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="text-gray100 hover:text-gray90  text-[17px]"
              style={{ transitionDelay: `calc(0.02s * 1 + 0.3s)` }}
            >
              <Link href="/">Strumenti</Link>
            </li>
            <li
              className="text-gray100 hover:text-gray90  text-[17px]"
              style={{ transitionDelay: `calc(0.02s * 2 + 0.3s)` }}
            >
              <Link href="/">Percorsi</Link>
            </li>
            <li
              className="text-gray100 hover:text-gray90  text-[17px]"
              style={{ transitionDelay: `calc(0.02s * 3 + 0.3s)` }}
            >
              <Link href="/">Respiro</Link>
            </li>

            <li
              className="text-gray100 hover:text-gray90  text-[17px]"
              style={{ transitionDelay: `calc(0.02s * 4 + 0.3s)` }}
            >
              <Link href="/">Blog</Link>
            </li>
            <li
              className="text-gray100 hover:text-gray90  text-[17px]"
              style={{ transitionDelay: `calc(0.02s * 5 + 0.3s)` }}
            >
              <Link href="/chi-sono">Chi sono</Link>
            </li>
            <li
              className="text-gray100 hover:text-gray90  text-[17px]"
              style={{ transitionDelay: `calc(0.02s * 5 + 0.3s)` }}
            >
              <Link href="/chi-sono">Contatti</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h4 className="font-bold mb-2">Seguimi</h4>
          <a
            href="https://www.facebook.com"
            className="text-gray100 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            className="text-gray100 hover:underline"
          >
            Instagram
          </a>
        </div>
      </footer>
      <AnimatedLineView />
      <div className=" w-full my-6 flex gap-4 flex-wrap justify-between items-center p-4 lg:p-0">
        <p className="text-gray100">
          Made with ❤️ by{" "}
          <Link href="https://www.thallion-dev.it/" target="_blank">
            Thallion dev
          </Link>{" "}
        </p>
        <div className="flex gap-4 text-gray100">
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
