import React, { useRef, memo } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import HeroHeading from './HeroHeading';
import AnimatedVisual from './AnimatedVisual';
import Stats from './Stats';

/**
 * Orchestrator Hero Section Component
 * Handles the GSAP initial page-load entrance timeline and the ScrollTrigger scrubbed 3D spatial timeline.
 * Tuned with 0.9s scrub damping and synchronized multi-plane parallax.
 */
export const Hero = memo(() => {
  const heroSectionRef = useRef(null);
  const trackRef = useRef(null);
  const roadRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);

  useGSAP(
    () => {
      // Respect accessibility preference for reduced motion
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

      if (prefersReducedMotion) {
        gsap.set(
          [
            '.hero-kicker',
            '.value-letter',
            '.hero-subtitle',
            '.runway-outer',
            '#car',
            '#trail',
            '.stat-card',
            '#float-card-code',
            '#float-card-telemetry',
            '.runway-mesh',
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotation: 0,
            clearProps: 'all',
          }
        );
        return;
      }

      // ==========================================
      // 1. Initial Page-Load Entrance Sequence
      // ==========================================
      const loadTl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      // Kicker Badge entrance
      loadTl.fromTo(
        '.hero-kicker',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 }
      )

      // Headline letters staggered reveal
      .fromTo(
        '.value-letter',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.02,
          ease: 'power3.out',
        },
        '-=0.3'
      )

      // Sub-headline fade-up
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      )

      // Main visual runway entrance: 3D perspective scale & upward rise
      .fromTo(
        '.runway-outer',
        { opacity: 0, scale: 0.96, y: 24, rotateX: isMobile ? 0 : 5 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.35'
      )

      // Foreground floating UI cards entrance (Desktop/Tablet only)
      .fromTo(
        ['#float-card-code', '#float-card-telemetry'],
        { opacity: 0, y: 12, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.5'
      )

      // Vehicle glide into initial rest
      .fromTo(
        '#car',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power3.out',
        },
        '-=0.6'
      )

      // Speed trail expands to initial scale
      .fromTo(
        '#trail',
        { opacity: 0, scaleX: 0.02 },
        {
          opacity: 1,
          scaleX: 0.12,
          duration: 0.65,
          ease: 'power3.out',
        },
        '-=0.55'
      )

      // Statistics sequential entrance
      .fromTo(
        '.stat-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: 'power3.out',
        },
        '-=0.45'
      );

      // ==========================================
      // 2. Core ScrollTrigger Scrub Animation
      // ==========================================
      const getTravelDistance = () => {
        if (!roadRef.current || !carRef.current) return 400;
        const roadWidth = roadRef.current.clientWidth;
        const carWidth = carRef.current.clientWidth;
        const margin = window.innerWidth < 640 ? 24 : 48;
        return Math.max(40, roadWidth - carWidth - margin);
      };

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          // Condensed scrub distance on mobile for responsive touch comfort
          end: () => (window.innerWidth < 768 ? '+=120%' : '+=200%'),
          pin: true,
          scrub: 0.9, // Tuned 0.9s scrub interpolation for immediate response with smooth inertia
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculates travel distance on resize / rotation
        },
      });

      // Layer A: 3D Spatial Tilt of the Runway Frame (Softened on mobile GPUs)
      if (!isMobile) {
        scrollTl.to(
          '.runway-outer',
          {
            rotateX: -3.5,
            rotateY: 1.8,
            ease: 'none',
            duration: 1,
          },
          0
        );
      }

      // Layer B: Background Cyber Grid (Slow parallax drift)
      scrollTl.to(
        '.runway-mesh',
        {
          x: isMobile ? -25 : -50,
          ease: 'none',
          duration: 1,
        },
        0
      );

      // Layer C: Primary Visual - Horizontal Translation across runway
      scrollTl.to(
        '#car',
        {
          x: () => getTravelDistance(),
          ease: 'power1.inOut',
          duration: 1,
        },
        0
      );

      // Speed Trail: Stretches directly behind the craft via GPU transform scaleX
      scrollTl.to(
        '#trail',
        {
          scaleX: 0.98,
          ease: 'power1.inOut',
          duration: 1,
        },
        0
      );

      // Aerodynamic Dynamics: Progressive Scale, Vertical Lift & Steering Tilt
      // Phase 1: Acceleration & Lift into Apex (0.0 -> 0.5)
      scrollTl.to(
        '#car',
        {
          scale: isMobile ? 1.05 : 1.08,
          y: isMobile ? -5 : -8,
          rotation: isMobile ? 1.2 : 2.2,
          duration: 0.5,
          ease: 'power2.out',
        },
        0
      );

      // Phase 2: Deceleration into Terminal Sector (0.5 -> 1.0)
      scrollTl.to(
        '#car',
        {
          scale: 1.01,
          y: 0,
          rotation: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        },
        0.5
      );

      // Layer D: Foreground Floating UI Card 1 (Desktop/Tablet)
      scrollTl.to(
        '#float-card-code',
        {
          x: 65,
          y: -12,
          rotation: 1.5,
          duration: 1,
          ease: 'power1.out',
        },
        0
      );

      // Layer E: Foreground Floating UI Card 2 (Desktop/Tablet)
      scrollTl.to(
        '#float-card-telemetry',
        {
          x: -40,
          y: 8,
          rotation: -1.2,
          duration: 1,
          ease: 'power1.out',
        },
        0
      );

      // Layer F: Supporting Effect - Headline movement & gentle fade
      scrollTl.to(
        '#valueText',
        {
          y: isMobile ? -16 : -26,
          scale: 0.97,
          opacity: 0.65,
          duration: 0.8,
          ease: 'power1.out',
        },
        0
      );

      scrollTl.to(
        '.hero-subtitle',
        {
          y: -10,
          opacity: 0.45,
          duration: 0.8,
          ease: 'power1.out',
        },
        0
      );

      // Layer G: Supporting Effect - Sequential waves for Statistics (01 -> 04)
      // Card 01: Client Satisfaction (0.05 -> 0.32)
      scrollTl.to(
        '#box1',
        {
          y: -8,
          scale: 1.03,
          duration: 0.22,
          ease: 'power1.out',
        },
        0.05
      );
      scrollTl.to(
        '#box1',
        {
          y: 0,
          scale: 1,
          duration: 0.18,
          ease: 'power1.in',
        },
        0.27
      );

      // Card 02: Projects Delivered (0.28 -> 0.56)
      scrollTl.to(
        '#box2',
        {
          y: -8,
          scale: 1.03,
          duration: 0.22,
          ease: 'power1.out',
        },
        0.28
      );
      scrollTl.to(
        '#box2',
        {
          y: 0,
          scale: 1,
          duration: 0.18,
          ease: 'power1.in',
        },
        0.50
      );

      // Card 03: Performance Optimized (0.52 -> 0.78)
      scrollTl.to(
        '#box3',
        {
          y: -8,
          scale: 1.03,
          duration: 0.22,
          ease: 'power1.out',
        },
        0.52
      );
      scrollTl.to(
        '#box3',
        {
          y: 0,
          scale: 1,
          duration: 0.18,
          ease: 'power1.in',
        },
        0.74
      );

      // Card 04: Digital Support (0.75 -> 1.0)
      scrollTl.to(
        '#box4',
        {
          y: -8,
          scale: 1.03,
          duration: 0.25,
          ease: 'power1.out',
        },
        0.75
      );

      // Teardown hook: ensures 100% leak-proof unmounting
      return () => {
        loadTl.kill();
        scrollTl.kill();
        if (scrollTl.scrollTrigger) {
          scrollTl.scrollTrigger.kill();
        }
      };
    },
    { scope: heroSectionRef }
  );

  return (
    <section 
      ref={heroSectionRef} 
      id="hero-section"
      className="relative w-full min-h-[100dvh] sm:min-h-screen flex flex-col justify-between pt-14 sm:pt-20 lg:pt-24 pb-3 sm:pb-6 overflow-hidden"
    >
      {/* 1. Header / Headline Hierarchy */}
      <HeroHeading />

      {/* 2. Prominent Central Visual Object (Responsive 3D Web Development Runway) */}
      <AnimatedVisual 
        carSrc={`${import.meta.env.BASE_URL}assets/car.png`}
        trackRef={trackRef}
        roadRef={roadRef}
        carRef={carRef}
        trailRef={trailRef}
      />

      {/* 3. Impact Statistics (01-04 Agency Metrics) */}
      <Stats className="mt-1 sm:mt-2" />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
