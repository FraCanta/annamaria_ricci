import Image from "next/image";
import React from "react";

const HeroHome = () => {
  return (
    <div className="h-screen md:h-[calc(100vh-90px)] w-full">
      <div className="flex flex-col md:flex-row justify-between w-full h-full py-4">
        <div className="w-full md:w-[55%] py-4">
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
