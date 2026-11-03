import { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/dictionaries/dictionaries";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "en" ? "Privacy Policy — Financhx" : "Política de Privacidad — Financhx",
  };
}

export default async function PrivacidadPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const isEn = lang === "en";

  return (
    <LegalLayout
      title={isEn ? "Privacy Policy" : "Política de Privacidad"}
      subtitle={isEn
        ? "Clear and detailed explanation of how we collect, process, store and protect your personal data in accordance with Law No. 25,326 and international standards (GDPR)."
        : "Explicación clara y detallada acerca de cómo recopilamos, procesamos, almacenamos y protegemos sus datos personales conforme a la Ley N° 25.326 y estándares internacionales (RGPD)."}
      lastUpdated={isEn ? "November 2026" : "Noviembre 2026"}
      activeDoc="privacidad"
      lang={lang}
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. {isEn ? "Data Controller" : "Responsable del Tratamiento de Datos"}
        </h2>
        <p>{isEn
          ? "The controller of the data collected through this platform is:"
          : "El responsable del tratamiento de los datos recolectados a través de esta plataforma es:"}
        </p>
        <div className="bg-[#0D0D0E] border border-zinc-800 rounded-xl p-4 font-mono text-xs text-zinc-300 space-y-1.5">
          <div><strong className="text-white">{isEn ? "Controller:" : "Responsable:"}</strong> Financhx Technologies</div>
          <div><strong className="text-white">{isEn ? "Main purpose:" : "Finalidad principal:"}</strong> {isEn ? "B2B financial reconciliation and management software provision" : "Provisión de software de conciliación y gestión financiera B2B"}</div>
          <div><strong className="text-white">{isEn ? "Privacy / DPO Contact:" : "Correo de Privacidad / DPO:"}</strong>{" "}
            <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">legal@financhx.com</a>
          </div>
          <div><strong className="text-white">{isEn ? "Data Protection Authority:" : "Jurisdicción de Protección de Datos:"}</strong> {isEn ? "Agencia de Acceso a la Información Pública (AAIP) - Argentina (Law 25,326)" : "Agencia de Acceso a la Información Pública (AAIP) - República Argentina (Ley 25.326)"}</div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. {isEn ? "Personal Data We Collect" : "Datos Personales que Recopilamos"}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li><strong>{isEn ? "Contact and corporate identification data:" : "Datos de contacto e identificación corporativa:"}</strong> {isEn ? "Full name, corporate email address, company name, and job title or functional role." : "Nombre completo, correo electrónico corporativo, nombre de la empresa u organización, y cargo o rol funcional."}</li>
          <li><strong>{isEn ? "Business characterization data:" : "Datos de caracterización empresarial:"}</strong> {isEn ? "Approximate monthly transaction volume, banking entities or gateways used and voluntarily reported operational needs." : "Volumen aproximado de transacciones mensuales, entidades bancarias o pasarelas utilizadas y necesidades operativas reportadas voluntariamente."}</li>
          <li><strong>{isEn ? "Technical and navigation data:" : "Datos técnicos y de navegación:"}</strong> {isEn ? "Anonymized IP address, session identifiers, browser type, operating system and site interaction events (via consented technical and performance cookies)." : "Dirección IP anonimizada, identificadores de sesión, tipo de navegador, sistema operativo y eventos de interacción con el sitio web (a través de cookies técnicas y de rendimiento consentidas)."}</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. {isEn ? "Purposes of Data Processing" : "Finalidades del Tratamiento de Datos"}
        </h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-400">
          <li>{isEn ? "Manage Early Access requests to the Financhx pilot program and assess company compatibility with system features." : "Gestionar las solicitudes de Acceso Anticipado al programa piloto de Financhx y evaluar la compatibilidad de la empresa con las funcionalidades del sistema."}</li>
          <li>{isEn ? "Coordinate guided product demonstrations and communicate software launch updates." : "Coordinar demostraciones de producto guiadas (demos interactivas) y comunicar actualizaciones de lanzamiento del software."}</li>
          <li>{isEn ? "Respond to inquiries, technical support requests and provide pre-contractual assistance." : "Atender consultas, solicitudes de soporte técnico y brindar asistencia pre-contractual."}</li>
          <li>{isEn ? "Ensure IT security, prevent fraudulent or abusive access to our servers and comply with applicable legal requirements." : "Garantizar la seguridad informática, prevenir accesos fraudulentos o abusivos a nuestros servidores y cumplir con requerimientos legales aplicables."}</li>
        </ol>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. {isEn ? "Legal Basis and Legitimacy" : "Base Jurídica y Legitimación"}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li><strong>{isEn ? "Explicit consent of the data subject:" : "El consentimiento expreso del interesado:"}</strong> {isEn ? "Granted by voluntarily completing and submitting the contact or early access request form." : "Otorgado al completar y enviar de forma voluntaria el formulario de contacto o solicitud de acceso anticipado."}</li>
          <li><strong>{isEn ? "Pre-contractual measures:" : "La aplicación de medidas precontractuales:"}</strong> {isEn ? "When the request involves a quote, pilot test or future contracting of Financhx services." : "Cuando la solicitud implique la cotización, prueba piloto o contratación futura de los servicios de Financhx."}</li>
          <li><strong>{isEn ? "Legitimate interest:" : "El interés legítimo:"}</strong> {isEn ? "For continuous improvement of infrastructure, perimeter security and network abuse prevention." : "Para la mejora continua de la infraestructura, seguridad perimetral y prevención de abusos de red."}</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. {isEn ? "Recipients and Service Providers (Trusted Third Parties)" : "Destinatarios y Proveedores de Servicios (Terceros Confiables)"}
        </h2>
        <p>
          {isEn
            ? "Financhx does NOT sell, transfer, lease or share personal data for third-party advertising or marketing purposes under any circumstances. We share strictly necessary information with technology infrastructure providers under strict confidentiality and secure processing clauses:"
            : "Financhx NO comercializa, cede, arrienda ni vende bajo ninguna circunstancia los datos personales de sus usuarios a terceros para fines de publicidad o marketing ajeno. Compartimos información estrictamente necesaria con proveedores tecnológicos de infraestructura bajo estrictas cláusulas de confidencialidad y procesamiento seguro:"}
        </p>
        <div className="bg-[#0D0D0E] border border-zinc-800 rounded-xl p-4 font-mono text-xs text-zinc-300 space-y-2">
          <div>• <strong>Resend Inc.:</strong> {isEn ? "Transactional email delivery infrastructure and early access confirmation notifications." : "Infraestructura de entrega de correos transaccionales y notificaciones de confirmación de acceso anticipado."}</div>
          <div>• <strong>Supabase Inc. / Vercel Inc.:</strong> {isEn ? "Cloud hosting infrastructure, authentication and databases with in-transit (TLS 1.3) and at-rest (AES-256) encryption." : "Infraestructura de hosting en la nube, autenticación y bases de datos con encriptación en tránsito (TLS 1.3) y en reposo (AES-256)."}</div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          6. {isEn ? "Data Retention Period" : "Período de Conservación de Datos"}
        </h2>
        <p>
          {isEn
            ? "We will retain your personal data for the time strictly necessary to fulfill the purpose for which it was collected (e.g., the enrollment and assessment period in the Financhx beta program) or until you exercise your right of erasure or revoke the consent provided, except for legal or tax retention obligations."
            : "Conservaremos sus datos personales durante el tiempo indispensable para cumplir con la finalidad para la que fueron recabados (por ejemplo, el período de alta y evaluación en el programa beta de Financhx) o hasta que usted ejerza su derecho de supresión o revoque el consentimiento prestado, salvo obligación legal o fiscal de retención."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          7. {isEn ? "User Rights (ARCO and GDPR)" : "Derechos del Usuario (ARCO y RGPD)"}
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
          <li><strong>{isEn ? "Access:" : "Acceso:"}</strong> {isEn ? "Request a record of the personal data stored in our records." : "Solicitar constancia de los datos personales almacenados en nuestros registros."}</li>
          <li><strong>{isEn ? "Rectification or Update:" : "Rectificación o Actualización:"}</strong> {isEn ? "Modify inaccurate, incomplete or outdated data." : "Modificar datos inexactos, incompletos o desactualizados."}</li>
          <li><strong>{isEn ? "Erasure (Right to be Forgotten):" : "Supresión (Derecho al Olvido):"}</strong> {isEn ? "Request permanent deletion of your data from our records." : "Solicitar la eliminación definitiva de sus datos de nuestros registros."}</li>
          <li><strong>{isEn ? "Objection and Restriction:" : "Oposición y Limitación:"}</strong> {isEn ? "Object to processing for specific purposes or request its restriction." : "Oponerse al tratamiento para fines específicos o solicitar la limitación del mismo."}</li>
        </ul>
        <p className="mt-3">
          {isEn
            ? "To exercise any of these rights, please send a written request verifying your identity to: "
            : "Para ejercer cualquiera de estos derechos, envíe una solicitud por escrito acreditando su identidad a: "}
          <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">
            legal@financhx.com
          </a>
          {isEn
            ? ". We will respond within the legally stipulated timeframes."
            : ". Responderemos a su solicitud dentro de los plazos estipulados por la ley (máximo de 10 días hábiles en Argentina)."}
        </p>
      </section>
    </LegalLayout>
  );
}
