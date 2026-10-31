"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  FileSpreadsheet,
  FileText,
  UploadCloud,
  CheckCircle2,
  Trash2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface UploadedFileItem {
  id: string;
  name: string;
  size: string;
  sourceType: "banco" | "facturas";
  status: "listo" | "procesando";
}

const ICON_TRANSFORMS = [
  {
    idle: "translate(-78%, -50%) rotate(-8deg)",
    active: "translate(-114%, -50%) rotate(-12deg) scale(1.08)",
  },
  {
    idle: "translate(-50%, -50%) rotate(0deg)",
    active: "translate(-50%, -50%) rotate(0deg) scale(1.18)",
  },
  {
    idle: "translate(-22%, -50%) rotate(8deg)",
    active: "translate(14%, -50%) rotate(12deg) scale(1.08)",
  },
];

export function FileUpload21st({
  onFilesReady,
}: {
  onFilesReady?: (count: number) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const dragDepthRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<UploadedFileItem[]>([
    {
      id: "demo-1",
      name: "Extracto_Galicia_CC_Octubre_2026.xlsx",
      size: "248 KB",
      sourceType: "banco",
      status: "listo",
    },
    {
      id: "demo-2",
      name: "Comprobantes_Emitidos_AFIP_Oct2026.csv",
      size: "512 KB",
      sourceType: "facturas",
      status: "listo",
    },
  ]);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragDepthRef.current += 1;
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragDepthRef.current = 0;
    setIsDragging(false);

    if (e.dataTransfer.files.length > 0) {
      const newItems: UploadedFileItem[] = Array.from(e.dataTransfer.files).map(
        (f) => ({
          id: `${f.name}-${Date.now()}`,
          name: f.name,
          size: `${Math.round(f.size / 1024)} KB`,
          sourceType: f.name.toLowerCase().includes("banco") ? "banco" : "facturas",
          status: "listo",
        })
      );
      setFiles((prev) => [...prev, ...newItems]);
      onFilesReady?.(files.length + newItems.length);
    }
  };

  const removeFile = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFiles((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full">
      {/* 21st.dev Animated File Dropzone */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={cn(
          "relative flex min-h-56 cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300",
          isDragging
            ? "border-[#E5E5E5] bg-[#E5E5E5]/10 scale-[1.01]"
            : "border-[#303030] bg-[#0A0A0A]/90 hover:border-[#E5E5E5]/50 hover:bg-[#101010]"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".xlsx,.csv,.pdf"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const newItems: UploadedFileItem[] = Array.from(
                e.target.files
              ).map((f) => ({
                id: `${f.name}-${Date.now()}`,
                name: f.name,
                size: `${Math.round(f.size / 1024)} KB`,
                sourceType: f.name.toLowerCase().includes("banco")
                  ? "banco"
                  : "facturas",
                status: "listo",
              }));
              setFiles((prev) => [...prev, ...newItems]);
              onFilesReady?.(files.length + newItems.length);
            }
          }}
        />

        {/* 21st.dev Animated Stack Cluster */}
        <div className="relative h-14 w-36 my-1">
          {/* Card 1: Spreadsheet (Bank Statement) */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 grid size-12 place-items-center rounded-xl bg-[#1B1B1B] text-[#FFFFFF] border border-[#303030] shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isDragging && "border-[#E5E5E5] text-white"
            )}
            style={{
              transform: isDragging
                ? ICON_TRANSFORMS[0].active
                : ICON_TRANSFORMS[0].idle,
            }}
          >
            <FileSpreadsheet className="w-5 h-5 text-[#E5E5E5]" />
          </div>

          {/* Card 2: Main Cloud Upload icon */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 grid size-12 place-items-center rounded-xl bg-[#1F1F1F] text-white border border-[#E5E5E5]/60 shadow-xl z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isDragging && "scale-110 bg-[#E5E5E5]"
            )}
            style={{
              transform: isDragging
                ? ICON_TRANSFORMS[1].active
                : ICON_TRANSFORMS[1].idle,
            }}
          >
            <UploadCloud className="w-6 h-6 text-[#E5E5E5]" />
          </div>

          {/* Card 3: Invoices PDF / CSV */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 grid size-12 place-items-center rounded-xl bg-[#1B1B1B] text-[#10B981] border border-[#303030] shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isDragging && "border-[#10B981] text-white"
            )}
            style={{
              transform: isDragging
                ? ICON_TRANSFORMS[2].active
                : ICON_TRANSFORMS[2].idle,
            }}
          >
            <FileText className="w-5 h-5 text-[#10B981]" />
          </div>
        </div>

        {/* Text Instructions */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-semibold text-[#FFFFFF]">
            {isDragging
              ? "Soltá los extractos o facturas aquí"
              : "Arrastrá extractos bancarios o registros de facturación"}
          </p>
          <p className="text-[11px] font-mono text-[#D0D0D0]">
            Soporta formatos <span className="text-[#E5E5E5]">.XLSX</span>,{" "}
            <span className="text-[#E5E5E5]">.CSV</span> y{" "}
            <span className="text-[#E5E5E5]">.PDF</span> (o clic para explorar)
          </p>
        </div>

        {/* 21st.dev Component Attribution & status badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#101010] border border-[#303030] text-[10px] font-mono text-[#8F8F8F]">
          <Sparkles className="w-3 h-3 text-[#E5E5E5]" />
          <span>Superficie de Carga con Detección Automática de Esquema</span>
        </div>
      </div>

      {/* Uploaded Files Ribbon */}
      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#D0D0D0] px-1">
            <span>Archivos listos para conciliar ({files.length}):</span>
            <span className="text-[#10B981] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Fuentes validadas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {files.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#101010] border border-[#303030] text-xs font-mono group"
              >
                <div className="flex items-center gap-2.5 truncate mr-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1B1B1B] flex items-center justify-center shrink-0">
                    {item.sourceType === "banco" ? (
                      <FileSpreadsheet className="w-4 h-4 text-[#E5E5E5]" />
                    ) : (
                      <FileText className="w-4 h-4 text-[#10B981]" />
                    )}
                  </div>
                  <div className="truncate">
                    <div className="text-[#FFFFFF] truncate font-medium text-[11px]">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-[#8F8F8F]">
                      {item.size} · {item.sourceType === "banco" ? "Banco" : "Facturación"}
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => removeFile(item.id, e)}
                  className="p-1 rounded text-[#8F8F8F] hover:text-[#EF4444] transition-colors"
                  title="Eliminar archivo"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
