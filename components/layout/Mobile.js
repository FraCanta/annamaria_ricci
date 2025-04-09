import React from "react";
import AnimatedLine from "../AnimatedLine/AnimatedLine";
import Image from "next/image";

const Mobile = () => {
  return (
    <>
      <div className="w-[95%] mx-auto py-4 flex items-center justify-between md:hidden ">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo_annamaria.svg"
            alt="Logo"
            width={100}
            height={93}
          />
        </div>
      </div>
      <div className="w-[95%] mx-auto">
        <AnimatedLine />
      </div>
    </>
  );
};

export default Mobile;
