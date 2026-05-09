import Head from "next/head";
import Link from "next/link";
import LegalPageLayout, {
  LegalSection,
} from "@/components/privacy/LegalPageLayout";
import { getLegalPageUpdatedAt } from "@/utils/legalUpdatedAt";
import { buildSeoTitle } from "@/utils/seo";

const checks = [
  "struttura delle pagine con titoli e sezioni riconoscibili",
  "testi alternativi descrittivi per le immagini informative",
  "etichette o descrizioni per pulsanti, menu e controlli interattivi",
  "navigazione da tastiera per i principali elementi dell'interfaccia",
  "contrasto e leggibilita dei contenuti principali",
  "gestione del consenso cookie accessibile e riapribile",
];

const navItems = [
  { href: "#stato", label: "Stato del sito" },
  { href: "#interventi", label: "Interventi applicati" },
  { href: "#contenuti", label: "Contenuti non ancora perfetti" },
  { href: "#segnalazioni", label: "Segnalazioni" },
];

export default function Accessibilita({ updatedAt }) {
  const seoTitle = buildSeoTitle("Accessibilita");

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content="Informazioni sull'accessibilita del sito annamariaricci.eu e canale per segnalare eventuali difficolta di navigazione."
        />
        <link
          rel="canonical"
          href="https://www.annamariaricci.eu/accessibilita"
        />
      </Head>

      <LegalPageLayout
        title="Accessibilita"
        eyebrow="Informazioni di accessibilita"
        updatedAt={updatedAt}
        intro="L'obiettivo di questo sito e rendere i contenuti e i servizi online fruibili dal maggior numero possibile di persone, con attenzione alla chiarezza, alla navigazione da tastiera e alla compatibilita con le tecnologie assistive."
        navItems={navItems}
      >
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Stato
            </p>
            <p className="mt-2 font-semibold text-gray100">
              miglioramento progressivo
            </p>
          </div>
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Feedback
            </p>
            <p className="mt-2 font-semibold text-gray100">
              canale email attivo
            </p>
          </div>
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Documento
            </p>
            <p className="mt-2 font-semibold text-gray100">
              informativo volontario
            </p>
          </div>
        </div>

        <LegalSection id="stato" title="Stato del sito">
          <p>
            Il sito e stato aggiornato con interventi di accessibilita di base.
            Non si tratta di una dichiarazione formale AgID compilata tramite
            modello ufficiale, ma di una pagina informativa volontaria che
            descrive l'impegno e il canale di feedback.
          </p>
        </LegalSection>

        <LegalSection id="interventi" title="Interventi applicati">
          <ul className="list-disc space-y-2 pl-6">
            {checks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection id="contenuti" title="Contenuti non ancora perfetti">
          <p>
            Alcune animazioni, componenti di terze parti, contenuti importati
            dal blog o vecchi testi potrebbero non essere pienamente
            ottimizzati. Il sito viene mantenuto e migliorato progressivamente.
          </p>
        </LegalSection>

        <LegalSection id="segnalazioni" title="Segnalazioni">
          <p>
            Se incontri difficolta di navigazione o contenuti non accessibili,
            puoi scrivere a{" "}
            <Link
              href="mailto:welcome@annamariaricci.eu"
              className="font-semibold text-purple100 underline"
            >
              welcome@annamariaricci.eu
            </Link>
            . Ogni segnalazione sara valutata per migliorare l'esperienza di
            navigazione.
          </p>
        </LegalSection>
      </LegalPageLayout>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      updatedAt: getLegalPageUpdatedAt("pages/accessibilita.js"),
    },
  };
}
