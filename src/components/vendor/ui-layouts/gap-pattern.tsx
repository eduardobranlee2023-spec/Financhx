import { cn } from '@/lib/utils';
import React from 'react';

interface GapPatternProps {
  className?: string;
}

export function GapPattern({ className }: GapPatternProps) {
  return (
    <div
      className={cn(
        'border-y w-full 2xl:h-8 lg:h-6 h-5 border-white/[0.08] bg-[#050505]',
        'bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0px_1px,transparent_1px_12px)]',
        className
      )}
    />
  );
}

export default GapPattern;

