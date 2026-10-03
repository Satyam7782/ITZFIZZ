import React, { memo } from 'react';
import { Zap, ArrowUpRight } from 'lucide-react';
import Badge from './Badge';

/**
 * Global Navigation Header Component
 */
export const Navbar = memo(() => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-4">
        <nav className="glass-card rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3.5 flex items-center justify-between shadow-2xl border border-white/10">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent-lime flex items-center justify-center text-neutral-950 font-black shadow-glow-lime shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white font-display flex items-center gap-1 sm:gap-1.5 leading-none">
                ITZFIZZ
                <span className="text-[10px] sm:text-xs px-1.5 py-0.2 rounded bg-white/10 text-neutral-300 font-mono font-normal">v1.0</span>
              </span>
              <p className="text-[10px] text-neutral-400 mt-0.5 hidden sm:block">Scroll-Driven Engineering Experience</p>
            </div>
          </div>

          {/* Center Status / Nav (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-6">
            <Badge variant="lime" className="animate-pulse-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime"></span>
              Production Engine Verified
            </Badge>
            <a href="#hero-section" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              Overview
            </a>
            <a href="#runway" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              Runway
            </a>
            <a href="#metrics" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              Telemetry
            </a>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://paraschaturvedi.github.io/car-scroll-animation"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl transition-all"
            >
              <span>Reference</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-accent-lime text-neutral-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-white transition-all shadow-glow-lime active:scale-95"
            >
              Explore
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
