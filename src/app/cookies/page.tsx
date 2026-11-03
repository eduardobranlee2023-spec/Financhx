import { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies — Financhx",
  description: "Información detallada sobre las cookies utilizadas en Financhx y cómo administrarlas o desactivarlas.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      subtitle="Detalle completo de las cookies, identificadores locales y tecnologías de seguimiento empleadas en la plataforma Financhx, sus finalidades y mecanismos de control por el usuario."
      lastUpdated="Noviembre 2026"
      activeDoc="cookies"
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. ¿Qué es una Cookie?
        </h2>
        <p>
          Una cookie es un pequeño archivo de texto que un sitio web descarga y almacena en su
          dispositivo (ordenador, teléfono móvil o tablet) cuando usted navega por él. Las cookies
          permiten que el sitio web reconozca su dispositivo, recuerde sus acciones o preferencias
          (como el consentimiento de privacidad o el tema visual) y compile información agregada y
          anónima sobre el tráfico y uso de la aplicación.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. Tipos de Cookies que Empleamos
        </h2>
        <p>En Financhx clasificamos las cookies y mecanismos de almacenamiento en dos categorías principales:</p>
        
        <div className="space-y-4">
          <div className="bg-[#0D0D0E] border border-zinc-800 p-4 rounded-xl">
            <h3 className="text-sm font-semibold text-white">A. Cookies Técnicas y Estrictamente Necesarias</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Son indispensables para el funcionamiento correcto y seguro de la página web. Permiten la
              navegación entre rutas de la aplicación Next.js, la gestión de sesiones de seguridad contra
              ataques de falsificación de peticiones (CSRF) y la persistencia de las preferencias de privacidad
              elegidas por el usuario. No requieren de su consentimiento previo para ser activadas.
            </p>
          </div>

          <div className="bg-[#0D0D0E] border border-zinc-800 p-4 rounded-xl">
            <h3 className="text-sm font-semibold text-white">B. Cookies Analíticas y de Rendimiento</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Nos permiten medir el número de visitantes, identificar qué secciones o módulos resultan de mayor
              interés y detectar posibles fallos o demoras en la carga de la plataforma. La información recopilada
              es completamente anónima y agregada; nunca se vincula con la identidad individual del usuario ni
              se utiliza para generar perfiles publicitarios.
            </p>
          </div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. Inventario Detallado de Cookies Utilizadas
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-zinc-800 rounded-lg overflow-hidden">
            <thead className="bg-[#121214] text-zinc-300 font-mono">
              <tr>
                <th className="p-3 border-b border-zinc-800">Nombre</th>
                <th className="p-3 border-b border-zinc-800">Tipo</th>
                <th className="p-3 border-b border-zinc-800">Origen</th>
                <th className="p-3 border-b border-zinc-800">Finalidad</th>
                <th className="p-3 border-b border-zinc-800">Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 font-mono text-zinc-400">
              <tr>
                <td className="p-3 text-white font-semibold">financhx_cookie_consent</td>
                <td className="p-3">Técnica (Local)</td>
                <td className="p-3">Propia</td>
                <td className="p-3">Almacena la elección de consentimiento del usuario sobre cookies analíticas.</td>
                <td className="p-3">1 año</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-semibold">__next_preview_data</td>
                <td className="p-3">Técnica</td>
                <td className="p-3">Propia</td>
                <td className="p-3">Gestión de estados de renderizado en Next.js App Router.</td>
                <td className="p-3">Sesión</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-semibold">_va_session / _vercel_jwt</td>
                <td className="p-3">Técnica / Analítica</td>
                <td className="p-3">Vercel Cloud</td>
                <td className="p-3">Monitoreo de latencia, salud del servidor y optimización del tráfico CDN.</td>
                <td className="p-3">24 horas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. ¿Cómo Desactivar o Eliminar las Cookies en su Navegador?
        </h2>
        <p>
          Usted puede en cualquier momento restringir, bloquear o eliminar las cookies configuradas por este
          sitio o cualquier otro, ajustando la configuración de su navegador web. A continuación le indicamos
          las guías oficiales según el navegador que utilice:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies de terceros &gt; Bloquear cookies.</li>
          <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio &gt; Limpiar datos.</li>
          <li><strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies o gestionar datos de sitios web.</li>
          <li><strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio &gt; Administrar y eliminar cookies y datos del sitio.</li>
        </ul>
        <p className="text-xs text-zinc-500 pt-2">
          Tenga en cuenta que si inhabilita todas las cookies técnicas, ciertas funciones básicas o de navegación segura del sitio podrían verse afectadas.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. Contacto y Consultas
        </h2>
        <p>
          Si tiene dudas o inquietudes sobre nuestra Política de Cookies, puede escribirnos directamente a:{" "}
          <a href="mailto:soporte@financhx.com" className="text-white underline underline-offset-4">
            soporte@financhx.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
