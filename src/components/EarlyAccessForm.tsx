"use client";

import React, { useState } from "react";
import { submitEarlyAccess, EarlyAccessSubmission } from "@/services/earlyAccess";
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  AlertCircle,
  Building,
  User,
  Mail,
  Briefcase,
} from "lucide-react";
import type { Dictionary } from "@/dictionaries/dictionaries";

interface EarlyAccessFormProps {
  dict?: Dictionary["earlyAccess"];
  lang?: string;
}

const DEFAULT_DICT: Dictionary["earlyAccess"] = {
  badge: "PROGRAMA PILOTO PRIVADO",
  title: "Sumate a la validación temprana de Financhx.",
  sub: "Buscamos directores de administración, contadores y CFOs dispuestos a probar nuestra arquitectura de conciliación y darnos feedback real antes del lanzamiento público.",
  benefits: [
    "Acceso prioritario a las primeras versiones funcionales de Reconcile.",
    "Canal directo con el equipo de ingeniería para sugerir funciones.",
    "Condiciones preferenciales de onboarding y puesta en marcha.",
  ],
  disclaimer: "No compartimos tus datos con terceros. Usados exclusivamente para coordinar demos y acceso piloto.",
  form: {
    name: "Nombre y Apellido",
    company: "Empresa / Organización",
    email: "Correo Corporativo",
    role: "Cargo o Rol (Opcional)",
    interest: "Interés Principal",
    submit: "Solicitar acceso anticipado",
    sending: "Validando datos...",
    successTitle: "Solicitud Registrada",
    successMsg: "Muchas gracias por tu interés en Financhx. Nos comunicaremos a tu correo corporativo dentro de las 48 horas hábiles.",
    interests: [
      "Financhx Reconcile (Conciliación Bancaria)",
      "Financhx Optimize (Flujo de Caja & Tesorería)",
      "Financhx Ledger (Auditoría & Trazabilidad)",
      "Desarrollo de Software a Medida",
    ],
  },
};

export function EarlyAccessForm({ dict = DEFAULT_DICT, lang = "es" }: EarlyAccessFormProps) {
  const t = dict;
  const [formData, setFormData] = useState<EarlyAccessSubmission>({
    nombre: "",
    empresa: "",
    email: "",
    cargo: "",
    interes: t.form.interests[0],
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await submitEarlyAccess(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message);
      }
    } catch {
      setErrorMsg(lang === "en" ? "An error occurred. Please try again." : "Ocurrió un error al procesar tu solicitud. Por favor intentá nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="acceso-anticipado" className="py-24 bg-[#050505] relative border-t border-[#303030] overflow-x-clip scroll-mt-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5E5E5]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#101010] border border-[#303030] rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Context & Transparency */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1B1B] border border-[#303030] text-xs font-mono text-[#E5E5E5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>{t.badge}</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                  {t.title}
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[#D0D0D0] leading-relaxed">
                  {t.sub}
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#D0D0D0]">
                {t.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E5E5E5] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Security & Honest Status Note */}
              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#8F8F8F] font-mono">
                <Lock className="w-3.5 h-3.5 text-[#E5E5E5]" />
                <span>{t.disclaimer}</span>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-[#090909] p-6 sm:p-8 rounded-2xl border border-[#303030]">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFFF]">{t.form.successTitle}</h3>
                  <p className="text-xs sm:text-sm text-[#D0D0D0] max-w-md mx-auto leading-relaxed">
                    {t.form.successMsg}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ nombre: "", empresa: "", email: "", cargo: "", interes: t.form.interests[0] });
                      }}
                      className="px-4 py-2 rounded-lg bg-[#1B1B1B] text-xs font-mono text-[#D0D0D0] hover:text-white border border-[#303030]"
                    >
                      {lang === "en" ? "Send another inquiry" : "Enviar otra consulta"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-[#EF4444]/15 border border-[#EF4444]/30 text-xs text-[#EF4444] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                      {t.form.name} *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8F8F8F] absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder={lang === "en" ? "e.g. John Smith" : "Ej. Martín Soler"}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#101010] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                        {t.form.company} *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-[#8F8F8F] absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          placeholder={lang === "en" ? "Company name" : "Nombre de la empresa"}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#101010] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                        {t.form.role}
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-[#8F8F8F] absolute left-3 top-3" />
                        <input
                          type="text"
                          value={formData.cargo}
                          onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                          placeholder={lang === "en" ? "e.g. CFO, Controller" : "Ej. CFO, Contador, Admin"}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#101010] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                      {t.form.email} *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#8F8F8F] absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#101010] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                      {t.form.interest}
                    </label>
                    <select
                      value={formData.interes}
                      onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#101010] border border-[#303030] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#E5E5E5]"
                    >
                      {t.form.interests.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-[#050505] font-semibold text-xs hover:bg-[#D1D1D1] disabled:opacity-50 transition-all"
                    >
                      {loading ? (
                        <span>{t.form.sending}</span>
                      ) : (
                        <>
                          <span>{t.form.submit}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-[#8F8F8F] text-center font-mono pt-1">
                    {lang === "en"
                      ? "Private validation phase. We do not sell your company's data."
                      : "Fase de validación privada. No comercializamos datos de tu empresa."}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}