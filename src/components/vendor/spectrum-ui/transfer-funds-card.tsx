"use client";

// Adapted from Spectrum UI. Financhx modifications: localized copy, explicit
// illustrative defaults, and disabled/nonexistent actions for demo usage.
import * as React from "react";
import { motion } from "motion/react";
import { ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TransferSummaryRow {
  label: string;
  value: string;
  emphasized?: boolean;
}

export interface TransferFundsCardProps {
  title?: string;
  description?: string;
  amountLabel?: string;
  currencySymbol?: string;
  amount?: string;
  fromLabel?: string;
  fromAccount?: string;
  toLabel?: string;
  toAccount?: string;
  summary?: TransferSummaryRow[];
  buttonLabel?: string;
  confirmDisabled?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
  className?: string;
}

const DEFAULT_SUMMARY: TransferSummaryRow[] = [
  { label: "Acreditación estimada", value: "Según integración" },
  { label: "Costo operativo", value: "A confirmar" },
  { label: "Importe total (ejemplo)", value: "$1,200.00", emphasized: true },
];

function SelectField({ value }: { value: string }) {
  return (
    <motion.div
      whileHover="hover"
      whileTap={{ scale: 0.99 }}
      className="mt-3 flex h-9 cursor-pointer items-center justify-between rounded-[22px] bg-neutral-100 pl-3 pr-3 transition-colors hover:bg-neutral-200"
    >
      <span className="truncate text-sm leading-5 text-neutral-800">
        {value}
      </span>
      <motion.span
        variants={{
          hover: { y: [0, -2, 2, 0], transition: { duration: 0.4 } },
        }}
        className="flex shrink-0"
      >
        <ChevronsUpDown className="h-4 w-4 text-neutral-500" />
      </motion.span>
    </motion.div>
  );
}

export function TransferFundsCard({
  title = "Vista de movimiento",
  description = "Interfaz ilustrativa; no inicia operaciones.",
  amountLabel = "Importe de ejemplo",
  currencySymbol = "$",
  amount = "1,200.00",
  fromLabel = "Origen (ejemplo)",
  fromAccount = "Cuenta de ejemplo ···· 8402",
  toLabel = "Destino (ejemplo)",
  toAccount = "Cuenta de ejemplo ···· 1192",
  summary = DEFAULT_SUMMARY,
  buttonLabel = "Demostración · no ejecuta movimientos",
  confirmDisabled = false,
  onConfirm,
  onClose,
  className,
}: TransferFundsCardProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-[26px] bg-white p-6 font-inter text-neutral-950",
        "shadow-[0_0_0_1px_rgba(10,10,10,0.05),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[16px] font-medium leading-6 text-neutral-950">
          {title}
        </h3>
        {onClose ? (
          <motion.button
            type="button"
            onClick={onClose}
            whileTap={{ scale: 0.88 }}
            aria-label="Cerrar"
            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            <motion.span
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.4 }}
              className="flex"
            >
              <X className="h-4 w-4" />
            </motion.span>
          </motion.button>
        ) : null}
      </div>
      <p className="mt-1.5 max-w-[254px] text-sm leading-5 text-neutral-600">
        {description}
      </p>

      {/* Amount */}
      <div className="mt-6">
        <label className="text-sm font-medium leading-[14px] text-neutral-800">
          {amountLabel}
        </label>
        <div className="mt-3 flex h-9 items-center gap-1.5 rounded-[26px] bg-neutral-100 px-3 transition-colors hover:bg-neutral-200">
          <span className="text-sm font-medium leading-5 text-neutral-500">
            {currencySymbol}
          </span>
          <span className="text-sm text-neutral-950">{amount}</span>
        </div>
      </div>

      {/* From */}
      <div className="mt-7">
        <label className="text-sm font-medium leading-[14px] text-neutral-800">
          {fromLabel}
        </label>
        <SelectField value={fromAccount} />
      </div>

      {/* To */}
      <div className="mt-7">
        <label className="text-sm font-medium leading-[14px] text-neutral-800">
          {toLabel}
        </label>
        <SelectField value={toAccount} />
      </div>

      {/* Summary */}
      <div className="mt-7 rounded-[18px] bg-neutral-100 px-4">
        {summary.map((row, index) => (
          <div
            key={row.label}
            className={cn(
              "flex h-[46px] items-center justify-between",
              index > 0 && "border-t border-neutral-200",
            )}
          >
            <span
              className={cn(
                "text-sm leading-5",
                row.emphasized
                  ? "font-medium text-neutral-800"
                  : "text-neutral-600",
              )}
            >
              {row.label}
            </span>
            <span
              className={cn(
                "text-sm leading-5 text-neutral-950",
                row.emphasized ? "font-semibold" : "font-medium",
              )}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Confirm */}
      <motion.button
        type="button"
        onClick={onConfirm}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.35 }}
        disabled={confirmDisabled}
        className="mt-[25px] flex h-[34px] w-full items-center justify-center rounded-[26px] bg-black text-sm font-medium leading-5 text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {buttonLabel}
      </motion.button>
    </div>
  );
}
