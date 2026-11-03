import { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso — Financhx",
  description: "Condiciones contractuales, uso de la plataforma, licencias y responsabilidades legales de Financhx.",
};

export default function TerminosPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      subtitle="Reglas y condiciones aplicables al acceso, navegación y uso de la plataforma web y del programa de acceso anticipado (Beta) de Financhx."
      lastUpdated="Noviembre 2026"
      activeDoc="terminos"
    >
      <section className="space-y-6">
        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2">
          1. Aceptación de los Términos
        </h2>
        <p>
          El presente contrato regula los términos y condiciones de uso aplicables a todos los usuarios
          y empresas interesadas en acceder al sitio web y solicitar participación en el programa piloto
          o despliegue de <strong>Financhx</strong> (en adelante, la "Plataforma"), operada por
          Financhx Technologies. Al ingresar o enviar solicitudes en el sitio, usted declara contar con
          capacidad jurídica legal para obligarse o para actuar en representación de la persona jurídica o
          empresa a la que pertenece.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          2. Descripción del Servicio y Naturaleza del Software
        </h2>
        <p>
          Financhx es un sistema operativo financiero (Financial Operating System) en fase de desarrollo
          y acceso anticipado privado (Early Access), concebido para optimizar tareas operativas de las
          empresas, tales como:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
          <li>Normalización y unificación de extractos y movimientos procedentes de cuentas bancarias y pasarelas de pago.</li>
          <li>Generación de reglas de conciliación cruzada de cobros y facturación.</li>
          <li>Registro contable inmutable, control de auditoría interna y visualización de flujo de caja en tiempo real.</li>
        </ul>
        <div className="bg-[#121214] border border-zinc-700/60 rounded-xl p-4 text-xs text-zinc-300">
          <strong>Aclaración taxativa:</strong> Financhx opera exclusivamente como un proveedor de tecnología y software auxiliar de gestión. La Plataforma no ofrece custodia de saldos bancarios, no capta depósitos dinerarios ni administra carteras de inversión.
        </div>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          3. Acceso Anticipado y Fase Piloto Privada
        </h2>
        <p>
          La inscripción mediante el formulario de "Solicitar acceso anticipado" no confiere automáticamente
          una licencia de uso ni obliga a Financhx Technologies a admitir al solicitante en el programa piloto.
          Financhx se reserva la facultad de seleccionar los perfiles corporativos que mejor se adecúen a los
          criterios técnicos de cada iteración de prueba.
        </p>
        <p>
          Los participantes admitidos en el programa piloto aceptan que el software puede encontrarse sujeto
          a iteraciones rápidas, mejoras de interfaz y ventanas de mantenimiento programadas para incorporar
          nuevas funcionalidades.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          4. Obligaciones y Conductas Prohibidas del Usuario
        </h2>
        <p>El Usuario se compromete expresamente a no:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400">
          <li>Suministrar datos falsos, inexactos o pertenecientes a terceros sin su previo y legítimo consentimiento.</li>
          <li>Intentar descifrar, desensamblar, descompilar, realizar ingeniería inversa o vulnerar los mecanismos de seguridad o encriptación de la Plataforma.</li>
          <li>Utilizar bots, scrapers automatizados o cualquier mecanismo de indexación no autorizado que pueda sobrecargar la infraestructura del servidor.</li>
          <li>Emplear la plataforma para propósitos ilícitos, lavado de activos o violación de normas cambiarias o tributarias aplicables en su jurisdicción.</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          5. Propiedad Intelectual y Licencia Restringida
        </h2>
        <p>
          El software, algoritmos, nombres de dominio, marcas, diseños, logotipos y documentación técnica
          son propiedad exclusiva de Financhx Technologies. Queda terminantemente prohibida cualquier
          explotación comercial de la plataforma distinta a la autorizada contractualmente por escrito mediante
          el acuerdo de servicio formal (SaaS Agreement).
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          6. Limitación de Responsabilidad y Garantías
        </h2>
        <p>
          El software se proporciona "tal como está" (as-is) y según disponibilidad técnica. En la máxima
          medida permitida por la legislación aplicable, Financhx Technologies no será responsable por:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
          <li>Pérdidas de beneficios comerciales indirectas, lucro cesante o daño emergente derivados del uso o imposibilidad de uso del software.</li>
          <li>Errores en la carga de archivos, formatos corruptos o inconsistencias provenientes de fuentes externas bancarias no controladas por Financhx.</li>
          <li>Decisiones impositivas, cambiarias o societarias tomadas por la gerencia o administración de la empresa usuaria.</li>
        </ul>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          7. Modificaciones a los Términos
        </h2>
        <p>
          Financhx Technologies se reserva el derecho de modificar o actualizar estos Términos y Condiciones
          en cualquier momento. Las versiones modificadas entrarán en vigor a partir del momento de su
          publicación en este sitio web. Se recomienda consultar periódicamente esta sección.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          8. Ley Aplicable y Jurisdicción
        </h2>
        <p>
          Estos términos se rigen e interpretan según las leyes de la República Argentina. Cualquier conflicto
          relacionado con su validez, interpretación o cumplimiento será dirimido por los Tribunales Nacionales
          Ordinarios en lo Comercial sitos en la Ciudad Autónoma de Buenos Aires, con renuncia a cualquier otra
          jurisdicción.
        </p>

        <h2 className="text-xl text-white font-semibold border-b border-zinc-800 pb-2 pt-6">
          9. Canales de Contacto
        </h2>
        <p>
          Para consultas contractuales o términos de servicio corporativos, comuníquese con nuestro equipo a:{" "}
          <a href="mailto:legal@financhx.com" className="text-white underline underline-offset-4">
            legal@financhx.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}

