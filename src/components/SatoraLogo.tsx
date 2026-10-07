import React from 'react';

interface SatoraLogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SatoraLogo: React.FC<SatoraLogoProps> = ({
  showText = true,
  size = 'md',
  className = ""
}) => {
  const iconDimensions = {
    sm: { width: 26, height: 30, textClass: "text-lg", gap: "gap-2.5" },
    md: { width: 34, height: 39, textClass: "text-xl", gap: "gap-3" },
    lg: { width: 44, height: 50, textClass: "text-2xl", gap: "gap-3.5" }
  }[size];

  return (
    <div className={`inline-flex items-center ${iconDimensions.gap} ${className}`}>
      {/* Hexagonal Geometric "S" Symbol matching the user's provided logo */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Subtle luminous blue ambient backlight for dark surfaces */}
        <div className="absolute inset-0 bg-blue-500/25 blur-md rounded-full pointer-events-none" />

        <svg
          width={iconDimensions.width}
          height={iconDimensions.height}
          viewBox="0 0 100 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Top segment of the S */}
          <path
            d="M50 0L100 28.87V62.5L78 49.8V35.5L50 19.3L22 35.5V52.5L0 39.8V28.87L50 0Z"
            fill="#2563EB"
          />
          {/* Center dynamic bridge */}
          <path
            d="M100 62.5L50 91.34L28 78.64L50 65.94L78 49.8L100 62.5Z"
            fill="#3B82F6"
          />
          {/* Bottom segment of the S */}
          <path
            d="M50 115.47L0 86.6V52.5L22 65.2V79.97L50 96.17L78 79.97V62.5L100 75.2V86.6L50 115.47Z"
            fill="#1D4ED8"
          />
        </svg>
      </div>

      {/* Brand Wordmark: satora.dev formatted for high visibility on dark background */}
      {showText && (
        <span className={`font-display font-bold tracking-tight text-white flex items-baseline ${iconDimensions.textClass}`}>
          <span className="text-white hover:text-cyan-200 transition-colors">satora</span>
          <span className="text-cyan-400 font-mono-code font-semibold tracking-normal">.dev</span>
        </span>
      )}
    </div>
  );
};
