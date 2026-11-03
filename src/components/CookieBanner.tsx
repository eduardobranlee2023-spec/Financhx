"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export function CookieBanner() {
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
      aria-label="Consentimiento de cookies"
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
                Privacidad & Transparencia
              </span>
              <h3 className="text-sm font-semibold text-white">
                Gestión de Cookies y Datos de Navegación
              </h3>
            </div>
          </div>
          <button
            onClick={handleRejectAll}
            className="text-zinc-500 hover:text-white transition-colors p-1"
            aria-label="Cerrar banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
          Utilizamos cookies esenciales y analíticas anónimas para garantizar el
          funcionamiento seguro del sitio, recordar sus preferencias y evaluar el
          desempeño de la plataforma. Para más detalles, consulte nuestra{" "}
          <Link
            href="/cookies"
            className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors"
          >
            Política de Cookies
          </Link>
          .
        </p>

        {showConfig && (
          <div className="mt-4 pt-3 border-t border-[#202022] space-y-3">
            <div className="flex items-center justify-between text-xs bg-[#121214] p-2.5 rounded-lg border border-[#222]">
              <div>
                <p className="font-medium text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  Cookies Técnicas y Esenciales
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Estrictamente necesarias para el enrutamiento y seguridad.
                </p>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-700">
                Siempre Activas
              </span>
            </div>

            <div className="flex items-center justify-between text-xs bg-[#121214] p-2.5 rounded-lg border border-[#222]">
              <div>
                <p className="font-medium text-white">Cookies de Rendimiento y Análisis</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Métricas anónimas de carga y tráfico agregado sin rastrear identidad.
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
                Configurar
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="text-xs font-mono text-zinc-300 hover:text-white bg-[#18181A] border border-[#2D2D30] px-3.5 py-1.5 rounded-lg transition-colors hover:bg-[#222]"
              >
                Rechazar no esenciales
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="text-xs font-mono font-medium text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-lg transition-colors"
              >
                Aceptar todas
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowConfig(false)}
                className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="text-xs font-mono font-medium text-black bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-lg transition-colors"
              >
                Guardar preferencias
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

