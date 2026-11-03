import { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad — Financhx",
  description: "Tratamiento de datos personales, bases legales y derechos de privacidad de los usuarios en Financhx.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      subtitle="Explicación clara y detallada acerca de cómo recopilamos, procesamos, almacenamos y protegemos sus datos personales conforme a la Ley N° 25.326 y estándares internacionales (RGPD)."
      lastUpdated="Noviembre 2026"
      activeDoc="privacidad"
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. Responsable del Tratamiento de Datos
        </h2>
        <p>
          El responsable del tratamiento de los datos recolectados a través de esta plataforma es:
        </p>
        <div className="bg-[#0D0D0E] border border-zinc-800 rounded-xl p-4 font-mono text-xs text-zinc-300 space-y-1.5">
          <div><strong className="text-white">Responsable:</strong> Financhx Technologies</div>
          <div><strong className="text-white">Finalidad principal:</strong> Provisión de software de conciliación y gestión financiera B2B</div>
          <div><strong className="text-white">Correo de Privacidad / DPO:</strong> <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">legal@financhx.com</a></div>
          <div><strong className="text-white">Jurisdicción de Protección de Datos:</strong> Agencia de Acceso a la Información Pública (AAIP) - República Argentina (Ley 25.326)</div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. Datos Personales que Recopilamos
        </h2>
        <p>
          En función de las interacciones con nuestra landing page y formulario de solicitud de acceso, recopilamos las siguientes categorías de datos:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li><strong>Datos de contacto e identificación corporativa:</strong> Nombre completo, correo electrónico corporativo, nombre de la empresa u organización, y cargo o rol funcional.</li>
          <li><strong>Datos de caracterización empresarial:</strong> Volumen aproximado de transacciones mensuales, entidades bancarias o pasarelas utilizadas y necesidades operativas reportadas voluntariamente.</li>
          <li><strong>Datos técnicos y de navegación:</strong> Dirección IP anonimizada, identificadores de sesión, tipo de navegador, sistema operativo y eventos de interacción con el sitio web (a través de cookies técnicas y de rendimiento consentidas).</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. Finalidades del Tratamiento de Datos
        </h2>
        <p>Los datos suministrados son procesados exclusivamente para:</p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-400">
          <li>Gestionar las solicitudes de <strong>Acceso Anticipado</strong> al programa piloto de Financhx y evaluar la compatibilidad de la empresa con las funcionalidades del sistema.</li>
          <li>Coordinar demostraciones de producto guiadas (demos interactivas) y comunicar actualizaciones de lanzamiento del software.</li>
          <li>Atender consultas, solicitudes de soporte técnico y brindar asistencia pre-contractual.</li>
          <li>Garantizar la seguridad informática, prevenir accesos fraudulentos o abusivos a nuestros servidores y cumplir con requerimientos legales aplicables.</li>
        </ol>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. Base Jurídica y Legitimación
        </h2>
        <p>
          El tratamiento de sus datos se fundamenta legalmente en:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li><strong>El consentimiento expreso del interesado:</strong> Otorgado al completar y enviar de forma voluntaria el formulario de contacto o solicitud de acceso anticipado.</li>
          <li><strong>La aplicación de medidas precontractuales:</strong> Cuando la solicitud implique la cotización, prueba piloto o contratación futura de los servicios de Financhx.</li>
          <li><strong>El interés legítimo:</strong> Para la mejora continua de la infraestructura, seguridad perimetral y prevención de abusos de red.</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. Destinatarios y Proveedores de Servicios (Terceros Confiables)
        </h2>
        <p>
          Financhx <strong>NO comercializa, cede, arrienda ni vende</strong> bajo ninguna circunstancia los datos personales de sus usuarios a terceros para fines de publicidad o marketing ajeno. Compartimos información estrictamente necesaria con proveedores tecnológicos de infraestructura bajo estrictas cláusulas de confidencialidad y procesamiento seguro:
        </p>
        <div className="bg-[#0D0D0E] border border-zinc-800 rounded-xl p-4 font-mono text-xs text-zinc-300 space-y-2">
          <div>• <strong>Resend Inc.:</strong> Infraestructura de entrega de correos transaccionales y notificaciones de confirmación de acceso anticipado.</div>
          <div>• <strong>Supabase Inc. / Vercel Inc.:</strong> Infraestructura de hosting en la nube, autenticación y bases de datos con encriptación en tránsito (TLS 1.3) y en reposo (AES-256).</div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          6. Período de Conservación de Datos
        </h2>
        <p>
          Conservaremos sus datos personales durante el tiempo indispensable para cumplir con la finalidad para la que fueron recabados (por ejemplo, el período de alta y evaluación en el programa beta de Financhx) o hasta que usted ejerza su derecho de supresión o revoque el consentimiento prestado, salvo obligación legal o fiscal de retención.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          7. Derechos del Usuario (ARCO y RGPD)
        </h2>
        <p>
          En virtud de la <strong>Ley N° 25.326 de Protección de los Datos Personales</strong> de la República Argentina y directivas equivalentes internacionales, usted tiene pleno derecho a:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
          <li><strong>Acceso:</strong> Solicitar constancia de los datos personales almacenados en nuestros registros.</li>
          <li><strong>Rectificación o Actualización:</strong> Modificar datos inexactos, incompletos o desactualizados.</li>
          <li><strong>Supresión (Derecho al Olvido):</strong> Solicitar la eliminación definitiva de sus datos de nuestros registros.</li>
          <li><strong>Oposición y Limitación:</strong> Oponerse al tratamiento para fines específicos o solicitar la limitación del mismo.</li>
        </ul>
        <p className="mt-3">
          Para ejercer cualquiera de estos derechos, envíe una solicitud por escrito acreditando su identidad a:{" "}
          <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">
            legal@financhx.com
          </a>
          . Responderemos a su solicitud dentro de los plazos estipulados por la ley (máximo de 10 días hábiles en Argentina).
        </p>
        <p className="text-xs text-zinc-500 pt-2">
          * La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes de protección de datos personales.
        </p>
      </section>
    </LegalLayout>
  );
}

