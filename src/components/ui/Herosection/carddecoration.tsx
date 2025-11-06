import React from 'react'
export interface CardDecorationProps {
  isActive: boolean
}
export function CardDecoration({ isActive }: CardDecorationProps) {
  return (
    <div
      className="absolute left-0 right-0 top-0 mx-auto"
      style={{
        height: '2.98972px',
        width: '29.9851px',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute left-0 right-0 top-0 mx-auto transition-opacity duration-300"
        style={{
          height: '0.984848px',
          width: '29.9851px',
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0))',
          opacity: isActive ? 1 : 0,
          mixBlendMode: 'plus-lighter',
          willChange: 'opacity',
        }}
      />
      {/* Trapezoid shape */}
      <svg
        width="30"
        height="3"
        viewBox="0 0 45 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 right-0 mx-auto mb-0 transition-all duration-300"
        style={{
          opacity: isActive ? 1 : 0.25,
          color: isActive ? '#5197E9' : '#C4C4C4',
          filter: isActive ? 'drop-shadow(0 0 10px #5197E9)' : 'none',
          willChange: 'opacity, color',
        }}
      >
        <path
          d="M3.47326 4.29086C2.91607 4.29086 2.40153 3.99253 2.12472 3.50896L1.01431 1.56914C0.717824 1.0512 1.09177 0.40625 1.68857 0.40625L43.2933 0.406253C43.8901 0.406253 44.2641 1.0512 43.9676 1.56915L42.8572 3.50896C42.5803 3.99253 42.0658 4.29087 41.5086 4.29087L3.47326 4.29086Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
