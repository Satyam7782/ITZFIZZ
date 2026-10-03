import React, { memo } from 'react';

/**
 * Global Page Footer Component
 */
export const Footer = memo(() => {
  return (
    <footer className="w-full border-t border-white/5 py-8 mt-16 sm:mt-20 relative z-10 bg-surface/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wider">ITZFIZZ</span>
          <span>• Web Development Internship Assignment</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Production Ready</span>
          <span>•</span>
          <span className="text-accent-lime font-mono">60 FPS GSAP Scroll Engine</span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
