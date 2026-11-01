'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useState, JSX } from 'react';

export function Blocks({
  activeDivs,
  divClass,
  classname,
  activeDivsClass,
  containerRef,
}: {
  activeDivsClass?: string;
  activeDivs?: Record<number, Set<number>>;
  divClass?: string;
  classname?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const updateBlocks = () => {
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const blockSize = Math.max(containerWidth * 0.05, 48); // Adaptive block size

        const columns = Math.ceil(containerWidth / blockSize);
        const rows = Math.ceil(containerHeight / blockSize);

        const newBlocks = Array.from({ length: columns }, (_, columnIndex) => (
          <div key={columnIndex} className='flex-1 h-full'>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  'w-full border border-white/[0.03] transition-colors duration-700',
                  activeDivs && activeDivs[columnIndex]?.has(rowIndex)
                    ? activeDivsClass || 'bg-white/[0.02]'
                    : '',
                  divClass
                )}
                style={{ height: `${blockSize}px` }}
              />
            ))}
          </div>
        ));

        setBlocks(newBlocks);
      }
    };

    updateBlocks();
    window.addEventListener('resize', updateBlocks);

    return () => window.removeEventListener('resize', updateBlocks);
  }, [activeDivs, activeDivsClass, divClass, containerRef]);

  return (
    <div className={cn('flex h-full w-full overflow-hidden inset-0 absolute pointer-events-none', classname)}>
      {blocks}
    </div>
  );
}

export default Blocks;

