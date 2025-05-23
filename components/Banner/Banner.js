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
        <div className="flex flex-col gap-6 w-[90%] lg:w-[80%] mx-auto py-10 ">
          <div>
            <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] leading-none text-gray100 ">
              Vuoi lavorare con me?
            </h2>
          </div>
          <p className="font-work font-regular text-base md:text-[18px] text-gray90 flex-grow flex items-center">
            Se cerchi una collaborazione autentica e trasformativa, sei nel
            posto giusto.
          </p>
          <ul className="list-disc pl-6 font-work font-regular text-base md:text-[18px] text-gray90">
            <li>Uno spazio di ascolto sincero e non giudicante</li>
            <li>Un percorso di cambiamento ed evoluzione consapevole</li>
            <li>Un’esperienza professionale che valorizza chi sei</li>
          </ul>

          <div className="flex flex-wrap gap-6">
            {/* <Link
              href="https://calendly.com/thallion-dev-info/call"
              target="_blank"
              title="Prenota una call con me e parliamo insieme del tuo progetto"
              className="button-main"
            >
              <div className="button-circ-wrap">
                <div className="button-content">
                  <div
                    className="button-circ-bg"
                    style={{
                      height: "42px",
                      width: "2.625rem",
                    }}
                  >
                    <Icon
                      icon="guidance:left-arrow"
                      className="text-[1.5rem] text-first"
                    />
                  </div>
                  <span className="px-2">{book}</span>
                </div>
              </div>
            </Link> */}
            <Button href="https://calendly.com/thallion-dev-info/call">
              Prenota una call
            </Button>
            <ButtonOutline
              href="mailto:info@thallion-dev.it"
              target="_blank"
              title="Contattami e parliamo insieme del tuo progetto"
              className="button-main"
            >
              Scrivimi
            </ButtonOutline>
          </div>
        </div>
        <div className="relative w-full h-full aspect-video">
          <Image
            src="/assets/banner.jpg"
            alt="contact image"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
