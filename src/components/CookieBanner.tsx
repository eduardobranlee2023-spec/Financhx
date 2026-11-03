"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

const bannerText = {
  en: {
    title: "Privacy & Transparency",
    heading: "Cookie and Navigation Data Management",
    body: "We use essential and anonymous analytics cookies to ensure the secure operation of the site, remember your preferences and evaluate platform performance. For more details, see our",
    policyLink: "Cookie Policy",
    configure: "Configure",
    rejectNonEssential: "Reject non-essential",
    acceptAll: "Accept all",
    cancel: "Cancel",
    savePreferences: "Save preferences",
    essential: "Technical & Essential Cookies",
    essentialDesc: "Strictly necessary for routing and security.",
    alwaysActive: "Always Active",
    analytics: "Performance & Analytics Cookies",
    analyticsDesc: "Anonymous load metrics and aggregate traffic without tracking identity.",
    cookiesPath: "/en/cookies",
  },
  es: {
    title: "Privacidad & Transparencia",
    heading: "Gestión de Cookies y Datos de Navegación",
    body: "Utilizamos cookies esenciales y analíticas anónimas para garantizar el funcionamiento seguro del sitio, recordar sus preferencias y evaluar el desempeño de la plataforma. Para más detalles, consulte nuestra",
    policyLink: "Política de Cookies",
    configure: "Configurar",
    rejectNonEssential: "Rechazar no esenciales",
    acceptAll: "Aceptar todas",
    cancel: "Cancelar",
    savePreferences: "Guardar preferencias",
    essential: "Cookies Técnicas y Esenciales",
    essentialDesc: "Estrictamente necesarias para el enrutamiento y seguridad.",
    alwaysActive: "Siempre Activas",
    analytics: "Cookies de Rendimiento y Análisis",
    analyticsDesc: "Métricas anónimas de carga y tráfico agregado sin rastrear identidad.",
    cookiesPath: "/es/cookies",
  },
};

export function CookieBanner({ lang = "es" }: { lang?: string }) {
  const t = lang === "en" ? bannerText.en : bannerText.es;
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    // Check if user already made a choice
    const savedConsent = localStorage.getItem("financhx_cookie_consent");
    if (!savedConsent) {
      // Delay slightly for smooth appearance
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "financhx_cookie_consent",
      JSON.stringify({
        essential: true,
        analytics: true,
        timestamp: new Date().toISOString(),
      })
    );
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(
      "financhx_cookie_consent",
      JSON.stringify({
        essential: true,
        analytics: false,
        timestamp: new Date().toISOString(),
      })
    );
    setShowBanner(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      "financhx_cookie_consent",
      JSON.stringify({
        essential: true,
        analytics: analyticsAllowed,
        timestamp: new Date().toISOString(),
      })
    );
    setShowConfig(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label={t.heading}
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#0B0B0C] border border-[#262626] rounded-2xl p-5 shadow-2xl shadow-black/80 backdrop-blur-md">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#18181A] border border-[#2D2D30] flex items-center justify-center text-white shrink-0">
              <Cookie className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                {t.title}
              </span>
              <h3 className="text-sm font-semibold text-white">
                {t.heading}
              </h3>
            </div>
          </div>
          <button
            onClick={handleRejectAll}
            className="text-zinc-500 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
          {t.body}{" "}
          <Link
            href={t.cookiesPath}
            className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors"
          >
            {t.policyLink}
          </Link>
          .
        </p>

        {showConfig && (
          <div className="mt-4 pt-3 border-t border-[#202022] space-y-3">
            <div className="flex items-center justify-between text-xs bg-[#121214] p-2.5 rounded-lg border border-[#222]">
              <div>
                <p className="font-medium text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  {t.essential}
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  {t.essentialDesc}
                </p>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-700">
                {t.alwaysActive}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs bg-[#121214] p-2.5 rounded-lg border border-[#222]">
              <div>
                <p className="font-medium text-white">{t.analytics}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  {t.analyticsDesc}
                </p>
              </div>
              <input
                type="checkbox"
                checked={analyticsAllowed}
                onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                className="w-4 h-4 accent-white rounded bg-zinc-900 border-zinc-700 cursor-pointer"
              />
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-[#1C1C1E] flex flex-wrap items-center gap-2 justify-end">
          {!showConfig ? (
            <>
              <button
                type="button"
                onClick={() => setShowConfig(true)}
                className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-[#18181A] transition-colors"
              >
                {t.configure}
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="text-xs font-mono text-zinc-300 hover:text-white bg-[#18181A] border border-[#2D2D30] px-3.5 py-1.5 rounded-lg transition-colors hover:bg-[#222]"
              >
                {t.rejectNonEssential}
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="text-xs font-mono font-medium text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-lg transition-colors"
              >
                {t.acceptAll}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowConfig(false)}
                className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg"
              >
                {t.cancel}
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="text-xs font-mono font-medium text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-lg transition-colors"
              >
                {t.savePreferences}
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

