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
}
export function JackpotReel({
  players,
  rotation = 0,
  scale = 0.888462,
  'data-id': dataId,
}: JackpotReelProps) {
  const totalSlots = 10
  const angleStep = 360 / totalSlots
  const radius = 425
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
      className="relative"
      style={{
        height: '230px',
        width: '726px',
        backgroundColor: '#141414',
        color: '#fff',
        perspective: '1000px',
      }}
    >
      <MotionBlurFilters />
      {/* Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none" />
      {/* Carousel Container */}
      <div
        className="flex items-center h-full w-full pt-1"
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      >
        {allSlots.slice(0, totalSlots).map((player, index) => {
          const angle = (index * angleStep + rotation) * (Math.PI / 180)
          const x = Math.sin(angle) * radius
          const z = Math.cos(angle) * radius
          const rotateY = -index * angleStep - rotation
          return (
            <div
              key={player.id}
              className="absolute left-0 right-0 mx-auto -mt-1"
              style={{
                width: '125.709px',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`,
                zoom: scale,
                color: player.isActive ? '#2290BF' : '#595959',
                transitionDelay: '0s',
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
