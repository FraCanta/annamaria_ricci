import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedLine from "../AnimatedLine/AnimatedLine";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

const Navbar = () => {
  return (
    <>
      <div className="py-4 lg:flex items-center justify-between hidden ">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo_annamaria.svg"
            alt="Logo"
            width={120}
            height={93}
          />
        </div>
        <ul className="flex items-center gap-10 capitalize text-lg">
          <li className=" text-gray-700 hover:text-gray-900 cursor-pointer">
            <Link href="/">Servizi e percorsi</Link>
          </li>
          <li className=" text-gray-700 hover:text-gray-900 cursor-pointer">
            <Link href="/">Chi sono</Link>
          </li>
          <li className=" text-gray-700 hover:text-gray-900 cursor-pointer">
            <Link href="/">Respiro</Link>
          </li>
          <li className=" text-gray-700 hover:text-gray-900 cursor-pointer">
            <Link href="/">Blog</Link>
          </li>
          <li className=" text-gray-700 hover:text-gray-900 cursor-pointer">
            <Link href="/">Contatti</Link>
          </li>
          <li>
            <Link
              href="/"
              className="bg-red text-white px-4 py-4 rounded-sm text-base  transition duration-200 uppercase"
            >
              Hai bisogno di aiuto?
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <AnimatedLine />
      </div>
    </>
  );
};

export default Navbar;
