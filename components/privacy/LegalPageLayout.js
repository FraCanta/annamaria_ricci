import Link from "next/link";
import { useState } from "react";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/accessibilita", label: "Accessibilita" },
];

export default function LegalPageLayout({
  title,
  eyebrow,
  updatedAt,
  intro,
  navItems = [],
  children,
}) {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  return (
    <main className="content py-12 lg:py-20">
      <section className="mx-auto max-w-3xl pb-10 text-center lg:pb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple100">
          {eyebrow}
        </p>
        <h1 className="font-work text-2xl font-semibold leading-tight text-gray100 md:text-3xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray90 md:text-base">
          {intro}
        </p>
        <p className="mt-4 text-xs font-medium text-gray90">
          Ultimo aggiornamento: {updatedAt}
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="lg:pt-2">
          <button
            type="button"
            className="flex w-full items-center justify-between border border-gray100/15 bg-white px-4 py-3 text-left font-work text-sm font-semibold text-gray100 shadow-sm lg:hidden"
            aria-expanded={isSummaryOpen}
            aria-controls="legal-summary"
            onClick={() => setIsSummaryOpen((current) => !current)}
          >
            Sommario
            <span aria-hidden="true">{isSummaryOpen ? "-" : "+"}</span>
          </button>

          {isSummaryOpen && (
            <button
              type="button"
              className="fixed inset-0 z-[120] bg-gray100/40 lg:hidden"
              aria-label="Chiudi il sommario"
              onClick={() => setIsSummaryOpen(false)}
            />
          )}

          <div
            id="legal-summary"
            className={`fixed bottom-0 left-0 top-0 z-[130] w-[82vw] max-w-[340px] border-r border-gray100/15 bg-white p-5 shadow-xl transition-transform duration-300 lg:sticky lg:top-24 lg:z-auto lg:block lg:w-auto lg:max-w-none lg:border lg:shadow-sm ${
              isSummaryOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="font-work text-sm font-semibold text-gray100">
                Sommario
              </p>
              <button
                type="button"
                className="border border-gray100/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-gray90 lg:hidden"
                aria-label="Torna al documento"
                onClick={() => setIsSummaryOpen(false)}
              >
                Indietro
              </button>
            </div>
            <nav className="mt-4" aria-label="Sommario del documento">
              <ul className="grid gap-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-gray90 transition hover:text-purple100"
                      onClick={() => setIsSummaryOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              className="mt-8 border-t border-gray100/15 pt-5"
              aria-label="Documenti legali"
            >
              <ul className="grid gap-2 text-xs">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray90 underline-offset-4 hover:text-purple100 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="border-l border-gray100/10 pl-0 lg:pl-10">
          {children}
        </div>
      </div>
    </main>
  );
}

export function LegalSection({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-gray100/10 py-8 first:pt-0 last:border-b-0"
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-purple100 text-xs font-semibold text-purple100"
          aria-hidden="true"
        >
          i
        </span>
        <h2 className="font-work text-base font-semibold leading-tight text-gray100 md:text-lg">
          {title}
        </h2>
      </div>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray90 md:text-[15px]">
        {children}
      </div>
    </section>
  );
}
