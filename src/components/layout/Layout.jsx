import React, { memo } from 'react';
import Navbar from '../common/Navbar';
import Footer from './Footer';

/**
 * Global Application Layout Shell
 * Enhanced with studio lighting ambiance and quiet background mesh
 */
export const Layout = memo(({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-neutral-100 flex flex-col overflow-x-hidden selection:bg-accent-lime selection:text-neutral-950">
      {/* Studio Lighting & Ambient Depth Atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-left subtle ambient volt halo */}
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-accent-lime/[0.08] rounded-full blur-[140px]" />
        
        {/* Central runway reveal spotlight (Automotive engineering atmosphere) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[360px] bg-gradient-to-r from-accent-lime/[0.06] via-accent-sky/[0.08] to-accent-emerald/[0.06] rounded-full blur-[120px]" />

        {/* Top-right electric sky halo */}
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-accent-sky/[0.07] rounded-full blur-[160px]" />

        {/* Bottom solar accent aura */}
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-accent-orange/[0.04] rounded-full blur-[160px]" />

        {/* Precision engineering grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
