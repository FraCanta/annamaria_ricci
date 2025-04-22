import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import HeroAbout from "@/components/layout/HeroAbout";
import Head from "next/head";
import React from "react";

function ChiSono() {
  return (
    <>
      <Head>
        <title>Chi Sono - Anna Maria Ricci</title>
      </Head>

      <HeroAbout />
      <AnimatedLineView />
      <div className="min-h-screen mt-20 relative mb-20 lg:mb-10"></div>
      <div className="min-h-screen mt-20 relative mb-20 lg:mb-10"></div>
    </>
  );
}

export default ChiSono;
