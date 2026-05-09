import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "annamaria_cookie_consent";

export default function CookieBanner({ onConsentChange }) {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!savedConsent) {
      setVisible(true);
      return;
    }

    onConsentChange?.(savedConsent === "accepted");
    setAnalyticsConsent(savedConsent === "accepted");
  }, [onConsentChange]);

  useEffect(() => {
    const openPreferences = () => setVisible(true);

    window.addEventListener("openCookiePreferences", openPreferences);

    return () => {
      window.removeEventListener("openCookiePreferences", openPreferences);
    };
  }, []);

  const saveConsent = (accepted) => {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      accepted ? "accepted" : "rejected"
    );
    onConsentChange?.(accepted);
    setAnalyticsConsent(accepted);
    setShowPreferences(false);
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-[10000] px-4 pb-4">
          <div
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title"
            className="mx-auto flex w-full max-w-5xl flex-col gap-4 border border-gray100/20 bg-[#e9ebef] p-5 shadow-2xl md:flex-row md:items-center md:justify-between"
          >
            <div className="max-w-3xl">
              <p
                id="cookie-banner-title"
                className="font-abhaya text-2xl font-bold leading-none text-gray100"
              >
                Preferenze cookie
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray90">
                Usiamo cookie tecnici necessari al funzionamento del sito e,
                solo con il tuo consenso, cookie di misurazione come Google
                Analytics. Puoi accettare o rifiutare i cookie non necessari in
                qualsiasi momento. Leggi la{" "}
                <Link href="/cookie-policy" className="font-semibold underline">
                  Cookie Policy
                </Link>{" "}
                e la{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              {showPreferences && (
                <div
                  id="cookie-preferences-panel"
                  className="mt-4 border border-gray100/20 p-4"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-gray100/10 pb-3">
                    <div>
                      <p className="text-sm font-semibold uppercase text-gray100">
                        Cookie tecnici
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-gray90">
                        Necessari per il funzionamento del sito e del salvataggio
                        delle preferenze.
                      </p>
                    </div>
                    <span className="text-xs uppercase text-gray90">
                      Sempre attivi
                    </span>
                  </div>

                  <label className="mt-3 flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(event) =>
                        setAnalyticsConsent(event.target.checked)
                      }
                      className="mt-1 h-4 w-4 accent-purple100"
                    />
                    <span>
                      <span className="block text-sm font-semibold uppercase text-gray100">
                        Cookie di misurazione
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-gray90">
                        Consentono l'attivazione di Google Analytics per
                        statistiche aggregate sulla navigazione.
                      </span>
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row md:flex-shrink-0 md:items-center">
              <button
                type="button"
                onClick={() => setShowPreferences((isOpen) => !isOpen)}
                aria-expanded={showPreferences}
                aria-controls="cookie-preferences-panel"
                className="border border-gray100 px-4 py-3 text-sm uppercase text-gray100 transition-colors hover:bg-gray100 hover:text-white"
              >
                Preferenze
              </button>
              <button
                type="button"
                onClick={() => saveConsent(false)}
                className="border border-gray100 px-4 py-3 text-sm uppercase text-gray100 transition-colors hover:bg-gray100 hover:text-white"
              >
                Rifiuta
              </button>
              <button
                type="button"
                onClick={() => saveConsent(true)}
                className="border border-purple100 bg-purple100 px-4 py-3 text-sm uppercase text-white transition-colors hover:bg-transparent hover:text-purple100"
              >
                Accetta
              </button>
              {showPreferences && (
                <button
                  type="button"
                  onClick={() => saveConsent(analyticsConsent)}
                  className="border border-purple100 px-4 py-3 text-sm uppercase text-purple100 transition-colors hover:bg-purple100 hover:text-white"
                >
                  Salva
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {!visible && (
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="fixed bottom-4 right-0 z-[9999] flex h-11 w-11 items-center justify-center border border-r-0 border-gray100 bg-[#e9ebef] text-gray100 shadow-xl transition-colors hover:bg-gray100 hover:text-white"
          aria-label="Riapri il banner cookie"
          title="Riapri il banner cookie"
        >
          <Icon
            icon="mdi:cookie-outline"
            width="24"
            height="24"
            aria-hidden="true"
          />
        </button>
      )}
    </>
  );
}
