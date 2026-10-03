import React, { memo } from 'react';
import { Layers, Cpu, ShieldCheck } from 'lucide-react';
import Badge from '../common/Badge';

/**
 * Capabilities Section Component for post-scroll journey
 */
export const NextSection = memo(() => {
  const capabilities = [
    {
      icon: Cpu,
      title: 'Digital Systems Architecture',
      description: 'Ultra-low latency web applications engineered with modular component systems and strict typing.',
      badge: 'React 18 & Next.js'
    },
    {
      icon: Layers,
      title: 'Kinetic Creative Engineering',
      description: 'Award-winning interactive animations, smooth WebGL canvas, and responsive GSAP scroll choreographies.',
      badge: 'GSAP 3 & WebGL'
    },
    {
      icon: ShieldCheck,
      title: 'Performance & Telemetry',
      description: 'Rigorous 99+ Lighthouse performance scores, instant CDN edge distribution, and continuous SLA monitoring.',
      badge: 'Sub-second TTFB'
    }
  ];

  return (
    <section id="capabilities" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <Badge variant="sky" className="mb-4">
          Core Agency Capabilities
        </Badge>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
          Beyond the Hero: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-sky via-accent-lime to-white">
            End-to-End Digital Mastery
          </span>
        </h2>
        <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-400">
          Our engineering studio transforms complex business logic into effortless, high-velocity digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-lime" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-sky bg-accent-sky/10 px-2.5 py-1 rounded-full border border-accent-sky/20">
                {cap.badge}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-3 sm:mt-4 mb-2">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
});

NextSection.displayName = 'NextSection';

export default NextSection;
