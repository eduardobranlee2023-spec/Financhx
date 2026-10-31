"use client";

import React, { useState } from "react";
import {
  Code2,
  Globe,
  Database,
  Building,
  Workflow,
  Cpu,
  ArrowRight,
  Sparkles,
  Check,
  Send,
} from "lucide-react";

export function CustomSoftwareSection() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    tipoProyecto: "Aplicación Web Empresarial",
    descripcion: "",
  });

  const services = [
    {
      icon: Code2,
      title: "Desarrollo de aplicaciones web",
      description:
        "Sistemas web robustos, modulares y escalables construidos con arquitecturas modernas en la nube.",
    },
    {
      icon: Globe,
      title: "Sitios web corporativos",
      description:
        "Experiencias digitales institucionales de alto impacto que comunican con precisión la propuesta de valor de tu compañía.",
    },
    {
      icon: Database,
      title: "Sistemas de gestión internos",
      description:
        "Plataformas a medida (backoffice, paneles de control, ERPs ligeros) para centralizar la operación interna de tu equipo.",
    },
    {
      icon: Building,
      title: "Plataformas empresariales",
      description:
        "Software B2B diseñado para coordinar operaciones de alta complejidad, permisos granulares y múltiples áreas de negocio.",
    },
    {
      icon: Workflow,
      title: "Automatización de procesos",
      description:
        "Eliminación de tareas repetitivas mediante conectores, pipelines automáticos y flujos de trabajo eficientes.",
    },
    {
      icon: Cpu,
      title: "Soluciones digitales personalizadas",
      description:
        "Integración de APIs bancarias, pasarelas de cobro, microservicios y sincronización de datos entre herramientas heredadas.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <section
      id="software-a-medida"
      className="scroll-mt-24 py-24 bg-[#080808] relative border-t border-[#303030]"
    >
      {/* Background technical grid and subtle gradient */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E5E5E5]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Differentiation Callout Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-[#303030]/70">
          <div>
            <span className="text-xs font-mono text-[#E5E5E5] tracking-wider uppercase font-semibold block mb-1">
              DIVISIÓN DE INGENIERÍA DIGITAL
            </span>
            <div className="text-sm text-[#D0D0D0]">
              Línea de servicios profesionales independiente a los productos de Financhx OS
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#303030] text-xs font-mono text-[#D0D0D0]">
            <span className="w-2 h-2 rounded-full bg-[#E5E5E5]" />
            Consultoría y Desarrollo Tecnológico
          </div>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              Tu empresa es única.{" "}
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#E2E2E2] to-[#E5E5E5] bg-clip-text text-transparent block sm:inline">
                Su software también debería serlo.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#D0D0D0] max-w-2xl leading-relaxed">
              Desarrollamos tecnología adaptada a las necesidades de tu empresa.
              Creamos soluciones digitales que responden a tus reglas de negocio específicas, sin los límites de las plataformas genéricas enlatadas.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold text-white bg-[#1B1B1B] hover:bg-[#1E2533] border border-[#E5E5E5]/60 hover:border-[#E5E5E5] rounded-xl transition-all shadow-md group"
            >
              <span>Contanos tu proyecto</span>
              <ArrowRight className="w-4 h-4 text-[#E5E5E5] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 sm:p-7 rounded-2xl bg-[#0E0E0E] border border-[#303030] hover:border-[#E5E5E5]/50 transition-all duration-300 hover:bg-[#121722] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1B1B] border border-[#303030] flex items-center justify-center text-[#E5E5E5] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8F8F8F]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#FFFFFF] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D0D0D0] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#303030]/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8F8F8F]">A medida</span>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, tipoProyecto: service.title }));
                      setInquiryModalOpen(true);
                    }}
                    className="text-xs text-[#E5E5E5] hover:text-[#FFFFFF] font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Principles Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#101010] border border-[#303030] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs font-mono text-[#E5E5E5] font-semibold mb-1">ARQUITECTURA MODERNA</div>
            <p className="text-xs text-[#D0D0D0] leading-relaxed">
              Desarrollamos con tecnologías confiables y código limpio para garantizar mantenibilidad a largo plazo.
            </p>
          </div>
          <div>
            <div className="text-xs font-mono text-[#E5E5E5] font-semibold mb-1">INTERFACES CENTRADAS EN USUARIO</div>
            <p className="text-xs text-[#D0D0D0] leading-relaxed">
              Diseño de experiencia enfocado en la agilidad diaria del usuario empresarial, eliminando fricciones innecesarias.
            </p>
          </div>
          <div>
            <div className="text-xs font-mono text-[#E5E5E5] font-semibold mb-1">ACOMPAÑAMIENTO INTEGRAL</div>
            <p className="text-xs text-[#D0D0D0] leading-relaxed">
              Desde la conceptualización funcional y el prototipado hasta la puesta en marcha y soporte continuo.
            </p>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg bg-[#101010] border border-[#303030] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-[#D0D0D0] hover:text-white p-1"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#FFFFFF]">Consulta recibida</h3>
                <p className="text-xs text-[#D0D0D0] max-w-sm mx-auto leading-relaxed">
                  Gracias por tu interés en nuestros servicios de desarrollo. Nos contactaremos a la brevedad para coordinar una primera conversación técnica.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#E5E5E5] uppercase">
                    Software a Medida
                  </span>
                  <h3 className="text-xl font-bold text-[#FFFFFF] mt-1">
                    Contanos tu proyecto
                  </h3>
                  <p className="text-xs text-[#D0D0D0] mt-1">
                    Completá los datos y nuestro equipo técnico se pondrá en contacto para analizar los requerimientos.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej. Lucas Álvarez"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Nombre de la empresa"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                      Tipo de Solución Requerida
                    </label>
                    <select
                      value={formData.tipoProyecto}
                      onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#303030] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#E5E5E5]"
                    >
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#D0D0D0] mb-1">
                      Breve descripción o necesidad
                    </label>
                    <textarea
                      rows={3}
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      placeholder="Contanos brevemente qué problema buscás resolver o qué características imaginas..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050505] border border-[#303030] text-xs text-[#FFFFFF] placeholder-[#8F8F8F] focus:outline-none focus:border-[#E5E5E5] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-[#050505] font-semibold text-xs hover:bg-[#D1D1D1] transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar solicitud de proyecto</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
