"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Spotlight, SpotLightItem } from "./vendor/cursify/spotlight";
import { GapPattern } from "./vendor/ui-layouts/gap-pattern";

export function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="demo-video" className="py-24 bg-[#050505] text-white relative border-t border-white/[0.06] overflow-hidden">
      {/* Luz ambiente de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300 mb-4">
            <span className="tracking-wider uppercase font-semibold text-white">RECORRIDO EN VIDEO</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">1 minuto</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Descubre Financhx en acción.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Una visión clara de cómo automatizamos la conciliación contable y unificamos el control de cada movimiento.
          </p>
        </div>

        {/* Reproductor de Video con Marco Spotlight estilo Cursify & UILayouts */}
        <div className="max-w-4xl mx-auto">
          <Spotlight ProximitySpotlight={true} HoverFocusSpotlight={true} CursorFlowGradient={true}>
            <SpotLightItem className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center group">
                
                {/* Elemento de Video */}
                <video
                  ref={videoRef}
                  src="/financhx_video_con_voz.mp4"
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Overlay de controles flotantes */}
                <div
                  className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center ${
                    isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  }`}
                  onClick={togglePlay}
                >
                  <button
                    aria-label={isPlaying ? "Pausar" : "Reproducir"}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 sm:w-8 sm:h-8 fill-black" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                    )}
                  </button>
                </div>

                {/* Barra inferior de controles rápidos */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Reproducir o pausar"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Silenciar o activar audio"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs font-mono text-neutral-400">Financhx Demo Oficial</span>
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Pantalla completa"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </SpotLightItem>
          </Spotlight>
        </div>

        {/* Separador inferior arquitectónico */}
        <div className="max-w-4xl mx-auto mt-12">
          <GapPattern />
        </div>

      </div>
    </section>
  );
}

