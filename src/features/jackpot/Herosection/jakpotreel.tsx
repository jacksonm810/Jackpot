import React from 'react'
import { GameCard } from './gamecard'
import { MotionBlurFilters } from './motionblurfilters'
export interface Player {
  id: number
  name: string
  avatar: string
  amount: string
  isActive: boolean
  color?: string
}
export interface JackpotReelProps {
  players: Player[]
  rotation?: number
  scale?: number
  'data-id'?: string
  onCardClick?: (player: Player) => void
}
export function JackpotReel({
  players,
  rotation = 0,
  scale = 0.888462,
  'data-id': dataId,
  onCardClick,
}: JackpotReelProps) {
  const totalSlots = 12
  // Increased radius for better spacing in full circle
  const radius = 400 
  const angleStep = 800/20 // Full circle: 360 degrees
  
  // Fill empty slots with waiting placeholders
  const allSlots = [...players]
  while (allSlots.length < totalSlots) {
    allSlots.push({
      id: allSlots.length,
      name: 'Waiting',
      avatar: '/img/unknown.webp',
      amount: "0.000",
      isActive: false,
    })
  }
  return (
    <div
      data-id={dataId}
      className="relative flex items-center justify-center"
      style={{
        height: '260px',
        width: '100%',
        minWidth: '726px',
        backgroundColor: 'transparent',
        color: '#fff',
        perspective: '2000px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <MotionBlurFilters />
      {/* 3D Carousel Container - Full circle arrangement */}
      <div
        className="relative"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
        }}
      >
        {allSlots.slice(0, totalSlots).map((player, index) => {
          // Arrange in full circle (360 degrees) - evenly distributed
          const angleDegrees = (index * angleStep) + rotation
          const angle = angleDegrees * (Math.PI / 180)
          
          const x = Math.sin(angle) * radius
          const z = Math.cos(angle) * radius
          
          // Rotate each card to face forward (towards viewer/camera)
          const rotateY = -angleDegrees
          
          // Calculate scale based on z-depth for perspective effect
          // Cards closer to front (higher z) are larger
          const normalizedZ = (z + radius) / (radius * 2) // 0 to 1, where 1 is front
          const depthScale = 0.7 + normalizedZ * 0.3 // Cards at front are ~1.0, back are ~0.7
          const opacity = Math.max(0.4, Math.min(1, 0.4 + normalizedZ * 0.6))
          
          // Card size - slightly smaller for better spacing
          const cardWidth = 140
          
          return (
            <div
              key={player.id}
              onClick={() => onCardClick && !player.name.toLowerCase().includes("waiting") && onCardClick(player)}
              className="absolute cursor-pointer transition-all duration-300"
              style={{
                left: '50%',
                top: '50%',
                width: `${cardWidth}px`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                // Transform order: First position the card, then rotate to face forward
                transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${depthScale * scale})`,
                opacity: opacity,
                willChange: 'transform, opacity',
                pointerEvents: z > -radius * 0.5 ? 'auto' : 'none',
                zIndex: Math.round(normalizedZ * 100), // Higher z-index for front cards
              }}
            >
              <GameCard player={player} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
