import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../layout/Button";
import ButtonOutline from "../layout/ButtonOutline";

const Banner = ({ title, text, address, book, contact }) => {
  return (
    <div className="flex flex-col justify-between h-full bg-third/20 my-20">
      <div className="grid items-center w-full gap-2 xl:grid-cols-2 bg-gray80/30">
        <div className="relative w-full h-full aspect-video">
          <Image
            src="/assets/banner.jpg"
            alt="contact image"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="flex flex-col gap-6 w-[90%] lg:w-[80%] mx-auto py-10 ">
          <div>
            <h2 className="font-abhaya font-bold text-[28px] md:text-[48px] leading-none text-gray100 ">
              Vuoi lavorare con me?
            </h2>
          </div>
          <p className="font-work font-regular text-md md:text-[18px] text-gray90 flex-grow flex items-center">
            Se cerchi una collaborazione autentica e trasformativa, sei nel
            posto giusto.
          </p>
          <ul className="list-disc pl-6 font-work font-regular text-md md:text-[18px] text-gray90">
            <li>Uno spazio di ascolto sincero e non giudicante</li>
            <li>Un percorso di cambiamento ed evoluzione consapevole</li>
            <li>Un’esperienza professionale che valorizza chi sei</li>
          </ul>

          <div className="flex flex-wrap gap-6">
            <Button href="/prenota-la-tua-consulenza">Prenota una call</Button>
            <ButtonOutline
              href="/contatti"
              title="Contattami e parliamo insieme del tuo progetto"
              className="button-main"
            >
              Scrivimi una email
            </ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
