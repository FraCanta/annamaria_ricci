import Image from "next/image";
import React from "react";

const HeroHome = () => {
  return (
    <div className="h-screen md:h-[calc(100vh-90px)] w-full">
      <div className="flex flex-col md:flex-row justify-between w-full h-full py-4 items-center">
        <div className="w-full md:w-[55%] py-4 flex flex-col gap-10">
          <h1 className="font-abhaya font-bold text-[40px] md:text-[75px] leading-none text-gray100 ">
            La passione mi ha portato qui. Sono convinta che un lavoro non sia
            solo un lavoro.
          </h1>
          <h2 className="font-abhaya font-bold text-[40px] md:text-[75px] leading-none text-gray90 ">
            È chi sei tu. <br /> E ne ho le prove.
          </h2>
        </div>
        <div className="bg-gray80 w-full md:w-[40%] h-full relative flex justify-end">
          <Image
            src="/assets/annamaria_foto.png"
            alt="Hero"
            fill
            className="h-full w-full absolute top-0 right-0 object-contain object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
