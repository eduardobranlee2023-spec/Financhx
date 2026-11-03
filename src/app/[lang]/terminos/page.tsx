import { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/dictionaries/dictionaries";
import { LegalLayout } from "@/components/LegalLayout";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "en" ? "Terms & Conditions — Financhx" : "Términos y Condiciones — Financhx" };
}

export default async function TerminosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const isEn = lang === "en";

  return (
    <LegalLayout
      title={isEn ? "Terms & Conditions" : "Términos y Condiciones"}
      subtitle={isEn
        ? "Rules and conditions applicable to access, navigation and use of the Financhx web platform and early access (Beta) program."
        : "Reglas y condiciones aplicables al acceso, navegación y uso de la plataforma web y del programa de acceso anticipado (Beta) de Financhx."}
      lastUpdated={isEn ? "November 2026" : "Noviembre 2026"}
      activeDoc="terminos"
      lang={lang}
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. {isEn ? "Acceptance of Terms" : "Aceptación de los Términos"}
        </h2>
        <p>
          {isEn
            ? "This contract governs the terms and conditions applicable to all users and companies interested in accessing the website and requesting participation in the pilot program or deployment of Financhx (hereinafter, the \"Platform\"), operated by Financhx Technologies. By accessing or submitting requests on the site, you declare that you have legal capacity to be bound or to act on behalf of the legal entity or company to which you belong."
            : "El presente contrato regula los términos y condiciones de uso aplicables a todos los usuarios y empresas interesadas en acceder al sitio web y solicitar participación en el programa piloto o despliegue de Financhx (en adelante, la \"Plataforma\"), operada por Financhx Technologies. Al ingresar o enviar solicitudes en el sitio, usted declara contar con capacidad jurídica legal para obligarse o para actuar en representación de la persona jurídica o empresa a la que pertenece."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. {isEn ? "Service Description and Nature of the Software" : "Descripción del Servicio y Naturaleza del Software"}
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
          <li>{isEn ? "Normalization and unification of statements and movements from bank accounts and payment gateways." : "Normalización y unificación de extractos y movimientos procedentes de cuentas bancarias y pasarelas de pago."}</li>
          <li>{isEn ? "Generation of cross-reconciliation rules for collections and invoicing." : "Generación de reglas de conciliación cruzada de cobros y facturación."}</li>
          <li>{isEn ? "Immutable accounting record, internal audit control and real-time cash flow visualization." : "Registro contable inmutable, control de auditoría interna y visualización de flujo de caja en tiempo real."}</li>
        </ul>
        <div className="bg-[#121214] border border-zinc-700/60 rounded-xl p-4 text-xs text-zinc-300">
          <strong>{isEn ? "Explicit Disclaimer:" : "Aclaración taxativa:"}</strong>{" "}
          {isEn
            ? "Financhx operates exclusively as a technology and auxiliary management software provider. The Platform does not offer custody of bank balances, does not accept monetary deposits, and does not manage investment portfolios."
            : "Financhx opera exclusivamente como un proveedor de tecnología y software auxiliar de gestión. La Plataforma no ofrece custodia de saldos bancarios, no capta depósitos dinerarios ni administra carteras de inversión."}
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. {isEn ? "Early Access and Private Pilot Phase" : "Acceso Anticipado y Fase Piloto Privada"}
        </h2>
        <p>
          {isEn
            ? "Registration through the \"Request Early Access\" form does not automatically grant a use license nor obligate Financhx Technologies to admit the applicant to the pilot program. Financhx reserves the right to select corporate profiles that best suit the technical criteria of each test iteration."
            : "La inscripción mediante el formulario de \"Solicitar acceso anticipado\" no confiere automáticamente una licencia de uso ni obliga a Financhx Technologies a admitir al solicitante en el programa piloto. Financhx se reserva la facultad de seleccionar los perfiles corporativos que mejor se adecúen a los criterios técnicos de cada iteración de prueba."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. {isEn ? "User Obligations and Prohibited Conduct" : "Obligaciones y Conductas Prohibidas del Usuario"}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li>{isEn ? "Provide false, inaccurate or third-party data without their prior and legitimate consent." : "Suministrar datos falsos, inexactos o pertenecientes a terceros sin su previo y legítimo consentimiento."}</li>
          <li>{isEn ? "Attempt to decipher, disassemble, decompile, reverse engineer or circumvent the security or encryption mechanisms of the Platform." : "Intentar descifrar, desensamblar, descompilar, realizar ingeniería inversa o vulnerar los mecanismos de seguridad o encriptación de la Plataforma."}</li>
          <li>{isEn ? "Use bots, automated scrapers or any unauthorized indexing mechanism that may overload server infrastructure." : "Utilizar bots, scrapers automatizados o cualquier mecanismo de indexación no autorizado que pueda sobrecargar la infraestructura del servidor."}</li>
          <li>{isEn ? "Use the platform for unlawful purposes, money laundering or violation of exchange or tax regulations applicable in your jurisdiction." : "Emplear la plataforma para propósitos ilícitos, lavado de activos o violación de normas cambiarias o tributarias aplicables en su jurisdicción."}</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. {isEn ? "Intellectual Property and Restricted License" : "Propiedad Intelectual y Licencia Restringida"}
        </h2>
        <p>
          {isEn
            ? "The software, algorithms, domain names, trademarks, designs, logos and technical documentation are the exclusive property of Financhx Technologies. Any commercial exploitation of the platform other than that contractually authorized in writing through a formal SaaS Agreement is strictly prohibited."
            : "El software, algoritmos, nombres de dominio, marcas, diseños, logotipos y documentación técnica son propiedad exclusiva de Financhx Technologies. Queda terminantemente prohibida cualquier explotación comercial de la plataforma distinta a la autorizada contractualmente por escrito mediante el acuerdo de servicio formal (SaaS Agreement)."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          6. {isEn ? "Limitation of Liability and Warranties" : "Limitación de Responsabilidad y Garantías"}
        </h2>
        <p>{isEn ? "The software is provided \"as-is\" and subject to technical availability. To the maximum extent permitted by applicable law, Financhx Technologies shall not be liable for:" : "El software se proporciona \"tal como está\" (as-is) y según disponibilidad técnica. En la máxima medida permitida por la legislación aplicable, Financhx Technologies no será responsable por:"}</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
          <li>{isEn ? "Indirect commercial losses, lost profits or consequential damages arising from the use or inability to use the software." : "Pérdidas de beneficios comerciales indirectas, lucro cesante o daño emergente derivados del uso o imposibilidad de uso del software."}</li>
          <li>{isEn ? "Errors in file uploading, corrupt formats or inconsistencies from external banking sources not controlled by Financhx." : "Errores en la carga de archivos, formatos corruptos o inconsistencias provenientes de fuentes externas bancarias no controladas por Financhx."}</li>
          <li>{isEn ? "Tax, exchange or corporate decisions made by company management or administration." : "Decisiones impositivas, cambiarias o societarias tomadas por la gerencia o administración de la empresa usuaria."}</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          7. {isEn ? "Applicable Law and Jurisdiction" : "Ley Aplicable y Jurisdicción"}
        </h2>
        <p>
          {isEn
            ? "These terms are governed and interpreted under the laws of the Republic of Argentina. Any conflict related to their validity, interpretation or compliance shall be resolved by the National Ordinary Commercial Courts in the Autonomous City of Buenos Aires, with waiver of any other jurisdiction."
            : "Estos términos se rigen e interpretan según las leyes de la República Argentina. Cualquier conflicto relacionado con su validez, interpretación o cumplimiento será dirimido por los Tribunales Nacionales Ordinarios en lo Comercial sitos en la Ciudad Autónoma de Buenos Aires, con renuncia a cualquier otra jurisdicción."}
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          8. {isEn ? "Contact Channels" : "Canales de Contacto"}
        </h2>
        <p>
          {isEn ? "For contractual inquiries or corporate service terms, contact our team at: " : "Para consultas contractuales o términos de servicio corporativos, comuníquese con nuestro equipo a: "}
          <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">legal@financhx.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
