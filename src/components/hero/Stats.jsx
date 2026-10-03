import React, { memo } from 'react';
import { Smile, Rocket, Gauge, Headphones, ArrowUpRight } from 'lucide-react';
import { statsData } from '../../data/statsData';

const iconMap = {
  Smile,
  Rocket,
  Gauge,
  Headphones,
};

/**
 * Reusable Impact Statistics Section Component
 * Features spring-like hover elevations, high-contrast metrics, and micro-interactions
 */
export const Stats = memo(({ items = statsData, className = "" }) => {
  return (
    <div id="metrics" className={`w-full max-w-6xl mx-auto px-3 sm:px-6 relative z-10 ${className}`}>
      {/* 4 Impact Stat Cards (2x2 on Mobile/Tablet, 4-col on Desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
        {items.map((stat) => {
          const Icon = iconMap[stat.iconName] || Smile;

          return (
            <div
              key={stat.id}
              id={stat.id}
              className={`stat-card text-box opacity-0 will-change-transform group relative rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 ease-out ${stat.cardBg} ${stat.textColor} shadow-lg hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between cursor-default border border-black/10 dark:border-white/10`}
            >
              {/* Card Top: Number index (01, 02, etc.) & Icon badge */}
              <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest opacity-75">
                  {stat.number}
                </span>
                <div className={`p-1 sm:p-1.5 rounded-md sm:rounded-lg ${stat.badgeBg} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>

              {/* Main Metric Value */}
              <div className="my-0.5 sm:my-1">
                <span className="num-box text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight leading-none group-hover:tracking-normal transition-all">
                  {stat.metric}
                </span>
              </div>

              {/* Metric Label & Detail */}
              <div className="mt-1 sm:mt-2">
                <h3 className="text-[11px] sm:text-xs md:text-sm font-bold tracking-tight leading-tight sm:leading-snug">
                  {stat.label}
                </h3>
                <p className="hidden sm:block text-[10px] sm:text-[11px] opacity-75 font-medium mt-0.5 line-clamp-1">
                  {stat.detail}
                </p>
              </div>

              {/* Bottom Micro-Indicator */}
              <div className="mt-2 pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between opacity-60 text-[9px] font-mono">
                <span>BENCHMARK</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Corner Ambient Aura Glow */}
              <div className="absolute -bottom-6 -right-6 w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-white/15 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
});

Stats.displayName = 'Stats';

export default Stats;
