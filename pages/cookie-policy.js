import Head from "next/head";
import Link from "next/link";
import LegalPageLayout, {
  LegalSection,
} from "@/components/privacy/LegalPageLayout";
import { getLegalPageUpdatedAt } from "@/utils/legalUpdatedAt";
import { buildSeoTitle } from "@/utils/seo";

const cookieRows = [
  {
    name: "annamaria_cookie_consent",
    provider: "annamariaricci.eu",
    category: "Tecnico",
    purpose: "Memorizza la scelta dell'utente sul consenso ai cookie.",
    duration: "Persistente, fino a modifica o cancellazione dal browser.",
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    category: "Misurazione",
    purpose:
      "Raccoglie statistiche aggregate sulla navigazione, solo dopo consenso.",
    duration: "Secondo le impostazioni di Google Analytics.",
  },
  {
    name: "Google Fonts",
    provider: "Google",
    category: "Servizio tecnico esterno",
    purpose:
      "Carica i caratteri tipografici del sito. La richiesta tecnica puo comunicare a Google indirizzo IP e informazioni del browser.",
    duration: "Secondo le impostazioni tecniche del browser e del fornitore.",
  },
  {
    name: "Log tecnici di hosting",
    provider: "Vercel",
    category: "Tecnico",
    purpose:
      "Consente pubblicazione, sicurezza, monitoraggio tecnico e distribuzione del sito.",
    duration: "Secondo le impostazioni e i tempi tecnici del fornitore.",
  },
  {
    name: "Log tecnici email",
    provider: "IONOS",
    category: "Tecnico",
    purpose:
      "Consente l'invio e la ricezione delle email generate dai form di contatto.",
    duration: "Secondo le impostazioni e i tempi tecnici del fornitore.",
  },
];

const navItems = [
  { href: "#introduzione", label: "Introduzione" },
  { href: "#strumenti", label: "Strumenti di tracciamento" },
  { href: "#consenso", label: "Gestione del consenso" },
  { href: "#privacy", label: "Privacy" },
];

export default function CookiePolicy({ updatedAt }) {
  const seoTitle = buildSeoTitle("Cookie Policy");

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta
          name="description"
          content="Cookie Policy del sito annamariaricci.eu"
        />
      </Head>

      <LegalPageLayout
        title="Cookie Policy"
        eyebrow="Informativa cookie"
        updatedAt={updatedAt}
        intro="Questa informativa spiega quali cookie e tecnologie vengono usati sul sito annamariaricci.eu e come puoi gestire le tue preferenze."
        navItems={navItems}
      >
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Tecnici
            </p>
            <p className="mt-2 font-semibold text-gray100">sempre attivi</p>
          </div>
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Analytics
            </p>
            <p className="mt-2 font-semibold text-gray100">
              solo con consenso
            </p>
          </div>
          <div className="border border-gray100/15 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray90">
              Preferenze
            </p>
            <p className="mt-2 font-semibold text-gray100">
              modificabili dal banner
            </p>
          </div>
        </div>

        <LegalSection id="introduzione" title="Cosa sono i cookie">
          <p>
            I cookie sono piccoli file salvati nel browser dell'utente. Alcuni
            sono necessari per far funzionare correttamente il sito, altri
            servono per misurare l'utilizzo delle pagine e richiedono il
            consenso.
          </p>
        </LegalSection>

        <LegalSection id="strumenti" title="Cookie e tecnologie usate">
          <p>
            Oltre ai cookie salvati nel browser, il sito usa fornitori tecnici
            come Vercel per hosting e deploy, IONOS per i servizi email collegati
            ai form e Google Fonts per il caricamento dei caratteri tipografici.
          </p>
          <div className="mt-5 overflow-x-auto border border-gray100/15">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray100/20 text-gray100">
                  <th className="p-4 font-semibold">Nome</th>
                  <th className="p-4 font-semibold">Fornitore</th>
                  <th className="p-4 font-semibold">Categoria</th>
                  <th className="p-4 font-semibold">Finalita</th>
                  <th className="p-4 font-semibold">Durata</th>
                </tr>
              </thead>
              <tbody>
                {cookieRows.map((cookie) => (
                  <tr key={cookie.name} className="border-b border-gray100/10">
                    <td className="p-4 align-top font-semibold text-gray100">
                      {cookie.name}
                    </td>
                    <td className="p-4 align-top text-gray90">
                      {cookie.provider}
                    </td>
                    <td className="p-4 align-top text-gray90">
                      {cookie.category}
                    </td>
                    <td className="p-4 align-top text-gray90">
                      {cookie.purpose}
                    </td>
                    <td className="p-4 align-top text-gray90">
                      {cookie.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LegalSection>

        <LegalSection id="consenso" title="Gestione del consenso">
          <p>
            Alla prima visita puoi accettare o rifiutare i cookie non necessari
            tramite il banner. Il pulsante con icona permette di riaprire il
            banner e modificare le preferenze.
          </p>
        </LegalSection>

        <LegalSection id="privacy" title="Privacy">
          <p>
            Per informazioni sul trattamento dei dati personali consulta la{" "}
            <Link href="/privacy-policy" className="text-purple100 underline">
              Privacy Policy
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
      updatedAt: getLegalPageUpdatedAt("pages/cookie-policy.js"),
    },
  };
}
