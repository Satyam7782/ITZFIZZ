import React, { memo } from 'react';

/**
 * Reusable Badge Component
 * @param {React.ReactNode} children - Content inside the badge
 * @param {'lime' | 'sky' | 'orange' | 'neutral' | 'emerald'} variant - Color theme
 * @param {string} className - Additional Tailwind CSS classes
 */
export const Badge = memo(({ children, variant = 'lime', className = '' }) => {
  const variantStyles = {
    lime: 'bg-accent-lime/10 text-accent-lime border-accent-lime/20',
    sky: 'bg-accent-sky/10 text-accent-sky border-accent-sky/20',
    orange: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
    neutral: 'bg-white/5 text-neutral-300 border-white/10',
    emerald: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md transition-colors ${
        variantStyles[variant] || variantStyles.lime
      } ${className}`}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
