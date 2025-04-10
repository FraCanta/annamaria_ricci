import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroHome = () => {
  return (
    <div className="h-screen md:h-[calc(100vh-90px)] w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full py-4 items-center">
        <div className="w-full lg:w-[55%] py-4 flex flex-col gap-4 lg:gap-10">
          <h1 className="font-abhaya font-bold text-[35px] md:text-[60px] 2xla:text-[75px] leading-none text-gray100 ">
            La passione mi ha portato qui. Sono convinta che un lavoro non sia
            solo un lavoro.
          </h1>
          <h2 className="font-abhaya font-bold text-[35px] md:text-[60px] 2xla:text-[75px] leading-none text-gray90 ">
            È chi sei tu. <br /> E ne ho le prove.
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center">
            <div className="flex gap-4 lg:gap-10 items-center">
              <Link
                href="/"
                className="bg-purple100 text-sm text-white px-[18px] py-[16px] rounded-sm  transition duration-200 max-w-max uppercase flex items-center gap-2"
              >
                sei un'azienda?
                <Icon
                  icon="lets-icons:arrow-right-light"
                  width="24"
                  height="24"
                />
              </Link>
              <p className="font-abhaya uppercase text-base">oppure</p>
            </div>
            <Link
              href="/"
              className="border border-purple100 text-sm text-purple100 px-[18px] py-[16px] rounded-sm  transition duration-200 max-w-max uppercase flex items-center gap-2"
            >
              sei un professionista?
              <Icon
                icon="lets-icons:arrow-right-light"
                width="24"
                height="24"
              />
            </Link>
          </div>
        </div>
        <div className="bg-gray80 w-full lg:w-[40%] h-full relative flex justify-end">
          <Image
            src="/assets/annamaria_foto.png"
            alt="Hero"
            fill
            className="md:w-[800px] h-full w-full absolute top-0 right-0 object-contain object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
