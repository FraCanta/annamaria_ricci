import React from "react";
import VerticalAnimatedLine from "../AnimatedLine/VerticalAnimatedLine";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 justify-between h-full py-4">
        <div className="w-full md:w-[60%] h-full flex items-center order-last md:order-first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at justo
          sodales, consectetur lorem eget, accumsan nisl. Aliquam mattis
          hendrerit ligula, sed vulputate quam porta ut. Suspendisse id
          elementum risus, ac consectetur libero. Integer erat ligula, facilisis
          a velit eu, accumsan porta ante. Vestibulum tempus urna at quam
          pharetra, accumsan fermentum ligula fringilla. Vestibulum orci ligula,
          sodales eu nunc et, fermentum pellentesque erat. Suspendisse interdum
          non arcu id gravida. Nullam efficitur sed lorem quis facilisis. Donec
          eget erat vitae neque facilisis tincidunt.
        </div>
        <div className="py-6 hidden md:block">
          <VerticalAnimatedLine />
        </div>
        <div className="px-10 md:hidden block order-2">
          <AnimatedLineView />
        </div>

        <div className="w-full md:w-[40%] h-full flex items-center order-first md:order-last">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at justo
          sodales, consectetur lorem eget, accumsan nisl. Aliquam mattis
          hendrerit ligula, sed vulputate quam porta ut. Suspendisse id
          elementum risus, ac consectetur libero. Integer erat ligula, facilisis
          a velit eu, accumsan porta ante. Vestibulum tempus urna at quam
          pharetra, accumsan fermentum ligula fringilla. Vestibulum orci ligula,
          sodales eu nunc et, fermentum pellentesque erat. Suspendisse interdum
          non arcu id gravida. Nullam efficitur sed lorem quis facilisis. Donec
          eget erat vitae neque facilisis tincidunt.
        </div>
      </div>
      <AnimatedLineView />
    </>
  );
};

export default AboutSection;
