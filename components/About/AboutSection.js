import React from "react";
import VerticalAnimatedLine from "../AnimatedLine/VerticalAnimatedLine";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-6 justify-between h-full my-10 items-center">
        {/* <div className="w-full xl:w-[60%] h-full flex flex-col justify-center order-last xl:order-first gap-4 md:gap-10 py-10">
          <h2 className="font-abhaya font-regular text-[38px] md:text-[48px] 2xl:text-[4vw] leading-none text-gray90 text-center lg:text-start">
            “Ogni orientamento presuppone <br />
            un disorientamento”
          </h2>
          <p className="font-abhaya font-bold text-base md:text-[24px] leading-none text-gray100 text-center lg:text-start">
            Hans Magnus Enzensberger
          </p>
        </div>
        <div className="hidden xl:block h-[350px] items-center">
          <VerticalAnimatedLine />
        </div> */}
        {/* <div className="px-10 xl:hidden block w-full order-2"> */}
        {/* <AnimatedLineView /> */}
        {/* </div> */}

        <div className="w-full  h-full flex flex-col justify-center gap-10 order-first xl:order-last p-2 md:p-6 lg:p-10">
          <h2 className="font-abhaya font-bold text-[30px] md:text-[38px] 2xl:text-[4vw] text-center leading-none text-gray100 ">
            Il mio background
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="font-work font-regular text-[26px] md:text-[38px] 2xl:text-[48px] leading-none text-purple100 ">
                1000+
              </h3>
              <p className="font-work font-regular text-center text-[13px] md:text-base leading-none text-gray90 ">
                ore di orientamento specialistico
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="font-work font-regular text-[26px] md:text-[38px] 2xl:text-[48px] leading-none text-purple100 ">
                2900+
              </h3>
              <p className="font-work text-center font-regular text-[13px] md:text-base leading-none text-gray90 ">
                ore di Head Hunting, ricerca e selezione del personale
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="font-work font-regular text-[26px] md:text-[38px] 2xl:text-[48px] leading-none text-purple100 ">
                14+
              </h3>
              <p className="font-work  text-center font-regular text-[13px] md:text-base leading-none text-gray90 ">
                anni di attività di counseling, respiro consapevole e rebirthing
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h3 className="font-work font-regular text-[26px] md:text-[38px] 2xl:text-[48px] leading-none text-purple100 ">
                37+
              </h3>
              <p className="font-work text-center font-regular text-[13px] md:text-base leading-none text-gray90">
                anni di esperienza lavorativa in piccole-medie-grandi aziende
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
