import React from "react";
// import StepsContact from "../components/StepsContact/StepsContact";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Head from "next/head";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import StepsContact from "@/components/StepsContact/StepsContact";

const prenotaConsulenza = () => {
  return (
    <div className="content">
      <Head>
        <title>Prenota la tua consulenza - Anna Maria Ricci</title>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#204e59" />
      </Head>
      <nav className="px-4 py-6 ">
        <div className="container flex items-center justify-between w-full mx-auto">
          <div className="hidden lg:block"></div>
          <Image
            src="/assets/logo_annamaria.svg"
            alt="Logo"
            width={120}
            height={113}
          />
          <Link href="/">
            <Icon
              icon="material-symbols-light:exit-to-app-sharp"
              width="2.5rem"
              height="2.5rem"
              className="text-gray100"
            />
          </Link>
        </div>
      </nav>
      <AnimatedLineView />
      <div className="flex flex-col items-center w-full h-screen py-10">
        <StepsContact />
      </div>
    </div>
  );
};

export default prenotaConsulenza;

// export async function getStaticProps({ params, locale }) {
//   let obj;
//   switch (locale) {
//     case "it":
//       obj = progettoIT;
//       break;

//     case "en":
//       obj = progettoEN;
//       break;
//     default:
//       obj = progettoIT;
//       break;
//   }

//   return {
//     props: {
//       translation: obj?.progetto,
//     },
//     revalidate: 10, // In seconds
//   };
// }
