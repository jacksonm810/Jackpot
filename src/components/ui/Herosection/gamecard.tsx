import React from 'react'
import { CardDecoration } from './carddecoration'
import type { Player } from './jakpotreel'
export interface GameCardProps {
  player: Player
}
export function GameCard({ player}: GameCardProps) {
  if (!player) return null;
  const { id, name, avatar, amount, isActive } = player;
  const isPlaceholder = String(name || '').toLowerCase() === 'waiting' || avatar === '❓' || Number(amount) === 0;
  const QuestionMark = () => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="qmGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="12" fill="url(#qmGrad)" />
      <path d="M32 42a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-28c-7.18 0-12 4.35-12 10h6c0-2.91 2.3-5 6-5 3.09 0 5 1.61 5 4 0 2.13-1.2 3.33-3.88 4.95C30.63 29.37 29 31.45 29 35v1h6v-1c0-1.91.69-2.78 3.06-4.22C41.15 29.02 44 26.72 44 23c0-5.91-5.29-9-12-9Z" fill="#d1d5db" />
    </svg>
  );
  // Sizing constants tuned to match the reference design
  const CARD_WIDTH = 180; // card visual width
  const GLARE_WIDTH = CARD_WIDTH - 4;
  const GLARE_HEIGHT = CARD_WIDTH; // keep square-ish
  const PATTERN_WIDTH = GLARE_WIDTH;
  const PATTERN_HEIGHT = Math.round(CARD_WIDTH * 0.82);
  const AVATAR_SIZE = 64;
  const SHADOW_WIDTH = CARD_WIDTH;
  return (
    <div
      className="animate-player-enter"
      style={{
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      <div
        className="flex flex-col justify-center aspect-square p-0.5 rounded-xl"
        style={{
          width: `${CARD_WIDTH}px`,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.15), rgba(42, 46, 55, 0))',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Overlay for inactive state */}
        <div
          className={`absolute inset-0 z-[3] rounded-xl bg-[#141414] transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-50'}`}
        />
        {/* Card Content */}
        <div
          className="flex flex-col h-full rounded-[10px] transition-colors duration-300"
          style={{
            boxShadow:
              '0 0.9px 3.6px 0.9px rgba(0,0,0,0.12), 0 2.7px 2.92px -1.35px rgba(0,0,0,0.25), 0 0 0.22px 0.67px rgba(0,0,0,0.05), 0 0 0.22px 0.22px rgba(0,0,0,0.07), 0 0 0 1px #1d1d1d',
            willChange: 'background-color',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            backgroundColor: isActive ? '#232E42' : '#191919',
          }}
        >
          {/* Subtle gradient overlay to replace external image assets */}
          <div
            className="absolute inset-0 z-[1] rounded-[11px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 40%, rgba(255,255,255,0.04) 100%)',
            }}
          />
          {/* Inner content */}
          <div
            className="relative flex-1 p-0.5 rounded-[10px]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.15), rgba(42, 46, 55, 0))',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <div
              className="flex flex-col items-center justify-center h-full p-2 rounded-lg transition-colors duration-300"
              style={{
                willChange: 'background-color, color',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                backgroundColor: isActive ? '#232E42' : '#191919',
                color: isActive ? '#8B5CF6' : '#595959',
              }}
            >
              {/* Avatar */}
              <div
                className="relative mt-3 mb-3"
                style={{
                  height: `${AVATAR_SIZE - 24}px`,
                  width: `${AVATAR_SIZE}px`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="relative aspect-square rounded-[14px] overflow-hidden -mt-1 p-px"
                  style={{
                    height: `${AVATAR_SIZE}px`,
                    width: `${AVATAR_SIZE}px`,
                    cursor: isActive ? 'pointer' : 'default',
                    backgroundColor: '#303045',
                    opacity: isActive ? 1 : 0.4,
                    boxShadow: 'inset 0 1.48px 0 0 rgba(255,255,255,0.1)',
                    border: '0 none #222',
                    pointerEvents: isActive ? 'auto' : 'none',
                    transformStyle: 'preserve-3d',
                    transform: 'translate3d(0, 0, 5px)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden rounded-[13px] p-0.5"
                    style={{
                      backgroundColor: isActive ? '#8B5CF6' : '#595959',
                      border: '1.12554px solid #222',
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          'linear-gradient(#fff, rgba(255,255,255,0))',
                      }}
                    />
                    <div
                      className="relative z-[3] h-full w-full overflow-hidden rounded-[11px] bg-[#1f2937]"
                      style={{
                        boxShadow:
                          'inset 0 5.92px 6px 0 rgba(0,0,0,0.5), inset 0 10.37px 6px 0 rgba(255,255,255,0.15)',
                        border: '1.12554px solid #222',
                      }}
                    >
                      {isPlaceholder ? (
                        <QuestionMark />
                      ) : (
                        <img
                          src={avatar}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
               {/* Shadow effect below avatar */}
               <div
                 className="absolute bottom-0 z-0 rounded-full bg-black/70 blur-md"
                 style={{
                   height: '26px',
                   width: `${AVATAR_SIZE}px`,
                   transform: 'scaleY(1.4)',
                   backfaceVisibility: 'hidden',
                 }}
               />
              </div>
              {/* Name */}
              <div className="relative mt-3 text-sm">
                <p className={`max-w-[120px] truncate font-semibold tracking-wide ${isActive ? 'text-white' : 'text-[#8c8c8c]'}`}>
                  {String(name || '').toUpperCase()}
                </p>
              </div>
              {/* Amount */}
              <div className="relative mt-0.5">
                <div className="flex items-center">
                  <img
                    src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                    alt="SOL"
                    className="rounded-full bg-black mr-1.5"
                    style={{
                      height: '24px',
                      width: '24px',
                      filter: isActive ? 'none' : 'grayscale(1)',
                    }}
                  />
                  <p className={`text-lg font-extrabold transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#8c8c8c]'}`}>
                    {Number(amount).toFixed(Number(amount) >= 0.1 ? 1 : Number(amount) >= 0.01 ? 2 : 3)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Top decoration */}
          <CardDecoration isActive={isActive} />
        </div>
        {/* Card shadow */}
        <div
          className="absolute -bottom-[25.1312px] -z-[1] bg-black opacity-50 blur-2xl rounded-full"
          style={{
            height: '34px',
            width: `${SHADOW_WIDTH}px`,
            transform: 'scaleY(0.4) translateZ(5px)',
            backfaceVisibility: 'hidden',
          }}
        />
      </div>
    </div>
  )
}
