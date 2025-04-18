import React, { useState } from "react";
import VerticalAnimatedLine from "../AnimatedLine/VerticalAnimatedLine";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { Icon } from "@iconify/react";

const Reviews = () => {
  const [selectedText, setSelectedText] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Stato per il gruppo di recensioni corrente

  const openModal = (text) => {
    setSelectedText(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedText(null);
    setIsModalOpen(false);
  };

  const items = [
    {
      text: "Ho conosciuto Anna Maria Ricci grazie al corso Gestione Risorse Umane e Recruiting 4.0 di Talentform. Le sue lezioni sono un vero valore aggiunto! La sua capacità di trasmettere conoscenze in modo chiaro e concreto, sempre attenta alle esigenze dei discenti, rende il percorso formativo stimolante e arricchente. Un punto di riferimento prezioso nel mondo delle Risorse Umane!",
      avatar: "/assets/review1.jpeg",
      author: "Alessandra Sica",
      role: "Futura HR Generalist con il cuore nelle relazioni | +10 anni vendite & customer care | AI & Canva lover per progetti HR | Formazione continua | Inglese & Spagnolo | Valorizzo persone e talento.",
    },
    {
      text: "Ho avuto il privilegio di conoscere Anna Maria alcuni anni fa durante la mia esperienza lavorativa in Vodafone. Durante un momento di grande cambiamento nel mio percorso professionale, ho chiesto il suo supporto e sono rimasta positivamente colpita dalla sua professionalità e empatia. Anna Maria ha dimostrato una competenza eccezionale ed è andata ben oltre il semplice supporto pratico che mi aspettavo, sorprendendomi piacevolmente. Ancora oggi, mi accompagna con i suoi consigli professionali e i suoi suggerimenti, che sono di grande valore per me. Sono grata di averla incontrata e di poter continuare a beneficare della sua guida e del suo prezioso supporto. Grazie Anna Maria.",
      avatar: "/assets/review2.jpeg",
      author: "Claudia Tagliaferri",
      role: "Customer Care Specialist & Sale Assistant",
    },
    {
      text: "Ti aiuto a valorizzare le tue competenze, trovare o cambiare lavoro, prepararti ai colloqui e accompagnarti fino all'inserimento, con un approccio tradizionale e/o olistico.",
      avatar: "/assets/review1.jpeg",
      author: "Claudia Tagliaferri",
      role: "Customer Care Specialist & Sale Assistant",
    },
    {
      text: "Offro corsi di Respirazione Circolare Consapevole, ricerca attiva del lavoro, creazione CV in vari formati, percorsi personalizzati per il benessere e supporto per startup della libera professione.",
      avatar: "/assets/review1.jpeg",
      author: "Claudia Tagliaferri",
      role: "Customer Care Specialist & Sale Assistant",
    },
    {
      text: "Supporto per dipendenti, career counseling, orientamento, politiche attive, tutoraggio, ricerca e selezione, head hunting, design thinking olistico e scouting per tirocini.",
      avatar: "/assets/review1.jpeg",
      author: "Claudia Tagliaferri",
      role: "Customer Care Specialist & Sale Assistant",
    },
    {
      text: "Albero genealogico delle professioni.",
      avatar: "/assets/review1.jpeg",
      author: "Claudia Tagliaferri",
      role: "Customer Care Specialist & Sale Assistant",
    },
  ];

  // Paginazione ogni 4
  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
  };

  // Dividere le recensioni visibili in righe da 2
  const rows = [];
  for (let i = 0; i < paginatedItems.length; i += 2) {
    rows.push(paginatedItems.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-between min-h-[70vh] my-20">
      {/* Titolo e controlli */}
      <div className="w-full lg:w-[40%] flex flex-col justify-between">
        <h2 className="font-abhaya font-bold text-[35px] md:text-[48px] 2xl:text-[58px] leading-none text-gray100">
          Siete voi la prova <br /> di ciò che faccio
        </h2>
        <div className="mt-4 flex gap-4">
          {/* Bottone Precedente */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`rounded-full h-10 w-10 flex items-center justify-center transition-colors 
      ${
        currentIndex === 0
          ? "bg-gray80 text-white "
          : "bg-purple100 text-white hover:bg-gray-80 cursor-pointer"
      }
    `}
          >
            <Icon
              icon="lets-icons:arrow-left-light"
              width="24"
              height="24"
              className="transition-transform duration-300"
            />
          </button>

          {/* Bottone Successivo */}
          <button
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
            className={`rounded-full h-10 w-10 flex items-center justify-center transition-colors 
      ${
        currentIndex === totalPages - 1
          ? "bg-gray80 text-white "
          : "bg-purple100 text-white hover:bg-gray-80 cursor-pointer"
      }
    `}
          >
            <Icon
              icon="lets-icons:arrow-right-light"
              width="24"
              height="24"
              className="transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      {/* Linea per layout responsive */}
      <div className="hidden lg:flex items-center justify-between min-h-[70vh]">
        <VerticalAnimatedLine />
      </div>
      <div className="px-10 lg:hidden block w-full order-2">
        <AnimatedLineView />
      </div>

      {/* Recensioni: 2 colonne per riga, 2 righe max (4 totali) */}
      <div className="w-full lg:w-[60%] flex flex-col  gap-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-8">
              {row.map((item, i) => (
                <React.Fragment key={i}>
                  <div className="flex-1 flex flex-col items-start gap-4 py-6 px-2">
                    <p className="text-sm text-gray90 line-clamp-4">
                      {item.text}
                    </p>
                    <button
                      className="text-xs text-primary underline"
                      onClick={() => openModal(item.text)}
                    >
                      Leggi tutto
                    </button>
                    <div className="flex items-start gap-4">
                      <Image
                        src={item.avatar}
                        alt=""
                        width={50}
                        height={50}
                        className="w-8 h-8 2xl:w-12 2xl:h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-[20px] font-abhaya font-bold text-gray100 leading-none">
                          {item.author}
                        </h3>
                        <p className="text-xs text-gray90 mt-2">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Linea verticale tra colonne, solo dopo il primo elemento */}
                  {i === 0 && row.length === 2 && (
                    <div className="hidden md:flex justify-center items-center px-4 h-[150px]">
                      <VerticalAnimatedLine />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Linea orizzontale tra righe (tranne ultima) */}
            {rowIndex < rows.length - 1 && (
              <div className="w-full px-2">
                <AnimatedLineView />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modale */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-sm text-gray90 whitespace-pre-line">
          {selectedText}
        </p>
      </Modal>
    </div>
  );
};

export default Reviews;
