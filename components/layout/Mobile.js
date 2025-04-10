import React from "react";
import AnimatedLine from "../AnimatedLine/AnimatedLine";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Mobile = () => {
  return (
    <>
      <div className=" py-4 flex items-center justify-between lg:hidden ">
        <div className="flex items-center ">
          <Image
            src="/assets/logo_annamaria.svg"
            alt="Logo"
            width={95}
            height={93}
            className="w-[95px] h-[50px] md:w-[120px] md:h-[100px]   "
          />
        </div>
        <Icon
          icon="bx:menu-alt-right"
          width="40"
          height="40"
          style={{ color: "#5D2A74" }}
        />
      </div>
      <div className="block lg:hidden">
        <AnimatedLine />
      </div>
    </>
  );
};

export default Mobile;
