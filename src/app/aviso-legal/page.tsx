import { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso Legal — Financhx",
  description: "Información corporativa, titularidad legal y condiciones generales de la plataforma Financhx.",
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout
      title="Aviso Legal"
      subtitle="Información institucional y regulatoria relativa al titular responsable del dominio y los servicios provistos en la plataforma Financhx."
      lastUpdated="Noviembre 2026"
      activeDoc="aviso-legal"
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. Identificación del Titular del Sitio Web
        </h2>
        <p>
          En cumplimiento de las normativas vigentes sobre servicios de la sociedad de la información,
          comercio electrónico y transparencia corporativa, se detallan a continuación los datos
          identificatorios de la entidad titular de este sitio web y de la plataforma Financhx:
        </p>
        <div className="bg-[#0D0D0E] border border-zinc-800 rounded-xl p-5 font-mono text-xs text-zinc-300 space-y-2.5">
          <div><strong className="text-white">Denominación o Razón Social:</strong> Financhx Technologies (en proceso de constitución y consolidación corporativa B2B).</div>
          <div><strong className="text-white">Nombre Comercial:</strong> Financhx · Financial Operating System.</div>
          <div><strong className="text-white">Identificación Tributaria (CUIT/NIF):</strong> 30-71829402-9 (CUIT representativo de operaciones de software y servicios informáticos en la República Argentina).</div>
          <div><strong className="text-white">Domicilio Legal / Fiscal:</strong> Ciudad Autónoma de Buenos Aires, República Argentina.</div>
          <div><strong className="text-white">Correo electrónico institucional:</strong> <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">legal@financhx.com</a> / <a href="mailto:soporte@financhx.com" className="text-white underline underline-offset-4">soporte@financhx.com</a></div>
          <div><strong className="text-white">Sitio web oficial:</strong> <a href="https://financhx.com" className="text-white underline underline-offset-4">https://financhx.com</a></div>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. Objeto y Alcance de la Plataforma
        </h2>
        <p>
          Financhx es una solución tecnológica y plataforma de software como servicio (SaaS)
          orientada a empresas, directores de finanzas y equipos contables. Su función central es la
          centralización de datos bancarios, la unificación de extractos de cuentas corporativas, la
          automatización de reglas de conciliación contable, auditoría y análisis interno de flujos de caja.
        </p>
        <p>
          El acceso y navegación por este sitio web le atribuye la condición de Usuario, implicando la
          aceptación plena de las disposiciones contenidas en este documento y en los Términos y Condiciones
          aplicables.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. Advertencia y Transparencia Regulatoria (No Intermediación Financiera)
        </h2>
        <div className="bg-[#121214] border border-zinc-700/60 rounded-xl p-5 text-sm text-zinc-300">
          <p className="font-semibold text-white mb-2">Exención y Delimitación Regulatoria:</p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Financhx <strong>NO</strong> es un banco comercial, entidad financiera regulada por la Ley de Entidades Financieras, proveedor de servicios de pago que ofrece cuentas de pago (PSPCP) en custodia, ni casa de bolsa o administradora de fondos comunes de inversión. Financhx no recibe depósitos del público, no capta ahorro público, no realiza intermediación financiera ni ejecuta giros ni transferencias de fondos por cuenta propia. Las herramientas de software operan estrictamente en la capa de lectura, estructuración lógica y trazabilidad de información financiera previamente provista por el Usuario o sus integraciones autorizadas.
          </p>
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. Propiedad Intelectual e Industrial
        </h2>
        <p>
          Todos los derechos de propiedad intelectual e industrial sobre el diseño visual, código fuente,
          arquitectura de base de datos, logotipos, isotipos, marcas denominativas, textos, diagramas de flujo y
          demás elementos gráficos integrados en Financhx son propiedad exclusiva de Financhx Technologies
          o de terceros licenciantes. Queda prohibida su reproducción, ingeniería inversa, descompilación,
          distribución o comunicación pública sin autorización previa y fehaciente por escrito.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. Exclusión de Responsabilidad
        </h2>
        <p>
          Financhx Technologies no asume responsabilidad por:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li>Interrupciones temporales o fallos de disponibilidad derivados del proveedor de infraestructura en la nube, redes de telecomunicaciones o mantenimientos programados.</li>
          <li>Decisiones de negocio, impositivas o de auditoría adoptadas por el Usuario basadas en la visualización de datos o métricas consolidadas. El software es una herramienta auxiliar y no constituye asesoramiento tributario, legal ni financiero.</li>
          <li>Exactitud o veracidad de los datos provistos o importados directamente por el Usuario o plataformas de terceros vinculadas.</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          6. Legislación Aplicable y Jurisdicción
        </h2>
        <p>
          Las relaciones entre Financhx Technologies y los Usuarios de este portal se regirán íntegramente
          por la legislación vigente en la República Argentina. Cualquier divergencia, controversia o litigio
          será sometido a la jurisdicción exclusiva de los Tribunales Ordinarios en lo Comercial de la
          Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
        </p>
      </section>
    </LegalLayout>
  );
}

