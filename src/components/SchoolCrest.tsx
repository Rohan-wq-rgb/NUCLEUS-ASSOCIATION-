import React, { useState } from 'react';
import officialLogoImg from '../assets/images/nucleus-logo.jpg';

interface SchoolCrestProps {
  className?: string;
  size?: number;
  variant?: 'gold' | 'cobalt' | 'white' | 'original';
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({ 
  className = '', 
  size = 48,
  variant = 'original' 
}) => {
  const [imageError, setImageError] = useState(false);

  // Border treatment based on container variant if needed
  const ringAccent = variant === 'gold' 
    ? 'ring-2 ring-[#F8D287]' 
    : variant === 'cobalt' 
    ? 'ring-2 ring-[#3F51B5]' 
    : 'ring-2 ring-[#84F800]';

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-black ${ringAccent} ${className}`}
      style={{ width: size, height: size }}
      aria-label="Nucleus Association Official Logo"
    >
      {!imageError ? (
        <img
          src={officialLogoImg}
          alt="Nucleus Association Official Logo"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        /* Vector SVG Fallback strictly reproducing the uploaded atom & N motif */
        <svg 
          viewBox="0 0 100 100" 
          width={size} 
          height={size} 
          className="w-full h-full rounded-full bg-black p-1"
        >
          {/* Neon Lime Green Outer Ring */}
          <circle cx="50" cy="50" r="47" fill="#040608" stroke="#84F800" strokeWidth="4" />

          {/* Atomic Orbital Ellipses in Cyan */}
          <ellipse cx="50" cy="45" rx="30" ry="12" fill="none" stroke="#00E5FF" strokeWidth="2" transform="rotate(-30 50 45)" opacity="0.9" />
          <ellipse cx="50" cy="45" rx="30" ry="12" fill="none" stroke="#00B0FF" strokeWidth="2" transform="rotate(30 50 45)" opacity="0.9" />
          <ellipse cx="50" cy="45" rx="30" ry="12" fill="none" stroke="#2979FF" strokeWidth="2" transform="rotate(90 50 45)" opacity="0.85" />

          {/* Electron Nodes */}
          <circle cx="30" cy="35" r="2.5" fill="#00E5FF" />
          <circle cx="68" cy="55" r="2.5" fill="#00E5FF" />
          <circle cx="50" cy="18" r="2.5" fill="#00E5FF" />

          {/* Central Stylized Blade 'N' in Neon Green */}
          <path
            d="M42 56 L42 36 L45 34 L54 52 L54 36 L58 36 L58 56 L55 58 L46 40 L46 56 Z"
            fill="#84F800"
          />

          {/* Stencil 'NUCLEUS' Text at Base */}
          <text
            x="50"
            y="85"
            textAnchor="middle"
            fill="#84F800"
            fontFamily="monospace, sans-serif"
            fontWeight="900"
            fontSize="10"
            letterSpacing="1.5"
          >
            NUCLEUS
          </text>
        </svg>
      )}
    </div>
  );
};

