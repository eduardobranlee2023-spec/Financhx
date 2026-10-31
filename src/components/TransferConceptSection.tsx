import { TransferFundsCard } from "@/components/vendor/spectrum-ui/transfer-funds-card";

const illustrativeSummary = [
  { label: "Acreditación estimada", value: "No disponible" },
  { label: "Costo operativo", value: "A confirmar" },
  { label: "Importe total (ejemplo)", value: "$1.250.000", emphasized: true },
];

export function TransferConceptSection() {
  return (
    <section
      aria-labelledby="movement-concept-title"
      className="border-t border-[#292929] bg-[#050505] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#C5C5C5]">
            Interfaz ilustrativa
          </p>
          <h2
            id="movement-concept-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Una lectura ordenada de cada movimiento.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C5C5C5]">
            Esta composición visual usa datos ficticios para mostrar cómo
            podría presentarse un movimiento en una interfaz financiera. No
            conecta cuentas, no inicia transferencias y no representa una
            función operativa disponible.
          </p>
        </div>

        <TransferFundsCard
          title="Detalle del movimiento"
          description="Vista de ejemplo · sin conexión a cuentas"
          amountLabel="Importe ilustrativo"
          amount="1.250.000"
          fromLabel="Origen (ejemplo)"
          fromAccount="Cuenta operativa ···· 1024"
          toLabel="Destino (ejemplo)"
          toAccount="Cuenta destino ···· 8231"
          summary={illustrativeSummary}
          buttonLabel="Vista conceptual · no ejecuta movimientos"
          confirmDisabled
          className="bg-white text-neutral-950"
        />
      </div>
    </section>
  );
}
