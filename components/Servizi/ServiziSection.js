import React from "react";
import VerticalAnimatedLine from "../AnimatedLine/VerticalAnimatedLine";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ServiziSection = () => {
  const items = [
    {
      title: "Counseling",
      text: "Ti ascolto in modo empatico in modo empatico e attivo, senza giudizio. Il mio approccio è influenzato anche dalla mia pratica in meditazione, comunicazione non violenta, respirazione circolare consapevole.",
      icon: "/assets/couns.svg",
    },
    {
      title: "Rebirth Original",
      text: "Sessioni utili per vivere una ri-nascita interiore grazie al respiro circolare consapevole amorevole, unico, rispettoso.",
      icon: "/assets/rebirth.svg",
    },
    {
      title: "Orientamento Professionale",
      text: "Ti aiuto a valorizzare le tue competenze, trovare o cambiare lavoro, prepararti ai colloqui e accompagnarti fino all'inserimento, con un approccio tradizionale e/o olistico.",
      icon: "/assets/orient.svg",
    },
    {
      title: "Formazione",
      text: "Offro corsi di Respirazione Circolare Consapevole, ricerca attiva del lavoro, creazione CV in vari formati, percorsi personalizzati per il benessere e supporto per startup della libera professione.",
      icon: "/assets/form.svg",
    },
    {
      title: "Consulenze Aziendali",
      text: "Supporto per dipendenti, career counseling, orientamento, politiche attive, tutoraggio, ricerca e selezione, head hunting, design thinking olistico e scouting per tirocini.",
      icon: "/assets/az.svg",
    },
    {
      title: "Psicogenealogia junghiana®",
      text: "Albero genealogico delle professioni.",
      icon: "/assets/gene.svg",
    },
  ];

  const grouped = [items.slice(0, 2), items.slice(2, 4), items.slice(4, 6)];
  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-between lg:h-screen 2xla:h-[80vh] my-10 items-center">
      <div className="w-full xl:w-[60%] h-full order-last xl:order-first gap-4 md:gap-10 ">
        <div className="h-full flex flex-col justify-between ">
          {grouped.map((pair, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex h-full flex-col md:flex-row md:items-start md:justify-between gap-8 py-10 px-2 md:p-4 md:py-10">
                <div className="flex-1 flex items-start gap-4">
                  <Image
                    src={pair[0].icon}
                    alt=""
                    width={50}
                    height={50}
                    className="w-8 h-8 2xl:w-12 2xl:h-12 shrink-0"
                  />
                  <div>
                    <h3 className="text-[25px] 2xl:text-[32px]  font-abhaya font-bold text-gray100 leading-none">
                      {pair[0].title}
                    </h3>
                    <p className="mt-2 text-sm text-gray90">{pair[0].text}</p>
                  </div>
                </div>

                {/* LINEA CENTRALE */}
                <div className="hidden md:flex justify-center items-center px-4 h-[150px]">
                  <VerticalAnimatedLine />
                </div>
                <div className="md:hidden flex justify-center items-center px-10 w-full ">
                  <AnimatedLineView />
                </div>

                <div className="flex-1 flex items-start gap-4">
                  <Image
                    width={50}
                    height={50}
                    src={pair[1].icon}
                    alt=""
                    className="w-8 h-8 2xl:w-12 2xl:h-12 shrink-0"
                  />
                  <div>
                    <h3 className="text-[25px] 2xl:text-[32px] font-abhaya font-bold text-gray100 leading-none">
                      {pair[1].title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">{pair[1].text}</p>
                  </div>
                </div>
              </div>

              {/* LINEA ORIZZONTALE SOTTO LE RIGHE (non per l’ultima) */}
              {i < grouped.length - 1 && (
                <div className="w-full">
                  <AnimatedLineView />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden xl:flex h-full items-center">
        <VerticalAnimatedLine />
      </div>
      <div className="px-10 xl:hidden block w-full order-2">
        <AnimatedLineView />
      </div>

      <div className="w-full xl:w-[40%] h-full flex flex-col justify-between order-first xl:order-last p-2">
        <div>
          <h2 className="font-abhaya font-bold text-[30px] md:text-[38px] 2xl:text-[48px] leading-none text-gray100">
            Servizi personalizzati per il tuo benessere e sviluppo professionale
          </h2>

          <p className="font-work font-regular text-base md:text-[18px] text-gray90 my-6 flex-grow flex items-center">
            Offro un'ampia gamma di servizi pensati per il benessere individuale
            e professionale, da sessioni di counseling empatico a percorsi di
            orientamento professionale, fino a consulenze aziendali
            personalizzate. Ogni servizio è progettato per rispondere alle tue
            esigenze specifiche, promuovendo una crescita consapevole e
            orientata al futuro.
          </p>
        </div>

        <Link
          href="/"
          className="bg-purple100 text-white px-4 py-4 rounded-sm  transition duration-200 max-w-max uppercase flex items-center gap-2"
        >
          i miei servizi{" "}
          <Icon icon="lets-icons:arrow-right-light" width="24" height="24" />
        </Link>
      </div>
    </div>
  );
};

export default ServiziSection;
