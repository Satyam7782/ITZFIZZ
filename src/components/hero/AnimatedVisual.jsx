import React, { memo } from 'react';
import { Cpu, Zap, Code2, Layers, CheckCircle2, Terminal } from 'lucide-react';

/**
 * 3D Layered Web Development Runway Component
 * Features contact shadows, dual-stop neon trails, and floating glass telemetry cards
 */
export const AnimatedVisual = memo(({
  carSrc = `${import.meta.env.BASE_URL}assets/car.png`,
  trackRef,
  roadRef,
  carRef,
  trailRef,
  className = ""
}) => {
  return (
    <div 
      id="runway"
      ref={trackRef} 
      className={`w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-6 my-2 sm:my-3 md:my-5 relative z-10 [perspective:1200px] ${className}`}
    >
      {/* 3D Depth Runway Outer Frame with Hairline Border & Ambient Glow */}
      <div 
        className="runway-outer opacity-0 will-change-transform relative rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl [transform-style:preserve-3d] border border-white/10"
      >
        {/* Layer 1: Foreground Floating UI Card (Top-Left: Code Engine Terminal - Desktop/Tablet) */}
        <div
          id="float-card-code"
          className="hidden md:flex absolute -top-4 -left-2 lg:-top-5 lg:-left-6 z-30 items-center gap-2.5 lg:gap-3 px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-xl bg-surface/95 border border-accent-lime/30 shadow-[0_12px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl pointer-events-none will-change-transform scale-90 lg:scale-100"
        >
          <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-lg bg-accent-lime/10 border border-accent-lime/25 flex items-center justify-center text-accent-lime shadow-[0_0_12px_rgba(222,245,79,0.3)]">
            <Terminal className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          </div>
          <div className="font-mono text-[9px] lg:text-[10px]">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <span>build:</span>
              <span className="text-accent-lime">vite-production</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse"></span>
            </div>
            <span className="text-neutral-400">status: 200 OK • latency: 8ms</span>
          </div>
        </div>

        {/* Layer 2: Foreground Floating UI Card (Bottom-Right: Component Metrics Inspector - Desktop/Tablet) */}
        <div
          id="float-card-telemetry"
          className="hidden md:flex absolute -bottom-4 -right-2 lg:-bottom-5 lg:-right-6 z-30 items-center gap-2.5 lg:gap-3 px-3 py-1.5 lg:px-3.5 lg:py-2 rounded-xl bg-surface/95 border border-accent-sky/30 shadow-[0_12px_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl pointer-events-none will-change-transform scale-90 lg:scale-100"
        >
          <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-lg bg-accent-sky/10 border border-accent-sky/25 flex items-center justify-center text-accent-sky shadow-[0_0_12px_rgba(106,201,255,0.3)]">
            <Cpu className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          </div>
          <div className="font-mono text-[9px] lg:text-[10px]">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <span>component:</span>
              <span className="text-accent-sky">&lt;HeroCore /&gt;</span>
            </div>
            <span className="text-neutral-400">FPS: 60.0 • render: 0.4ms</span>
          </div>
        </div>

        {/* Layer 3: Main Pinned Runway & Asphalt Road Surface */}
        <div 
          ref={roadRef}
          id="road"
          className="relative w-full h-[135px] sm:h-[175px] md:h-[210px] lg:h-[240px] rounded-[18px] sm:rounded-[22px] road-surface overflow-hidden flex items-center justify-between border border-white/[0.08]"
        >
          {/* Background Digital Grid & Cyber Mesh (Layer with subtle parallax) */}
          <div className="runway-mesh absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none will-change-transform" />
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 sm:w-64 h-24 sm:h-32 bg-accent-lime/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 sm:w-64 h-24 sm:h-32 bg-accent-sky/10 blur-3xl pointer-events-none" />

          {/* Top Neon Digital Curb */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-accent-lime/80 via-accent-sky/80 to-accent-orange/80 shadow-[0_0_10px_rgba(222,245,79,0.5)]" />

          {/* Top Telemetry Status Bar */}
          <div className="absolute top-2 sm:top-3 left-3 right-3 sm:left-6 sm:right-6 flex items-center justify-between text-[9px] sm:text-[10px] md:text-xs font-mono text-neutral-400 select-none z-10 pointer-events-none">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-accent-emerald shadow-glow-emerald"></span>
              </span>
              <span className="text-white font-semibold tracking-wider text-[8px] sm:text-[10px] md:text-xs">CORE RUNWAY</span>
              <span className="hidden sm:inline text-neutral-400">• PIPELINE ACTIVE</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 text-[8px] sm:text-[10px]">
              <span className="hidden md:inline bg-white/5 px-2 py-0.5 rounded border border-white/10 text-neutral-300">
                STACK: REACT 18 + GSAP
              </span>
              <span className="text-accent-lime font-bold">FPS: 60.0</span>
            </div>
          </div>

          {/* Center Road Divider (Fiber-optic dashed guideline) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1.5px] sm:h-[2px] road-divider pointer-events-none opacity-30" />

          {/* Speed / Deployment Trail with Dual-Stop Glow (Transform-based scaleX scrub target) */}
          <div 
            ref={trailRef}
            id="trail"
            className="absolute top-0 left-0 bottom-0 z-10 pointer-events-none origin-left will-change-transform"
            style={{
              width: '100%',
              transform: 'scaleX(0.12)',
              background: 'linear-gradient(90deg, rgba(69, 219, 125, 0.55) 0%, rgba(106, 201, 255, 0.3) 80%, transparent 100%)',
              borderRight: '2px solid rgba(69, 219, 125, 0.95)',
              boxShadow: '0 0 30px rgba(69, 219, 125, 0.55), inset 0 0 15px rgba(69, 219, 125, 0.2)'
            }}
          />

          {/* Central Digital Velocity Craft (McLaren 720S top-view sprite) */}
          <div 
            ref={carRef}
            id="car"
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-6 md:left-10 z-20 flex items-center justify-center pointer-events-none will-change-transform"
          >
            <div className="relative group">
              {/* Realistic Ground Contact Shadow */}
              <div className="absolute -bottom-2 left-3 right-3 h-5 bg-black/75 blur-md rounded-full pointer-events-none" />

              {/* Aerodynamic / Cyber Underglow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-accent-emerald/25 blur-lg sm:blur-xl rounded-full pointer-events-none" />

              {/* The McLaren 720S Craft Sprite */}
              <img 
                src={carSrc} 
                alt="Digital Development Velocity Engine" 
                className="h-[70px] sm:h-[95px] md:h-[130px] lg:h-[155px] w-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.95)] contrast-110"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                width="325"
                height="155"
              />

              {/* Digital Target Reticle HUD on Craft */}
              <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/85 border border-accent-emerald/40 text-[8px] sm:text-[9px] font-mono text-accent-emerald whitespace-nowrap shadow-glow-emerald">
                <Zap className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current" />
                <span>DEV CRAFT 01</span>
              </div>
            </div>
          </div>

          {/* Web Engineering Milestone Checkpoints along the track */}
          <div className="absolute inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10 opacity-65">
            <div className="hidden lg:flex items-center gap-1.5 ml-48 text-[11px] font-mono text-neutral-400 bg-surface-muted/70 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
              <Code2 className="w-3 h-3 text-accent-lime" />
              <span>SOURCE</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-surface-muted/70 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
              <Layers className="w-3 h-3 text-accent-sky" />
              <span>COMPILE</span>
            </div>
            <div className="flex items-center gap-1 mr-2 sm:mr-6 md:mr-10 text-[9px] sm:text-[11px] font-mono text-accent-lime bg-surface-muted/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-accent-lime/30 shadow-[0_0_10px_rgba(222,245,79,0.2)]">
              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>DEPLOYED</span>
            </div>
          </div>

          {/* Bottom Telemetry Coordinate Marks */}
          <div className="absolute bottom-1.5 sm:bottom-2.5 left-3 right-3 sm:left-6 sm:right-6 flex justify-between text-[8px] sm:text-[9px] md:text-[10px] font-mono text-neutral-400 select-none pointer-events-none">
            <span>[STAGE 01] INIT</span>
            <span className="hidden sm:inline">VELOCITY: 240 MB/S</span>
            <span>[STAGE 04] PROD</span>
          </div>

          {/* Bottom Neon Digital Curb */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-accent-lime/80 via-accent-sky/80 to-accent-orange/80 shadow-[0_0_10px_rgba(222,245,79,0.5)]" />
        </div>
      </div>
    </div>
  );
});

AnimatedVisual.displayName = 'AnimatedVisual';

export default AnimatedVisual;
