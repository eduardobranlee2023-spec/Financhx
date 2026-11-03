import { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/dictionaries/dictionaries";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "en" ? "Legal Notice — Financhx" : "Aviso Legal — Financhx",
    description: lang === "en"
      ? "Corporate information, legal ownership and general conditions of the Financhx platform."
      : "Información corporativa, titularidad legal y condiciones generales de la plataforma Financhx.",
  };
}

export default async function AvisoLegalPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const isEn = lang === "en";

  return (
    <LegalLayout
      title={isEn ? "Legal Notice" : "Aviso Legal"}
      subtitle={isEn
        ? "Institutional and regulatory information about the responsible owner of the domain and the services provided on the Financhx platform."
        : "Información institucional y regulatoria relativa al titular responsable del dominio y los servicios provistos en la plataforma Financhx."}
      lastUpdated={isEn ? "November 2026" : "Noviembre 2026"}
      activeDoc="aviso-legal"
      lang={lang}
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. {isEn ? "Website Owner Identification" : "Identificación del Titular del Sitio Web"}
        </h2>
        <p>
          {isEn
            ? "In compliance with current regulations on information society services, e-commerce and corporate transparency, the identifying details of the entity owning this website and the Financhx platform are set out below:"
            : "En cumplimiento de las normativas vigentes sobre servicios de la sociedad de la información, comercio electrónico y transparencia corporativa, se detallan a continuación los datos identificatorios de la entidad titular de este sitio web y de la plataforma Financhx:"}
        </p>
        <div className="bg-[#0D0D0E] border border-zinc-800 rounded-xl p-5 font-mono text-xs text-zinc-300 space-y-2.5">
          <div><strong className="text-white">{isEn ? "Legal Name:" : "Denominación o Razón Social:"}</strong> Financhx Technologies {isEn ? "(in process of B2B corporate consolidation)" : "(en proceso de constitución y consolidación corporativa B2B)"}.</div>
          <div><strong className="text-white">{isEn ? "Trade Name:" : "Nombre Comercial:"}</strong> Financhx · Financial Operating System.</div>
          <div><strong className="text-white">{isEn ? "Tax ID (CUIT/NIF):" : "Identificación Tributaria (CUIT/NIF):"}</strong> 30-71829402-9 (CUIT {isEn ? "for software and IT services in Argentina" : "representativo de operaciones de software y servicios informáticos en la República Argentina"}).</div>
          <div><strong className="text-white">{isEn ? "Legal / Fiscal Address:" : "Domicilio Legal / Fiscal:"}</strong> Ciudad Autónoma de Buenos Aires, República Argentina.</div>
          <div><strong className="text-white">{isEn ? "Institutional email:" : "Correo electrónico institucional:"}</strong>{" "}
            <a href="mailto:info@financhx.com" className="text-white underline underline-offset-4">info@financhx.com</a> /{" "}
            <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">legal@financhx.com</a> /{" "}
            <a href="mailto:soporte@financhx.com" className="text-white underline underline-offset-4">soporte@financhx.com</a>
          </div>
          <div><strong className="text-white">{isEn ? "Official website:" : "Sitio web oficial:"}</strong> <a href="https://financhx.com" className="text-white underline underline-offset-4">https://financhx.com</a></div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. {isEn ? "Platform Object and Scope" : "Objeto y Alcance de la Plataforma"}
        </h2>
        <p>
          {isEn
            ? "Financhx is a software-as-a-service (SaaS) platform for companies, CFOs and accounting teams. Its core function is the centralization of bank data, unification of corporate account statements, automation of accounting reconciliation rules, audit and internal cash flow analysis."
            : "Financhx es una solución tecnológica y plataforma de software como servicio (SaaS) orientada a empresas, directores de finanzas y equipos contables. Su función central es la centralización de datos bancarios, la unificación de extractos de cuentas corporativas, la automatización de reglas de conciliación contable, auditoría y análisis interno de flujos de caja."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. {isEn ? "Regulatory Disclaimer (No Financial Intermediation)" : "Advertencia y Transparencia Regulatoria (No Intermediación Financiera)"}
        </h2>
        <div className="bg-[#121214] border border-zinc-700/60 rounded-xl p-5 text-sm text-zinc-300">
          <p className="font-semibold text-white mb-2">{isEn ? "Regulatory Disclaimer:" : "Exención y Delimitación Regulatoria:"}</p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {isEn
              ? "Financhx is NOT a commercial bank, financial entity regulated under Financial Institutions Law, payment service provider offering custodial payment accounts (PSPCP), brokerage firm or investment fund manager. Financhx does not accept public deposits, does not capture public savings, does not engage in financial intermediation, and does not execute wire transfers or fund transfers on its own account. All software tools operate strictly at the layer of reading, logical structuring and traceability of financial information previously provided by the User or their authorized integrations."
              : "Financhx NO es un banco comercial, entidad financiera regulada por la Ley de Entidades Financieras, proveedor de servicios de pago que ofrece cuentas de pago (PSPCP) en custodia, ni casa de bolsa o administradora de fondos comunes de inversión. Financhx no recibe depósitos del público, no capta ahorro público, no realiza intermediación financiera ni ejecuta giros ni transferencias de fondos por cuenta propia. Las herramientas de software operan estrictamente en la capa de lectura, estructuración lógica y trazabilidad de información financiera previamente provista por el Usuario o sus integraciones autorizadas."}
          </p>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. {isEn ? "Intellectual and Industrial Property" : "Propiedad Intelectual e Industrial"}
        </h2>
        <p>
          {isEn
            ? "All intellectual and industrial property rights over the visual design, source code, database architecture, logos, trademarks, texts, flowcharts and other graphic elements integrated into Financhx are the exclusive property of Financhx Technologies or third-party licensors. Their reproduction, reverse engineering, decompilation, distribution or public communication without prior written authorization is strictly prohibited."
            : "Todos los derechos de propiedad intelectual e industrial sobre el diseño visual, código fuente, arquitectura de base de datos, logotipos, isotipos, marcas denominativas, textos, diagramas de flujo y demás elementos gráficos integrados en Financhx son propiedad exclusiva de Financhx Technologies o de terceros licenciantes. Queda prohibida su reproducción, ingeniería inversa, descompilación, distribución o comunicación pública sin autorización previa y fehaciente por escrito."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. {isEn ? "Limitation of Liability" : "Exclusión de Responsabilidad"}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li>{isEn ? "Temporary interruptions or availability failures resulting from the cloud infrastructure provider, telecommunications networks or scheduled maintenance." : "Interrupciones temporales o fallos de disponibilidad derivados del proveedor de infraestructura en la nube, redes de telecomunicaciones o mantenimientos programados."}</li>
          <li>{isEn ? "Business, tax or audit decisions made by the User based on visualized data or consolidated metrics. The software is an auxiliary tool and does not constitute tax, legal or financial advice." : "Decisiones de negocio, impositivas o de auditoría adoptadas por el Usuario basadas en la visualización de datos o métricas consolidadas. El software es una herramienta auxiliar y no constituye asesoramiento tributario, legal ni financiero."}</li>
          <li>{isEn ? "Accuracy or veracity of data provided or imported directly by the User or linked third-party platforms." : "Exactitud o veracidad de los datos provistos o importados directamente por el Usuario o plataformas de terceros vinculadas."}</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          6. {isEn ? "Applicable Law and Jurisdiction" : "Legislación Aplicable y Jurisdicción"}
        </h2>
        <p>
          {isEn
            ? "The relationship between Financhx Technologies and Users of this portal shall be governed entirely by the laws in force in the Republic of Argentina. Any dispute, controversy or litigation shall be submitted to the exclusive jurisdiction of the Ordinary Commercial Courts of the Autonomous City of Buenos Aires, with express waiver of any other jurisdiction that may correspond."
            : "Las relaciones entre Financhx Technologies y los Usuarios de este portal se regirán íntegramente por la legislación vigente en la República Argentina. Cualquier divergencia, controversia o litigio será sometido a la jurisdicción exclusiva de los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero que pudiera corresponder."}
        </p>
      </section>
    </LegalLayout>
  );
}
