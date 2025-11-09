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
  const totalSlots = 5 // Show 5 cards in the carousel
  const cardSpacing = 198 // Horizontal spacing between cards for better separation
  const maxDepth = 120 // Maximum Z-depth for perspective
  
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
        height: '100px',
        width: '100%',
        minWidth: '900px',
        backgroundColor: 'transparent',
        color: '#fff',
        perspective: '1400px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <MotionBlurFilters />
      {/* 3D Carousel Container - Horizontal arc arrangement */}
      <div
        className="relative"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
        }}
      >
        {allSlots.slice(0, totalSlots).map((player, index) => {
          // Calculate position from center
          const centerIndex = (totalSlots - 1) / 2
          const offsetFromCenter = index - centerIndex
          
          // Horizontal position
          const x = offsetFromCenter * cardSpacing
          
          // Depth calculation - cards at edges go deeper (further back)
          const normalizedOffset = Math.abs(offsetFromCenter) / centerIndex
          const z = -normalizedOffset * maxDepth
          
          // Rotation - cards at edges rotate slightly towards center
          const rotateY = -offsetFromCenter * 15 // 15 degrees per step from center
          
          // Scale based on depth - center cards larger, edge cards smaller
          const depthScale = 1 - normalizedOffset * 0.15 // 0.85 to 1.0
          
          // Opacity based on depth
          const opacity = 1 - normalizedOffset * 0.3 // 0.7 to 1.0
          
          // Card size - matching design
          const cardWidth = 200
          
          // Z-index - center cards on top
          const zIndex = Math.round((1 - normalizedOffset) * 100)
          
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
                transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${depthScale * scale})`,
                opacity: opacity,
                willChange: 'transform, opacity',
                pointerEvents: 'auto',
                zIndex: zIndex,
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
