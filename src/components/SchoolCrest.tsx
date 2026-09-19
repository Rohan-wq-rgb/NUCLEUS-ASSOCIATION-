import React from 'react';

interface SchoolCrestProps {
  className?: string;
  size?: number;
  variant?: 'gold' | 'cobalt' | 'white';
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({ 
  className = '', 
  size = 48,
  variant = 'gold' 
}) => {
  const strokeColor = variant === 'cobalt' ? '#3F51B5' : variant === 'white' ? '#FFFFFF' : '#F8D287';
  const fillColor = variant === 'cobalt' ? '#F8D287' : '#3F51B5';

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Nucleus Association Crest"
    >
      <svg 
        viewBox="0 0 100 100" 
        width={size} 
        height={size} 
        className="w-full h-full drop-shadow-sm"
      >
        {/* Outer Circular Seal */}
        <circle cx="50" cy="50" r="46" fill={fillColor} stroke={strokeColor} strokeWidth="3.5" />
        <circle cx="50" cy="50" r="41" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="3,2" />
        
        {/* Nucleus Core & Electron Orbits Emblem */}
        <ellipse cx="50" cy="42" rx="24" ry="10" fill="none" stroke={strokeColor} strokeWidth="1.8" transform="rotate(-25 50 42)" opacity="0.85" />
        <ellipse cx="50" cy="42" rx="24" ry="10" fill="none" stroke={strokeColor} strokeWidth="1.8" transform="rotate(25 50 42)" opacity="0.85" />
        <ellipse cx="50" cy="42" rx="24" ry="10" fill="none" stroke={strokeColor} strokeWidth="1.8" transform="rotate(90 50 42)" opacity="0.85" />
        
        {/* Central Core Nucleus Spark */}
        <circle cx="50" cy="42" r="5" fill={strokeColor} />
        <circle cx="50" cy="42" r="2.5" fill={fillColor} />

        {/* Open Book of Knowledge at Base */}
        <path
          d="M32 72 C41 70 47 73 50 75 C53 73 59 70 68 72 L68 81 C59 79 53 82 50 84 C47 82 41 79 32 81 Z"
          fill={strokeColor}
        />
        <path
          d="M50 75 L50 84"
          stroke={fillColor}
          strokeWidth="1.5"
        />

        {/* Association Rays */}
        <circle cx="50" cy="22" r="2" fill={strokeColor} />
        <circle cx="34" cy="52" r="1.8" fill={strokeColor} />
        <circle cx="66" cy="52" r="1.8" fill={strokeColor} />
      </svg>
    </div>
  );
};
