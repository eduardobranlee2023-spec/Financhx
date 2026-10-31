'use client';

// Adapted from UI Layouts' pointer-follow image reveal example (MIT).
import { motion, useSpring } from 'motion/react';
import React, { type MouseEvent, useRef, useState } from 'react';

interface ImageItem {
  label: string;
  tag: string;
  amount: string;
  detail: string;
}

export function ImageReveal2() {
  const [preview, setPreview] = useState<{ item: ImageItem | null; opacity: number }>({
    item: null,
    opacity: 0,
  });

  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const list: ImageItem[] = [
    {
      label: 'Movimiento identificado',
      tag: 'Coincidencia',
      amount: '$1.250.000',
      detail: 'Referencia alineada · ejemplo',
    },
    {
      label: 'Variación detectada',
      tag: 'Diferencia',
      amount: '$42.800',
      detail: 'Importe ilustrativo · revisar',
    },
    {
      label: 'Revisión pendiente',
      tag: 'Criterio humano',
      amount: 'Sin asignar',
      detail: 'Metadatos incompletos · ejemplo',
    },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setPreview({ item, opacity });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className="relative mx-auto w-full max-w-5xl"
    >
      <p className="mb-5 text-xs font-mono uppercase tracking-[0.16em] text-neutral-500">
        Explorá cada estado
      </p>
      {list.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className="flex w-full cursor-default items-center justify-between gap-5 border-b border-white/10 py-5 text-left text-white last:border-none sm:py-6"
        >
          <p className="text-xl font-medium tracking-tight sm:text-3xl">
            {item.label}
          </p>
          <span className="shrink-0 text-[10px] font-mono uppercase tracking-[0.12em] text-neutral-500 sm:text-xs">
            {item.tag}
          </span>
        </div>
      ))}

      <motion.div
        ref={imageRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[132px] w-[260px] rounded-xl border border-white/15 bg-[#111111] p-4 shadow-2xl sm:block"
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: preview.opacity,
        }}
      >
        {preview.item ? (
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-neutral-500">
                Financhx · {preview.item.tag}
              </span>
              <span className="size-1.5 rounded-full bg-white" />
            </div>
            <div>
              <p className="font-mono text-xl text-white">
                {preview.item.amount}
              </p>
              <p className="mt-1 text-[10px] text-neutral-500">
                {preview.item.detail}
              </p>
            </div>
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
