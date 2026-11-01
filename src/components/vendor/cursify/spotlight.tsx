// @ts-nocheck
'use client';

import { cn } from '@/lib/utils';
import React, {
  useRef,
  useState,
  MouseEvent,
  useContext,
  createContext,
  useEffect,
} from 'react';

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  ProximitySpotlight?: boolean;
  HoverFocusSpotlight?: boolean;
  CursorFlowGradient?: boolean;
}

interface SpotlightItemProps {
  children: React.ReactNode;
  className?: string;
}

interface SpotLightContextType {
  ProximitySpotlight: boolean;
  HoverFocusSpotlight: boolean;
  CursorFlowGradient: boolean;
}

const SpotLightContext = createContext<SpotLightContextType | undefined>(undefined);

export const useSpotlight = () => {
  const context = useContext(SpotLightContext);
  if (!context) {
    throw new Error('useSpotlight must be used within a SpotlightProvider');
  }
  return context;
};

export const Spotlight = ({
  children,
  className,
  ProximitySpotlight = true,
  HoverFocusSpotlight = false,
  CursorFlowGradient = false,
}: SpotlightProps) => {
  return (
    <SpotLightContext.Provider
      value={{
        ProximitySpotlight,
        HoverFocusSpotlight,
        CursorFlowGradient,
      }}
    >
      <div className={cn('group relative z-10 rounded-md gap-2', className)}>
        {children}
      </div>
    </SpotLightContext.Provider>
  );
};

export function SpotLightItem({ children, className }: SpotlightItemProps) {
  const { HoverFocusSpotlight, ProximitySpotlight, CursorFlowGradient } = useSpotlight();
  const boxWrapper = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent | any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMousemove = ({ currentTarget, clientX, clientY }: any): void => {
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setOverlayColor({ x, y });
  };

  return (
    <div
      onMouseMove={handleMousemove}
      onMouseEnter={() => CursorFlowGradient && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxWrapper}
      className={cn(
        className,
        'relative rounded-lg justify-center items-center p-[1px] bg-white/[0.08] overflow-hidden'
      )}
    >
      {isHovered && (
        <div
          className='pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100 transition duration-300'
          style={{
            background: `radial-gradient(250px circle at ${overlayColor.x}px ${overlayColor.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
          }}
        />
      )}
      {HoverFocusSpotlight && (
        <div
          className='absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-lg pointer-events-none'
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06) 0%, transparent 20%) fixed`,
          }}
        />
      )}
      {ProximitySpotlight && (
        <div
          className='absolute inset-0 z-0 bg-fixed rounded-lg pointer-events-none'
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.04) 0%, transparent 20%) fixed`,
          }}
        />
      )}
      {children}
    </div>
  );
}

