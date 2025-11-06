import React from 'react'
export function MotionBlurFilters() {
  return (
    <svg width="1" height="1" className="absolute">
      <defs>
        <filter id="motion-blur-frame-1">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50 0" />
        </filter>
        <filter id="motion-blur-frame-2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="35 0" />
        </filter>
        <filter id="motion-blur-frame-3">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20 0" />
        </filter>
        <filter id="motion-blur-frame-4">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10 0" />
        </filter>
        <filter id="motion-blur-frame-5">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
        </filter>
      </defs>
    </svg>
  )
}
