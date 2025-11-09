import React from 'react'
export interface CardDecorationProps {
  isActive: boolean
}
export function CardDecoration({ isActive }: CardDecorationProps) {
  return (
    <div
      className="absolute left-0 right-0 top-0 mx-auto z-[3]"
      style={{
        height: '3px',
        width: '100%',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Light blue accent line */}
      <div
        className="absolute left-0 right-0 top-0 mx-auto transition-opacity duration-300"
        style={{
          height: '2px',
          width: '100%',
          background: isActive 
            ? 'linear-gradient(to right, transparent, #5197E9, transparent)' 
            : 'linear-gradient(to right, transparent, rgba(81, 151, 233, 0.4), transparent)',
          borderRadius: '10px 10px 0 0',
          opacity: isActive ? 1 : 0.6,
          willChange: 'opacity',
        }}
      />
    </div>
  )
}
