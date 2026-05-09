import Head from "next/head";
import Link from "next/link";
import LegalPageLayout, {
  LegalSection,
} from "@/components/privacy/LegalPageLayout";
import { getLegalPageUpdatedAt } from "@/utils/legalUpdatedAt";
import { buildSeoTitle } from "@/utils/seo";

const dataCategories = [
  "nome e cognome",
  "indirizzo email",
  "numero di telefono, se inviato volontariamente",
  "contenuto dei messaggi e delle richieste",
  "dati tecnici di navigazione necessari al funzionamento del sito",
  "preferenze cookie e consenso ai servizi non necessari",
];

const providers = [
  {
    name: "Vercel",
    role: "hosting, deploy, sicurezza e log tecnici",
    data: "indirizzo IP, informazioni del dispositivo, log di richiesta e dati tecnici necessari alla distribuzione del sito",
  },
  {
    name: "IONOS",
    role: "servizi email e SMTP",
    data: "indirizzo email, contenuto dei messaggi e dati tecnici necessari al recapito delle comunicazioni",
  },
  {
    name: "Google Fonts",
    role: "caricamento dei caratteri tipografici",
    data: "indirizzo IP e informazioni tecniche del browser necessari alla richiesta dei font",
  },
  {
    name: "Google Analytics",
    role: "statistiche aggregate, solo dopo consenso",
    data: "dati di navigazione aggregati e identificativi tecnici collegati al servizio di misurazione",
  },
];

const navItems = [
  { href: "#titolare", label: "Titolare" },
  { href: "#dati", label: "Dati raccolti" },
  { href: "#finalita", label: "Finalita e base giuridica" },
  { href: "#fornitori", label: "Fornitori" },
  { href: "#conservazione", label: "Conservazione" },
  { href: "#trasferimenti", label: "Trasferimenti extra UE" },
  { href: "#diritti", label: "Diritti" },
  { href: "#cookie", label: "Cookie" },
];

export default function PrivacyPolicy({ updatedAt }) {
  const seoTitle = buildSeoTitle("Privacy Policy");

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content="Privacy Policy del sito annamariaricci.eu"
        />
      </Head>

      <LegalPageLayout
        title="Privacy Policy"
        eyebrow="Informativa privacy"
        updatedAt={updatedAt}
        intro="Questa informativa descrive in modo sintetico e trasparente come vengono trattati i dati personali raccolti tramite il sito annamariaricci.eu."
        navItems={navItems}
      >
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Titolare
            </p>
            <p className="mt-2 font-semibold text-gray100">
              Anna Maria Ricci
            </p>
          </div>
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Contatto
            </p>
            <Link
              href="mailto:welcome@annamariaricci.eu"
              className="mt-2 block font-semibold text-purple100 underline"
            >
              welcome@annamariaricci.eu
            </Link>
          </div>
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Ambito
            </p>
            <p className="mt-2 font-semibold text-gray100">
              sito e form online
            </p>
          </div>
        </div>

        <LegalSection id="titolare" title="Titolare del trattamento">
          <p>
            Il titolare del trattamento e Anna Maria Ricci, Partita IVA
            02068280508, contattabile all'indirizzo email{" "}
            <Link
              href="mailto:welcome@annamariaricci.eu"
              className="font-semibold text-purple100 underline"
            >
              welcome@annamariaricci.eu
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection id="dati" title="Tipologie di dati raccolti">
          <p>
            Attraverso i form del sito e la navigazione possono essere trattate
            le seguenti categorie di dati:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {dataCategories.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection id="finalita" title="Finalita e base giuridica">
          <p>
            I dati inviati tramite form vengono usati per rispondere alle
            richieste, gestire prenotazioni o richieste informative, adempiere a
            obblighi di legge e curare eventuali rapporti professionali
            conseguenti.
          </p>
          <p>
            Il trattamento dei dati inviati volontariamente si basa sul consenso
            dell'utente e sull'esecuzione di misure precontrattuali richieste
            dall'utente stesso. I cookie tecnici sono necessari al funzionamento
            del sito. Google Analytics viene attivato solo dopo consenso.
          </p>
        </LegalSection>

        <LegalSection id="fornitori" title="Dettaglio dei fornitori">
          <div className="grid gap-4">
            {providers.map((provider) => (
              <article
                key={provider.name}
                className="border border-gray100/15 p-5"
              >
                <h3 className="font-abhaya text-2xl font-bold text-gray100">
                  {provider.name}
                </h3>
                <p className="mt-2">
                  <span className="font-semibold text-gray100">Finalita:</span>{" "}
                  {provider.role}
                </p>
                <p>
                  <span className="font-semibold text-gray100">
                    Dati trattati:
                  </span>{" "}
                  {provider.data}.
                </p>
              </article>
            ))}
          </div>
        </LegalSection>

        <LegalSection id="conservazione" title="Modalita e conservazione">
          <p>
            I dati sono trattati con strumenti informatici e misure
            organizzative adeguate. I messaggi ricevuti tramite form sono
            conservati per il tempo necessario a gestire la richiesta e gli
            eventuali rapporti conseguenti.
          </p>
        </LegalSection>

        <LegalSection id="trasferimenti" title="Trasferimenti extra UE">
          <p>
            Alcuni fornitori tecnici, come Vercel e Google, possono avere sede o
            infrastrutture anche fuori dallo Spazio Economico Europeo. In questi
            casi il trasferimento avviene secondo le garanzie previste dalla
            normativa applicabile, incluse clausole contrattuali standard o
            altri strumenti riconosciuti dal GDPR.
          </p>
        </LegalSection>

        <LegalSection id="diritti" title="Diritti dell'interessato">
          <p>
            L'utente puo chiedere accesso, rettifica, cancellazione,
            limitazione, opposizione al trattamento e portabilita dei dati, nei
            casi previsti dalla normativa applicabile.
          </p>
          <p>
            Le richieste possono essere inviate a{" "}
            <Link
              href="mailto:welcome@annamariaricci.eu"
              className="font-semibold text-purple100 underline"
            >
              welcome@annamariaricci.eu
            </Link>
            . L'utente puo inoltre proporre reclamo al Garante per la protezione
            dei dati personali.
          </p>
        </LegalSection>

        <LegalSection id="cookie" title="Cookie">
          <p>
            Per maggiori dettagli sui cookie usati dal sito e sulla gestione del
            consenso, consulta la{" "}
            <Link href="/cookie-policy" className="text-purple100 underline">
              Cookie Policy
            </Link>
            .
          </p>
        </LegalSection>
      </LegalPageLayout>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      updatedAt: getLegalPageUpdatedAt("pages/privacy-policy.js"),
    },
  };
}
