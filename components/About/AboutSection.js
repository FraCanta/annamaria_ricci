import React from "react";
import VerticalAnimatedLine from "../AnimatedLine/VerticalAnimatedLine";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 justify-between h-full py-4 items-center">
        <div className="w-full md:w-[60%] h-full flex flex-col justify-center order-last md:order-first gap-4 md:gap-10 py-10">
          <h2 className="font-abhaya font-regular text-[38px] md:text-[48px] lg:text-[58px] leading-none text-gray90 text-center lg:text-start">
            “Ogni orientamento presuppone <br />
            un disorientamento”
          </h2>
          <p className="font-abhaya font-bold text-base md:text-[25px] leading-none text-gray100 text-center lg:text-start">
            Hans Magnus Enzensberger
          </p>
        </div>
        <div className="hidden md:block h-[350px] items-center">
          <VerticalAnimatedLine />
        </div>
        <div className="px-10 md:hidden bloc w-[400px] k order-2">
          <AnimatedLineView />
        </div>

        <div className="w-full md:w-[40%] h-full flex flex-col gap-10 order-first md:order-last p-2 lg:p-10">
          <h2 className="font-abhaya font-bold text-[38px] md:text-[48px]  leading-none text-gray100 ">
            Su di me
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-work font-regular text-[38px] md:text-[48px] leading-none text-purple100 ">
                800+
              </h3>
              <p className="font-work font-regular text-base leading-none text-gray90 ">
                ore di orientamento specialistico
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-work font-regular text-[38px] md:text-[48px] leading-none text-purple100 ">
                2900+
              </h3>
              <p className="font-work font-regular text-base leading-none text-gray90 ">
                ore di Head Hunting, ricerca e selezione del personale
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-work font-regular text-[38px] md:text-[48px] leading-none text-purple100 ">
                14+
              </h3>
              <p className="font-work font-regular text-base leading-none text-gray90 ">
                anni di attività di counseling, respiro consapevole e rebirth
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-work font-regular text-[38px] md:text-[48px] leading-none text-purple100 ">
                37+
              </h3>
              <p className="font-work font-regular text-base leading-none text-gray90">
                anni di esperienza lavorativa in piccole-medie-grandi aziende
              </p>
            </div>
          </div>
        </div>
      </div>
      <AnimatedLineView />
    </>
  );
};

export default AboutSection;
