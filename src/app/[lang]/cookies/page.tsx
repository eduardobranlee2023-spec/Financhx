import { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/dictionaries/dictionaries";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "en" ? "Cookie Policy — Financhx" : "Política de Cookies — Financhx" };
}

export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }

export default async function CookiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const isEn = lang === "en";

  return (
    <LegalLayout
      title={isEn ? "Cookie Policy" : "Política de Cookies"}
      subtitle={isEn
        ? "Full detail of cookies, local identifiers and tracking technologies used on the Financhx platform, their purposes and user control mechanisms."
        : "Detalle completo de las cookies, identificadores locales y tecnologías de seguimiento empleadas en la plataforma Financhx, sus finalidades y mecanismos de control por el usuario."}
      lastUpdated={isEn ? "November 2026" : "Noviembre 2026"}
      activeDoc="cookies"
      lang={lang}
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. {isEn ? "What is a Cookie?" : "¿Qué es una Cookie?"}
        </h2>
        <p>
          {isEn
            ? "A cookie is a small text file that a website downloads and stores on your device (computer, mobile phone or tablet) when you browse it. Cookies allow the website to recognize your device, remember your actions or preferences (such as privacy consent or visual theme) and compile aggregated, anonymous information about traffic and application usage."
            : "Una cookie es un pequeño archivo de texto que un sitio web descarga y almacena en su dispositivo (ordenador, teléfono móvil o tablet) cuando usted navega por él. Las cookies permiten que el sitio web reconozca su dispositivo, recuerde sus acciones o preferencias (como el consentimiento de privacidad o el tema visual) y compile información agregada y anónima sobre el tráfico y uso de la aplicación."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. {isEn ? "Types of Cookies We Use" : "Tipos de Cookies que Empleamos"}
        </h2>
        <div className="space-y-4">
          <div className="bg-[#0D0D0E] border border-zinc-800 p-4 rounded-xl">
            <h3 className="text-sm font-semibold text-white">A. {isEn ? "Technical and Strictly Necessary Cookies" : "Cookies Técnicas y Estrictamente Necesarias"}</h3>
            <p className="text-xs text-zinc-400 mt-1">
              {isEn
                ? "They are essential for the correct and secure operation of the web page. They enable navigation between Next.js application routes, session management against CSRF attacks and persistence of user privacy preferences. They do not require your prior consent to be activated."
                : "Son indispensables para el funcionamiento correcto y seguro de la página web. Permiten la navegación entre rutas de la aplicación Next.js, la gestión de sesiones de seguridad contra ataques de falsificación de peticiones (CSRF) y la persistencia de las preferencias de privacidad elegidas por el usuario. No requieren de su consentimiento previo para ser activadas."}
            </p>
          </div>
          <div className="bg-[#0D0D0E] border border-zinc-800 p-4 rounded-xl">
            <h3 className="text-sm font-semibold text-white">B. {isEn ? "Analytics and Performance Cookies" : "Cookies Analíticas y de Rendimiento"}</h3>
            <p className="text-xs text-zinc-400 mt-1">
              {isEn
                ? "They allow us to measure the number of visitors, identify which sections or modules are of most interest, and detect possible failures or delays in platform loading. The information collected is completely anonymous and aggregated; it is never linked to the individual identity of the user nor used to generate advertising profiles."
                : "Nos permiten medir el número de visitantes, identificar qué secciones o módulos resultan de mayor interés y detectar posibles fallos o demoras en la carga de la plataforma. La información recopilada es completamente anónima y agregada; nunca se vincula con la identidad individual del usuario ni se utiliza para generar perfiles publicitarios."}
            </p>
          </div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. {isEn ? "Detailed Cookie Inventory" : "Inventario Detallado de Cookies Utilizadas"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-zinc-800 rounded-lg overflow-hidden">
            <thead className="bg-[#121214] text-zinc-300 font-mono">
              <tr>
                <th className="p-3 border-b border-zinc-800">{isEn ? "Name" : "Nombre"}</th>
                <th className="p-3 border-b border-zinc-800">{isEn ? "Type" : "Tipo"}</th>
                <th className="p-3 border-b border-zinc-800">{isEn ? "Origin" : "Origen"}</th>
                <th className="p-3 border-b border-zinc-800">{isEn ? "Purpose" : "Finalidad"}</th>
                <th className="p-3 border-b border-zinc-800">{isEn ? "Duration" : "Duración"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 font-mono text-zinc-400">
              <tr>
                <td className="p-3 text-white font-semibold">financhx_cookie_consent</td>
                <td className="p-3">{isEn ? "Technical (Local)" : "Técnica (Local)"}</td>
                <td className="p-3">{isEn ? "Own" : "Propia"}</td>
                <td className="p-3">{isEn ? "Stores user cookie consent choice for analytics cookies." : "Almacena la elección de consentimiento del usuario sobre cookies analíticas."}</td>
                <td className="p-3">{isEn ? "1 year" : "1 año"}</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-semibold">__next_preview_data</td>
                <td className="p-3">{isEn ? "Technical" : "Técnica"}</td>
                <td className="p-3">{isEn ? "Own" : "Propia"}</td>
                <td className="p-3">{isEn ? "Rendering state management in Next.js App Router." : "Gestión de estados de renderizado en Next.js App Router."}</td>
                <td className="p-3">{isEn ? "Session" : "Sesión"}</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-semibold">_va_session / _vercel_jwt</td>
                <td className="p-3">{isEn ? "Technical / Analytics" : "Técnica / Analítica"}</td>
                <td className="p-3">Vercel Cloud</td>
                <td className="p-3">{isEn ? "Latency monitoring, server health and CDN traffic optimization." : "Monitoreo de latencia, salud del servidor y optimización del tráfico CDN."}</td>
                <td className="p-3">24 {isEn ? "hours" : "horas"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. {isEn ? "How to Disable or Delete Cookies in Your Browser" : "¿Cómo Desactivar o Eliminar las Cookies en su Navegador?"}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li><strong>Google Chrome:</strong> {isEn ? "Settings › Privacy and security › Third-party cookies › Block cookies." : "Configuración › Privacidad y seguridad › Cookies de terceros › Bloquear cookies."}</li>
          <li><strong>Mozilla Firefox:</strong> {isEn ? "Options › Privacy & Security › Cookies and Site Data › Clear Data." : "Opciones › Privacidad y seguridad › Cookies y datos del sitio › Limpiar datos."}</li>
          <li><strong>Apple Safari:</strong> {isEn ? "Preferences › Privacy › Block All Cookies or manage website data." : "Preferencias › Privacidad › Bloquear todas las cookies o gestionar datos de sitios web."}</li>
          <li><strong>Microsoft Edge:</strong> {isEn ? "Settings › Cookies and site permissions › Manage and delete cookies and site data." : "Configuración › Cookies y permisos del sitio › Administrar y eliminar cookies y datos del sitio."}</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. {isEn ? "Contact" : "Contacto y Consultas"}
        </h2>
        <p>
          {isEn ? "If you have questions or concerns about our Cookie Policy, please write to us at: " : "Si tiene dudas o inquietudes sobre nuestra Política de Cookies, puede escribirnos directamente a: "}
          <a href="mailto:soporte@financhx.com" className="text-white underline underline-offset-4">soporte@financhx.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
