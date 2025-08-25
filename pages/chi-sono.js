import AccordionItem from "@/components/AccordionItem/AccordionItem";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";
import InfiniteTextScroll from "@/components/InfiniteTextScroller/InfiniteTextScroll";
import Button from "@/components/layout/Button";
import FadeInSection from "@/components/layout/FadeInSection";
import HeroAbout from "@/components/layout/HeroAbout";
import PercorsiSection from "@/components/Percorsi/PercorsiSection";
import Reviews from "@/components/Reviews/Reviews";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function ChiSono() {
  return (
    <>
      <Head>
        <title>Chi Sono - Anna Maria Ricci</title>
      </Head>
      <HeroAbout />
      <AnimatedLineView />
      {/* --- INTRO --- */}
      <FadeInSection delay={50}>
        <div className="w-full  flex flex-col gap-10 my-20">
          <h2 className="font-abhaya font-[400] text-[28px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100 ">
            Tornare alle radici — un filo conduttore che attraversa il mio
            percorso di vita.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between">
              <p className="font-work font-normal text-base md:text-md text-gray90 leading-snug">
                Sono nata in Lombardia, e ho radici Umbre di cui sono molto
                fiera. Vivo in Toscana dal 1999, una terra che amo molto. Sono
                la quarta di sei figli, prima femmina dopo 3 maschi.
              </p>
              <p className="font-work font-normal text-base md:text-md text-gray90 leading-snug">
                Il lavoro per me è sempre stato molto importante, ho infatti
                iniziato da giovanissima, per una forte spinta interiore verso
                la libertà.
              </p>
            </div>
            <p className="font-work font-normal text-base md:text-md text-gray90 leading-snug">
              Amo <span className="font-[600]">profondamente</span>,{" "}
              <span className="font-[600]">imparare</span>,{" "}
              <span className="font-[600]">studiare</span>,{" "}
              <span className="font-[600]">formarmi</span> e condividere ciò che
              imparo e scopro.
              <br />
              Sono una{" "}
              <span className="font-[600]">
                professionista della relazione di aiuto
              </span>
              , specializzata in benessere personale, relazionale, lavoro e
              organizzazioni.
              <br /> Mi occupo di{" "}
              <span className="font-[600]">
                orientamento professionale e scolastico
              </span>
              , <span className="font-[600]">counseling</span>,{" "}
              <span className="font-[600]">respiro circolare consapevole</span>.
              <br />
              Pratico la{" "}
              <span className="font-[600]">comunicazione non violenta</span> e
              la <span className="font-[600]">meditazione sumarah</span>.
            </p>
          </div>
        </div>
      </FadeInSection>
      <AnimatedLineView />
      {/* --- PERCORSO LAVORATIVO --- */}
      <div className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <FadeInSection delay={100}>
              <h2 className="font-abhaya font-bold text-[28px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
                Il mio percorso lavorativo
              </h2>
            </FadeInSection>
          </div>
          <div>
            <FadeInSection delay={100}>
              <AccordionItem title="La mia esperienza nelle aziende">
                <ul className="flex flex-col gap-4 font-work font-normal text-base text-gray90 leading-snug list-disc list-inside">
                  <li>
                    Ho firmato il mio primo contratto nel 1988 in un’azienda di
                    Peschiera Borromeo, città in provincia di Milano.
                  </li>
                  <li>
                    Prima di approdare al Counseling, ho lavorato per 23 anni in
                    piccole, medie e grandi aziende (anche multinazionali),
                    tutte esperienze che porto nel mio cuore e nel mio bagaglio
                    professionale.
                  </li>
                  <li>
                    Ho spaziato dalle vendite al commerciale, al miglioramento
                    processi, alla formazione, fino a gestire +500 persone
                    avendo la responsabilità del loro percorso di carriera e dei
                    risultati operativi di area.
                  </li>
                </ul>
              </AccordionItem>
            </FadeInSection>
            <AnimatedLineView />
            <FadeInSection delay={100}>
              <AccordionItem title="La mia libera professione">
                <ul className="flex flex-col gap-4 font-work font-normal text-base text-gray90 leading-snug list-disc list-inside">
                  <li>Da ottobre 2012 sono una libera professionista.</li>
                  <li>
                    Mi rivolgo a persone singole, liberi professionisti e
                    organizzazioni.
                  </li>
                  <li>
                    Offro consulenze e servizi di orientamento, miglioramento,
                    training ed evoluzione personale e professionale, sia online
                    che in presenza.
                  </li>
                  <li>
                    Dal 2023 sono iscritta ad ASNOR – Associazione Nazionale
                    Orientatori Italiani, con credenziale 1200-2025 ai sensi
                    della Legge 04/2013.
                  </li>
                  <li>
                    Da gennaio 2025 sono socia di Confcommercio di Pistoia e
                    Prato.
                  </li>
                </ul>
              </AccordionItem>
            </FadeInSection>
          </div>
        </div>
      </div>
      <AnimatedLineView />
      {/* --- ESPERIENZA --- */}
      <div className="relative my-20 w-full">
        <FadeInSection delay={50}>
          <Image
            src="/assets/annamaria2.png"
            alt="Hero"
            width={1500}
            height={1500}
            className="w-full lg:h-[80vh] object-cover"
          />
        </FadeInSection>
        <FadeInSection delay={50}>
          <div className="flex justify-end w-full">
            <div className="flex flex-col gap-6 my-10 max-w-5xl w-full font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              <p>
                Ogni <span className="font-[600]">esperienza lavorativa</span>{" "}
                ha aggiunto valore al mio percorso, contribuendo a farmi
                diventare la <span className="font-[600]">professionista</span>{" "}
                che sono oggi. Non c’è stato un ruolo più importante di un
                altro: ognuno ha arricchito la mia
                <span className="font-[600]"> crescita</span>, sia
                nell’immediato che nel tempo.
              </p>
              <p>
                Ciò che ho sempre amato fare – e che continuo a portare avanti –
                è <span className="font-[600]">ascoltare</span>,{" "}
                <span className="font-[600]">supportare</span>,{" "}
                <span className="font-[600]">formare</span>,{" "}
                <span className="font-[600]">creare</span> e{" "}
                <span className="font-[600]">guidare</span> le persone verso un{" "}
                <span className="font-[600]">lavoro</span> più in linea con le
                loro <span className="font-[600]">aspettative</span> e{" "}
                <span className="font-[600]">competenze</span>. Mi occupo anche
                di <span className="font-[600]">analizzare</span> e{" "}
                <span className="font-[600]">ottimizzare</span> processi
                aziendali, <span className="font-[600]">gestire team</span> e{" "}
                <span className="font-[600]">trasferire conoscenze</span>.
              </p>
              <p>
                Oggi il mio <span className="font-[600]">metodo</span> è un
                ponte tra il{" "}
                <span className="font-[600]">
                  mondo del lavoro tradizionale
                </span>
                , fatto di <span className="font-[600]">procedure</span> e{" "}
                <span className="font-[600]">performance</span>, e un approccio
                più <span className="font-[600]">umano</span> e{" "}
                <span className="font-[600]">olistico</span>, basato su{" "}
                <span className="font-[600]">counseling</span>,{" "}
                <span className="font-[600]">ascolto attivo</span> e{" "}
                <span className="font-[600]">comunicazione efficace</span>. Non
                impongo un{" "}
                <span className="font-[600]">modello prestabilito</span>:
                osservo, ascolto e adatto il mio metodo a chi ho di fronte,
                integrando <span className="font-[600]">esperienza</span> e{" "}
                <span className="font-[600]">innovazione</span> per offrire un{" "}
                <span className="font-[600]">supporto su misura</span>.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
      <AnimatedLineView />
      {/* --- COLLABORAZIONI & FORMAZIONE --- */}
      <FadeInSection delay={50}>
        {" "}
        <div className="my-20">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {" "}
            <div className="flex flex-col gap-6">
              {" "}
              <h2 className="font-abhaya font-bold text-[28px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
                {" "}
                Collaborazioni
              </h2>{" "}
            </div>{" "}
            <div className="flex flex-col gap-6 w-full font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              <ul className="flex flex-col gap-4">
                <li>
                  <span className="font-[600]">Dal 2022</span>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      con{" "}
                      <span className="font-[600]">
                        Centro Olistico Spazio Cuore – Terra di Nuova Luce
                      </span>{" "}
                      (Pisa)
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-[600]">Dal 2023</span>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      con <span className="font-[600]">OMNIA scrl</span>{" "}
                      (Pistoia) –{" "}
                      <span className="font-[600]">agenzia formativa</span> del
                      gruppo{" "}
                      <span className="font-[600]">
                        Confcommercio Pistoia e Prato
                      </span>{" "}
                      – <span className="font-[600]">accreditata</span> alla{" "}
                      <span className="font-[600]">Regione Toscana</span> e{" "}
                      <span className="font-[600]">certificata Uniter</span> –
                      percorsi per{" "}
                      <span className="font-[600]">imprese del terziario</span>,{" "}
                      <span className="font-[600]">dipendenti</span> e per chi
                      desidera una professione nei settori di{" "}
                      <span className="font-[600]">commercio</span>,{" "}
                      <span className="font-[600]">turismo</span> e{" "}
                      <span className="font-[600]">servizi</span>.
                    </li>
                    <li>
                      <span className="font-[600]">IM.O.FOR Toscana</span> –
                      società cooperativa costituita nel{" "}
                      <span className="font-[600]">2000</span> che offre servizi
                      di <span className="font-[600]">formazione</span> e{" "}
                      <span className="font-[600]">orientamento</span> a{" "}
                      <span className="font-[600]">
                        Pubbliche Amministrazioni
                      </span>
                      , <span className="font-[600]">aziende</span> e{" "}
                      <span className="font-[600]">cittadini/e</span>.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-[600]">Dal 2025</span>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <span className="font-[600]">Talentform S.p.A.</span> –
                      esperienza <span className="font-[600]">trentennale</span>{" "}
                      nella <span className="font-[600]">formazione</span>,
                      rivolta a{" "}
                      <span className="font-[600]">inoccupati/disoccupati</span>{" "}
                      e al{" "}
                      <span className="font-[600]">
                        personale delle imprese
                      </span>
                      , con l’obiettivo di essere una{" "}
                      <span className="font-[600]">referenza formativa</span>{" "}
                      sul mercato nazionale.
                    </li>
                    <li>
                      <span className="font-[600]">
                        Consorzio Copernico soc. consortile a r.l.
                      </span>{" "}
                      – <span className="font-[600]">agenzia formativa</span>{" "}
                      emanazione della{" "}
                      <span className="font-[600]">CNA di Pisa</span>.
                    </li>
                    <li>
                      <span className="font-[600]">
                        Agenzia Formativa Formatica scarl
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            <div className="flex flex-col gap-6">
              {" "}
              <h2 className="font-abhaya font-bold text-[28px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
                {" "}
                Credenziali
              </h2>{" "}
            </div>{" "}
            <div className="flex flex-col gap-6 w-full font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              <ul className="flex flex-col gap-4">
                <li>
                  <span className="font-[600]">Dal 2025</span>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <span className="font-[600]">Socia</span> di{" "}
                      <span className="font-[600]">
                        Confcommercio Pistoia e Prato
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-[600]">Dal 2023</span>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Iscritta ad <span className="font-[600]">ASNOR</span> (n.{" "}
                      <span className="font-[600]">1200-2025</span>) ai sensi
                      della <span className="font-[600]">Legge 04/2013</span>
                    </li>
                    <li>
                      <span className="font-[600]">Accreditata</span> alla
                      gestione delle{" "}
                      <span className="font-[600]">politiche attive</span>{" "}
                      <span className="font-[600]">Regione Toscana</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-[600]">Dal 2009 al 2016</span>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Iscritta ad{" "}
                      <span className="font-[600]">Assocounseling</span> (n.{" "}
                      <span className="font-[600]">A0072-2009</span>) in ambito{" "}
                      <span className="font-[600]">privato</span>,{" "}
                      <span className="font-[600]">
                        benessere personale e relazionale
                      </span>
                      ,{" "}
                      <span className="font-[600]">
                        lavoro e organizzazioni
                      </span>{" "}
                      ai sensi della{" "}
                      <span className="font-[600]">Legge 04/2013</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
      </FadeInSection>{" "}
      <InfiniteTextScroll />
      <AnimatedLineView />
      <div className="my-10 lg:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeInSection delay={100}>
            <div className="relative h-[50vh] lg:h-[90vh]">
              <Image
                src="/assets/chi_sono3.webp"
                alt="Formazione Professionale"
                fill
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="flex flex-col gap-4">
              <h2 className="font-abhaya font-bold text-[8vw] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
                Un paio di cose che non dico a tutti
              </h2>
              <p className="font-abhaya font-[500] text-[22px] my-1 text-gray100 mb-4">
                ( ma per il mio primo e nuovissimo sito faccio un’eccezione )
              </p>
              <ul className="flex flex-col gap-4 font-work font-normal text-md lg:text-lg  text-gray90 leading-snug list-disc list-inside">
                <li>
                  Amo la politica… del fare e tutte le forme d’arte, infatti la
                  “uso” quando lavoro.
                </li>
                <p>Come?</p>
                <li>
                  Con la scrittura, con i mandala, con la poesia, i collages,
                  fotografia, caviardage, visualboard, brainstorming e molti
                  altri strumenti che decido di volta in volta in base alle
                  esigenze (insomma non posso spoilerare tutto).
                </li>
                <li>
                  Mi sono occupata di Diritti, Doveri e Pari Opportunità per
                  tutti per 16 anni, ricoprendo anche il ruolo di Presidente del
                  Consiglio per le Pari Opportunità di San Giuliano Terme (PI).
                </li>
                <li>Mi piace guidare e viaggiare.</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
      <AnimatedLineView />
      {/* --- PERCORSI --- */}
      <FadeInSection delay={100}>
        {" "}
        <div className="flex justify-between items-center w-full my-10">
          {" "}
          <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 ">
            {" "}
            <h2 className="text-[8vw] lg:text-[4vw] font-abhaya font-bold leading-none text-gray-900">
              {" "}
              I miei percorsi{" "}
            </h2>{" "}
            <Button href="/percorsi">Vedi tutti i percorsi</Button>{" "}
          </div>{" "}
        </div>{" "}
      </FadeInSection>
      <FadeInSection delay={50}>
        <PercorsiSection />
      </FadeInSection>
      <AnimatedLineView />
      {/* --- TESTIMONIANZE --- */}
      {/* <FadeInSection delay={50}>
        <Reviews />
      </FadeInSection>

      <AnimatedLineView /> */}
      {/* --- BANNER CTA --- */}
      <FadeInSection delay={50}>
        <Banner />
      </FadeInSection>
      <AnimatedLineView />
    </>
  );
}

export default ChiSono;
