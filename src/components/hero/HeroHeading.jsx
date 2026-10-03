import React, { memo } from 'react';
import { Code2, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';

/**
 * Hero Headline Component with Kinetic Letter Spans & Luminescence Micro-Interactions
 */
export const HeroHeading = memo(() => {
  const word1 = "WELCOME";
  const word2 = "ITZFIZZ";

  return (
    <div className="w-full max-w-6xl mx-auto text-center px-3 sm:px-6 relative z-10 select-none">
      {/* Top Kicker Pill with Pulse Indicator */}
      <div className="hero-kicker inline-flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3.5 opacity-0 max-w-full">
        <Badge variant="lime" className="px-3 sm:px-4 py-1 text-[10px] sm:text-xs tracking-wider border-accent-lime/30 shadow-[0_0_20px_-3px_rgba(222,245,79,0.25)] truncate max-w-[92vw]">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
          </span>
          <span className="truncate font-semibold">DIGITAL ARCHITECTURE &bull; NEXT-GEN WEB EXPERIENCES</span>
        </Badge>
      </div>

      {/* Main Headline: W E L C O M E   I T Z F I Z Z */}
      <div className="py-0.5 sm:py-1 w-full overflow-hidden">
        <h1 
          id="valueText"
          aria-label="WELCOME ITZFIZZ"
          className="value-add flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-14 gap-y-1 sm:gap-y-2 max-w-full cursor-default"
        >
          {/* Word 1: W E L C O M E */}
          <span className="inline-flex items-center tracking-[0.16em] sm:tracking-[0.28em] md:tracking-[0.42em] lg:tracking-[0.55em] font-black font-display text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)] whitespace-nowrap">
            {word1.split('').map((char, index) => (
              <span
                key={`w1-${index}`}
                data-index={index}
                className="value-letter inline-block opacity-0 will-change-transform transition-all duration-200 hover:text-accent-lime hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(222,245,79,0.7)]"
              >
                {char}
              </span>
            ))}
          </span>

          {/* Word 2: I T Z F I Z Z */}
          <span className="inline-flex items-center tracking-[0.16em] sm:tracking-[0.28em] md:tracking-[0.42em] lg:tracking-[0.55em] font-black font-display text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-accent-lime via-accent-sky to-white drop-shadow-[0_4px_30px_rgba(222,245,79,0.25)] whitespace-nowrap">
            {word2.split('').map((char, index) => (
              <span
                key={`w2-${index}`}
                data-index={word1.length + index}
                className="value-letter inline-block opacity-0 will-change-transform transition-all duration-200 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(106,201,255,0.7)]"
              >
                {char}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Sub-headline / Agency Vision */}
      <p className="hero-subtitle opacity-0 mt-2 sm:mt-3 md:mt-3.5 max-w-2xl mx-auto text-[11px] sm:text-xs md:text-sm lg:text-base text-neutral-400 font-normal leading-relaxed tracking-wide px-2 sm:px-0">
        Bespoke web applications, high-velocity digital products, and precision-engineered interactive systems built for industry leaders.
      </p>
    </div>
  );
});

HeroHeading.displayName = 'HeroHeading';

export default HeroHeading;
