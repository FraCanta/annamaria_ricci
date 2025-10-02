import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Dati recensioni (i tuoi)
const reviewsData = [
  {
    text: "Raramente scrivo recensioni, ma Anna Maria merita tutta la mia gratitudine. E' la professionista di cui si ha bisogno, quando navighi nell'intricatissimo e contorto mondo del lavoro, quando senti di voler gettare la spugna, che non vali niente, che ci sarà sempre qualcuno più avanti e piu' bravo di te. E' stata in grado di aiutarmi con il suo particolare approccio gentile ma deciso, e quando non vedevo più speranza nel futuro. La consiglio veramente a tutti. Vi svolta la vita!",
    author: "Patrizia Olivieri",
    role: "Event Manager, Gestione del Personale, Sales",
    service: "Coaching per lo sviluppo professionale",
    date: "7 luglio 2025",
    rating: 5,
  },
  {
    text: "Esperienza molto positiva, staff cordiale e disponibile.",
    author: "Claudia Tagliaferri",
    role: "Customer Care Specialist & Sales Assistant",
    service: "Stesura CV",
    date: "29 aprile 2025",
    rating: 5,
  },
  {
    text: "Ho conosciuto Anna Maria Ricci grazie al corso Gestione Risorse Umane e Recruiting 4.0 di Talentform. Le sue lezioni sono un vero valore aggiunto! La sua capacità di trasmettere conoscenze in modo chiaro e concreto, sempre attenta alle esigenze dei discenti, rende il percorso formativo stimolante e arricchente. Un punto di riferimento prezioso nel mondo delle Risorse Umane!",
    author: "Alessandra Sica",
    role: "HR Generalist con il cuore nelle relazioni | +10 anni vendite & customer care | AI & Canva lover per progetti HR | Formazione continua | Inglese & Spagnolo | Valorizzo persone e talento.",
    service: "Corso Gestione Risorse Umane e Recruiting 4.0",
    date: "23 marzo 2025",
    rating: 5,
  },
  {
    text: "Ho avuto la fortuna di conoscere Anna Maria in un periodo particolarmente duro e buio della mia vita professionale, una mia carissima amica mi ha indirizzato a lei e mi ha aiutata ad orientarmi nella scelta di un nuovo percorso lavorativo. Mi ha seguita e supportata con grande impegno ed empatia, mi ha guidata nella ricerca del lavoro e nei colloqui facendomi sempre sentire la sua presenza. È una persona splendida ed una professionista molto valida, sempre pronta a proporre nuove idee e a confortare, se serve. È grazie al suo insegnamento se sono riuscita ad intraprendere una nuova strada.",
    author: "Chiara Fattorini",
    role: "Impiegata d'ufficio e logistica / Gestione clienti e fornitori",
    service: "Ricerca nuovo lavoro",
    date: "2 settembre 2023",
    rating: 5,
  },
];

// Funzione helper per le stelle
const renderStars = (rating, size = "w-4 h-4") => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <div className="flex items-center">
      {[...Array(full)].map((_, i) => (
        <Icon
          key={`full-${i}`}
          icon="mdi:star"
          className={`${size} text-yellow-500`}
        />
      ))}
      {half === 1 && (
        <Icon icon="mdi:star-half-full" className={`${size} text-yellow-500`} />
      )}
      {[...Array(empty)].map((_, i) => (
        <Icon
          key={`empty-${i}`}
          icon="mdi:star-outline"
          className={`${size} text-gray-300`}
        />
      ))}
    </div>
  );
};

function ReviewCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 220; // Limite caratteri prima di clamp

  const isLong = item.text.length > maxChars;
  const displayedText = expanded ? item.text : item.text.slice(0, maxChars);

  return (
    <div className="bg-white/70 p-6 shadow-sm">
      {/* Nome + Ruolo */}
      <h3 className="font-semibold text-gray100">{item.author}</h3>
      <p className="text-sm text-gray100">{item.role}</p>

      {/* Servizio */}
      {item.service && (
        <div className="mt-2 inline-block bg-gray80 text-gray100 text-sm font-medium px-3 py-1 rounded-full">
          {item.service}
        </div>
      )}

      {/* Rating + Data */}
      <div className="flex items-center mt-3 text-sm text-gray100">
        {renderStars(item.rating, "w-5 h-5")}
        <span className="ml-2 font-semibold">{item.rating.toFixed(1)}</span>
        <span className="mx-2">·</span>
        <span>{item.date}</span>
      </div>

      {/* Testo recensione */}
      <p className="mt-3 text-gray90 leading-relaxed">
        {displayedText}
        {!expanded && isLong && "..."}
      </p>

      {/* Pulsante Leggi di più/meno */}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-purple100 font-medium hover:underline"
        >
          {expanded ? "Leggi di meno" : "Leggi di più"}
        </button>
      )}
    </div>
  );
}

export default function Reviews({ reviews = reviewsData }) {
  const totalReviews = reviews.length;
  const avgRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews || 0;

  return (
    <div className="space-y-10">
      {/* Riepilogo generale */}
      <div className="bg-white/70 rounded-lg p-6">
        <h2 className="text-xl font-semibold">Recensioni</h2>
        <div className="flex items-center mt-2">
          <p className="text-3xl font-bold">{avgRating.toFixed(1)}</p>
          <span className="ml-1 text-lg text-gray-500">di 5</span>
        </div>
        <div className="flex items-center mt-1">
          {renderStars(avgRating, "w-5 h-5")}
          <span className="ml-2 text-sm text-gray-500">
            ({totalReviews} recensioni)
          </span>
        </div>
      </div>

      {/* Lista recensioni */}
      <div className="space-y-6">
        {reviews.map((item, i) => (
          <ReviewCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
