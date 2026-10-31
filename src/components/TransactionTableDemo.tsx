"use client";

import { useMemo } from "react";
import {
  SortableTable,
  type SortableColumn,
} from "@/components/vendor/interior/sortable-table";

type SampleTransaction = {
  id: string;
  reference: string;
  source: string;
  amount: number;
  status: string;
};

const rows: SampleTransaction[] = [
  {
    id: "REC-8041",
    reference: "Transferencia recibida",
    source: "Banco Galicia",
    amount: 4850000,
    status: "Coincidencia",
  },
  {
    id: "REC-8042",
    reference: "Cobro con retención",
    source: "Banco Santander",
    amount: 1212500,
    status: "Diferencia",
  },
  {
    id: "REC-8043",
    reference: "Débito a proveedor",
    source: "BBVA",
    amount: 892400,
    status: "Coincidencia",
  },
  {
    id: "REC-8044",
    reference: "Transferencia sin identificar",
    source: "Banco Galicia",
    amount: 340000,
    status: "Revisión",
  },
];

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(amount);

export function TransactionTableDemo() {
  const columns = useMemo<SortableColumn<SampleTransaction>[]>(
    () => [
      {
        id: "reference",
        header: "Movimiento",
        width: "minmax(190px, 2fr)",
        value: (row) => row.reference,
        cell: (row) => (
          <span className="block truncate text-[12px] text-white">
            {row.reference}
          </span>
        ),
      },
      {
        id: "source",
        header: "Origen",
        value: (row) => row.source,
        cell: (row) => (
          <span className="block truncate text-[12px] text-[#C5C5C5]">
            {row.source}
          </span>
        ),
      },
      {
        id: "amount",
        header: "Importe",
        align: "end",
        numeric: true,
        value: (row) => row.amount,
        cell: (row) => (
          <span className="block truncate text-right font-mono text-[12px] text-white">
            {formatAmount(row.amount)}
          </span>
        ),
      },
      {
        id: "status",
        header: "Estado",
        value: (row) => row.status,
        cell: (row) => (
          <span className="block truncate text-[12px] text-[#C5C5C5]">
            {row.status}
          </span>
        ),
      },
    ],
    [],
  );

  return (
    <section
      aria-labelledby="sample-transactions-title"
      className="mt-12 overflow-hidden rounded-2xl border border-[#292929] bg-[#0A0A0A] p-5 sm:p-7"
    >
      <div className="mb-5">
        <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#A0A0A0]">
          Recorrido de interfaz · datos ilustrativos
        </p>
        <h3
          id="sample-transactions-title"
          className="mt-2 text-lg font-semibold text-white sm:text-xl"
        >
          Ordená los movimientos para revisar el lote.
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#C5C5C5]">
          Seleccioná un encabezado para ordenar esta muestra. No se cargan ni
          procesan extractos reales.
        </p>
      </div>
      <SortableTable
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        getRowLabel={(row) => row.reference}
        label="Movimientos ilustrativos de conciliación"
        defaultSort={{ columnId: "reference", direction: "asc" }}
        rowHeight={48}
        markable
        className="border-[#303030] bg-[#0D0D0D] dark:bg-[#0D0D0D]"
      />
    </section>
  );
}
