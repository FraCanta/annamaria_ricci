import AccordionItem from "@/components/AccordionItem/AccordionItem";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";
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
      <FadeInSection delay={50}>
        <div className="w-full  flex flex-col gap-10 my-20">
          <h1 className="font-abhaya font-[400] text-[38px] md:text-[48px] 2xl:text-[4.8vw] leading-none text-gray100 ">
            Tornare alle radici — un filo conduttore che attraversa il mio
            percorso di vita.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between">
              {" "}
              <p className="font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
                Sono nata in Lombardia, e ho radici Umbre di cui sono molto
                fiera. Vivo in Toscana dal 1999, una terra che amo molto. Sono
                la quarta di sei figli, prima femmina dopo 3 maschi.
              </p>
              <p className="font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
                Il lavoro per me è sempre stato molto importante, ho infatti
                iniziato da giovanissima, per una forte spinta interiore verso
                la libertà.
              </p>
            </div>
            <p className="font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              Amo <strong>profondamente</strong>, <strong>imparare</strong>,{" "}
              <strong>studiare</strong>, <strong>formarmi</strong> e condividere
              ciò che imparo e scopro.
              <br />
              Sono una <strong>professionista della relazione di aiuto</strong>,
              specializzata in benessere personale, relazionale, lavoro e
              organizzazioni.
              <br /> Mi occupo di{" "}
              <strong>orientamento professionale e scolastico</strong>,
              <strong>counseling</strong>,{" "}
              <strong>respiro circolare consapevole</strong>.
              <br />
              Pratico la <strong>comunicazione non violenta</strong> e la{" "}
              <strong>meditazione sumarah</strong>.
            </p>
          </div>
        </div>
      </FadeInSection>
      <AnimatedLineView />
      <div className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
              Il mio percorso <br />
              lavorativo
            </h2>
          </div>
          <div>
            <AccordionItem title="La mia esperienza nelle aziende">
              <ul className="flex flex-col gap-4 font-work font-normal text-base  text-gray90 leading-snug list-disc list-inside">
                <li>
                  Ho firmato il mio primo contratto nel 1988 in un’azienda di
                  Peschiera Borromeo, città in provincia di Milano.
                </li>
                <li>
                  Prima di approdare al Counseling, ho lavorato per 23 anni in
                  piccole, medie e grandi aziende (anche multinazionali), tutte
                  esperienze che porto nel mio cuore e nel mio bagaglio
                  professionale.
                </li>
                <li>
                  Ho spaziato dalle vendite al commerciale, al miglioramento
                  processi, alla formazione, fino a gestire +500 persone avendo
                  la responsabilità del loro percorso di carriera e dei
                  risultati operativi di area.
                </li>
              </ul>
            </AccordionItem>
            <AnimatedLineView />
            <AccordionItem title="La mia libera professione">
              <ul className="flex flex-col gap-4 font-work font-normal text-base  text-gray90 leading-snug list-disc list-inside">
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
                  Orientatori Italiani, con credenziale 1200-2025 ai sensi della
                  Legge 04/2013.
                </li>
                <li>
                  Da gennaio 2025 sono socia di Confcommercio di Pistoia e
                  Prato.
                </li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
      <AnimatedLineView />
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
            {/* Contenitore testo */}
            <div className="flex flex-col gap-6 my-10 max-w-5xl w-full font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              <p>
                Ogni <strong>esperienza lavorativa</strong> ha aggiunto valore
                al mio percorso, contribuendo a farmi diventare la{" "}
                <strong>professionista</strong> che sono oggi. Non c’è stato un
                ruolo più importante di un altro: ognuno ha arricchito la mia
                <strong> crescita</strong>, sia nell’immediato che nel tempo.
              </p>
              <p>
                Ciò che ho sempre amato fare – e che continuo a portare avanti –
                è<strong> ascoltare</strong>, <strong>supportare</strong>,{" "}
                <strong>formare</strong>,<strong> creare</strong> e{" "}
                <strong>guidare</strong> le persone verso un
                <strong> lavoro</strong> più in linea con le loro{" "}
                <strong>aspettative</strong> e<strong> competenze</strong>. Mi
                occupo anche di <strong>analizzare</strong> e
                <strong> ottimizzare</strong> processi aziendali,{" "}
                <strong>gestire team</strong> e
                <strong> trasferire conoscenze</strong>.
              </p>
              <p>
                Oggi il mio <strong>metodo</strong> è un ponte tra il{" "}
                <strong>mondo del lavoro tradizionale</strong>, fatto di{" "}
                <strong>procedure</strong> e <strong>performance</strong>, e un
                approccio più
                <strong> umano</strong> e <strong>olistico</strong>, basato su{" "}
                <strong>counseling</strong>,<strong> ascolto attivo</strong> e{" "}
                <strong>comunicazione efficace</strong>. Non impongo un
                <strong> modello prestabilito</strong>: osservo, ascolto e
                adatto il mio metodo a chi ho di fronte, integrando{" "}
                <strong>esperienza</strong> e <strong>innovazione</strong> per
                offrire un
                <strong> supporto su misura</strong>.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
      <AnimatedLineView />
      <div className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
              Le collaborazioni
            </h2>
          </div>
          <div className="flex flex-col gap-6 w-full font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
            <p>
              Per le <strong>consulenze di orientamento specialistico</strong> e{" "}
              <strong>corsi di formazione</strong> attualmente collaboro con{" "}
              <strong>OMNIA Formazione</strong>, agenzia formativa del gruppo{" "}
              <strong>ConfCommercio</strong> di <strong>Pistoia</strong> e{" "}
              <strong>Prato</strong> associazione di rappresentanza e tutela
              delle imprese del <strong>commercio</strong>, del{" "}
              <strong>turismo</strong> e dei <strong>servizi</strong> della
              provincia di <strong>Pistoia</strong> e <strong>Prato</strong>,
              accreditata dalla <strong>Regione Toscana</strong> e certificata{" "}
              <strong>Uniter</strong> e con la società{" "}
              <strong>Cooperativa IM.O.FOR. Toscana</strong> società cooperativa
              di <strong>servizi</strong> per l’<strong>impresa</strong>, l’
              <strong>orientamento</strong> e la <strong>formazione</strong> che
              ha sede a <strong>San Giuliano Terme</strong> (<strong>PI</strong>
              ).
            </p>

            <p>
              Per <strong>counseling professionale</strong> e{" "}
              <strong>respiro circolare consapevole</strong> oppure{" "}
              <strong>Original Rebirthing</strong> invece collaboro con l’
              <strong>Associazione Spazio Cuore</strong> di{" "}
              <strong>Pisa</strong>.
            </p>

            <p>
              Per <strong>percorsi formativi</strong> ed{" "}
              <strong>eventi specifici</strong> collaboro anche con diverse{" "}
              <strong>professioniste</strong> del settore del{" "}
              <strong>benessere</strong>, <strong>relazione di aiuto</strong> e{" "}
              <strong>formazione continua</strong>.
            </p>
          </div>
        </div>
      </div>
      <AnimatedLineView />
      <div className="min-h-screen mt-20 relative mb-20 lg:mb-10">
        <h2 className="text-[12vw] font-abhaya font-bold leading-none text-gray-900">
          <FadeInSection delay={100}>
            <span
              className={`block pl-[15%] transition-[padding-left] duration-500 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)]`}
            >
              Questo è ciò che
            </span>
          </FadeInSection>
          <FadeInSection delay={200}>
            <span className="flex w-full justify-between items-center gap-2">
              <span>distingue</span> <span>il mio</span>
            </span>
          </FadeInSection>

          <FadeInSection delay={400}>
            <span className="flex justify-end">approccio</span>
          </FadeInSection>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <FadeInSection delay={100}>
            <div className="flex flex-col gap-10 bg-gray80/30 h-[280px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
              <div className="h-[30px] w-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 45 45"
                >
                  <g
                    id="Gruppe_984"
                    data-name="Gruppe 984"
                    transform="translate(-104 -1865.5)"
                  >
                    <line
                      id="Linie_161"
                      data-name="Linie 161"
                      y2="45"
                      transform="translate(126.5 1865.5)"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></line>
                    <line
                      id="Linie_162"
                      data-name="Linie 162"
                      x1="45"
                      transform="translate(104 1888)"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></line>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                  Libertà
                </h3>
                <p className="text-gray90">
                  La libertà è alla base del mio lavoro, permettendo a ogni
                  individuo di esprimere la propria autenticità.
                </p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="flex flex-col gap-10 bg-gray80/30 h-[280px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
              <div className="h-[30px] w-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 45 45"
                >
                  <g
                    id="Gruppe_984"
                    data-name="Gruppe 984"
                    transform="translate(-104 -1865.5)"
                  >
                    <line
                      id="Linie_161"
                      data-name="Linie 161"
                      y2="45"
                      transform="translate(126.5 1865.5)"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></line>
                    <line
                      id="Linie_162"
                      data-name="Linie 162"
                      x1="45"
                      transform="translate(104 1888)"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></line>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                  Evoluzione
                </h3>
                <p className="text-gray90">
                  Credo nell'evoluzione continua, sia personale che
                  professionale, e mi impegno a crescere e adattarmi in un mondo
                  in costante cambiamento.
                </p>
              </div>
            </div>{" "}
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="flex flex-col gap-10 bg-gray80/30 h-[280px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
              <div className="h-[30px] w-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 45 45"
                >
                  <g
                    id="Gruppe_984"
                    data-name="Gruppe 984"
                    transform="translate(-104 -1865.5)"
                  >
                    <line
                      id="Linie_161"
                      data-name="Linie 161"
                      y2="45"
                      transform="translate(126.5 1865.5)"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></line>
                    <line
                      id="Linie_162"
                      data-name="Linie 162"
                      x1="45"
                      transform="translate(104 1888)"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></line>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                  Fiducia
                </h3>
                <p className="text-gray90">
                  La fiducia è fondamentale per costruire relazioni autentiche e
                  durature, sia con i clienti che con i collaboratori.
                </p>
              </div>
            </div>{" "}
          </FadeInSection>
        </div>
      </div>
      <AnimatedLineView />
      <div className="my-20 lg:text-center">
        <FadeInSection delay={50}>
          <p className="font-work font-[400] text-[6vw] md:text-[48px] 2xl:text-[3vw] leading-snug text-gray90 mb-10 p-2 lg:p-4">
            “ Credo che chi lavora con le persone abbia il dovere etico di
            formarsi costantemente. Per me, la formazione non è solo una
            passione, ma un impegno imprescindibile per garantire un servizio di
            alto livello a chi si affida a me. “
          </p>
        </FadeInSection>
      </div>
      <AnimatedLineView />
      <div className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
              Formazione personale
              <br /> continua e costante
            </h2>
          </div>
          <div>
            <AccordionItem title="percorsi di crescita">
              <p className="font-abhaya font-[500] text-base lg:text-[22px] my-2 text-gray100 mb-4">
                Dal 2013, il mio percorso di crescita professionale e personale
                mi ha portata ad approfondire discipline come:
              </p>
              <ul className="flex flex-col gap-4 font-work font-normal text-base  text-gray90 leading-snug list-disc list-inside">
                <li>
                  Costellazioni Familiari (originali Bert Hellinger,
                  BioCostellazioni, Crearmoniche, Sciamaniche, Integrate
                  Immaginali, Psicogenealogia & Terapia Transgenerazionale).
                </li>
                <li>
                  Comunicazione Non Violenta, con la fondazione di un Gruppo di
                  Autoformazione nel 2021.
                </li>
                <li>
                  Meditazione Sumarah, una pratica che è diventata parte
                  integrante della mia vita.
                </li>
                <li>
                  Psicogenealogia, con studi presso l’Università Popolare del
                  Sociale di Torino e la Scuola di Genealogia, Araldica e
                  Scienze Documentarie di Bologna.
                </li>
              </ul>
            </AccordionItem>
            <AnimatedLineView />
            <AccordionItem title="La libera professione">
              <p className="font-abhaya font-[500] text-base lg:text-[22px] my-2  text-gray100 mb-4">
                Attualmente sto approfondendo:
              </p>
              <ul className="flex flex-col gap-4 font-work font-normal text-base  text-gray90 leading-snug list-disc list-inside">
                <li>Mindfulness e Ikigai.</li>
                <li>
                  Scuola di Alta Formazione di Formatori e Formatrici – CISP
                  Pisa
                </li>
                <li>
                  Psicogenealogia Junghiana e Costellazioni Psicogenealogiche®
                  (inizio febbraio 2025).
                </li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </div>
      <AnimatedLineView />
      <div className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative h-[50vh] lg:h-[80vh]">
            <Image
              src="/assets/annamaria_chisono.jpg"
              alt="Formazione Professionale"
              fill
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100">
              Un paio di cose che non dico a tutti
            </h2>
            <p className="font-abhaya font-[500] text-[22px] my-2 text-gray100 mb-4">
              ( ma per il mio primo e nuovissimo sito faccio un’eccezione )
            </p>
            <ul className="flex flex-col gap-4 font-work font-normal text-xl  text-gray90 leading-snug list-disc list-inside">
              <li>
                Amo la politica… del fare e tutte le forme d’arte, infatti la
                “uso” quando lavoro.
              </li>
              <p>Come?</p>
              <li>
                Con la scrittura, con i mandala, con la poesia, i collages,
                fotografia, caviardage, visualboard, brainstorming e molti altri
                strumenti che decido di volta in volta in base alle esigenze
                (insomma non posso spoilerare tutto).
              </li>
              <li>
                Mi sono occupata di Diritti, Doveri e Pari Opportunità per tutti
                per 16 anni, ricoprendo anche il ruolo di Presidente del
                Consiglio per le Pari Opportunità di San Giuliano Terme (PI).
              </li>
              <li>Mi piace guidare e viaggiare.</li>
            </ul>
          </div>
        </div>
      </div>
      <AnimatedLineView />
      <FadeInSection delay={100}>
        <div className="flex justify-between items-center w-full my-10">
          <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 mb-10">
            <h2 className="text-[12vw] lg:text-[4vw] font-abhaya font-bold leading-none text-gray-900">
              I miei percorsi
            </h2>
            <Button href="/percorsi">Vedi tutti i percorsi</Button>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={50}>
        <PercorsiSection />
      </FadeInSection>
      <AnimatedLineView />
      <FadeInSection delay={50}>
        <Reviews />
      </FadeInSection>
      <AnimatedLineView />
      <FadeInSection delay={50}>
        <Banner />
      </FadeInSection>
      <AnimatedLineView />
    </>
  );
}

export default ChiSono;
