import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins with GSAP once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Set default GSAP config
  gsap.config({
    autoSleep: 60,
    nullTargetWarn: false,
  });
}

export { gsap, ScrollTrigger, useGSAP };
export default gsap;
