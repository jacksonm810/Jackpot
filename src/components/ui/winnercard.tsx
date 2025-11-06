import React from 'react'
import { UserAvatarIcon } from '../icons'
import { SolanaIcon } from '../icons'
export interface WinnerCardProps {
  roundNumber?: string
  username?: string
  level?: number
  avatarUrl?: string
  prizeAmount?: number
  winChance?: number
  'data-id'?: string
}
export const WinnerCard: React.FC<WinnerCardProps> = ({
  roundNumber = '#175923',
  username = 'SHELLYB',
  level = 22,
  avatarUrl = 'https://solpot.com/avatars/9.x/thumbs/svg?seed=L1IGHTN1NG&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80',
  prizeAmount = 0.737,
  winChance = 24.62,
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      className="w-[225px] rounded-[14px] p-[3px] bg-[#0d0d0d] text-white"
      style={{
        backgroundImage:
          'linear-gradient(to top, rgba(34, 34, 34, 0.15), rgba(48, 48, 48, 0.5))',
      }}
    >
      <div
        className="flex flex-col rounded-[11px]"
        style={{
          height: '272.609px',
          boxShadow:
            'rgba(0, 0, 0, 0.12) 0px 0.9px 3.6px 0.9px, rgba(0, 0, 0, 0.25) 0px 2.7px 2.92px -1.35px, rgba(0, 0, 0, 0.05) 0px 0px 0.22px 0.67px, rgba(0, 0, 0, 0.07) 0px 0px 0.22px 0.22px, rgb(29, 29, 29) 0px 0px 0px 1px',
        }}
      >
        {/* Top Section */}
        <div
          className="relative flex-grow rounded-t-[11px] p-[3px]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(40, 40, 40), rgb(30, 26, 45))',
          }}
        >
          <div
            className="rounded-t-[8px] p-4"
            style={{
              height: '200.609px',
              backgroundImage:
                'linear-gradient(rgb(22, 22, 24), rgb(29, 25, 44) 150%)',
            }}
          >
            {/* Background Image */}
            <img
              src="data:image/webp;base64,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"
              alt=""
              className="absolute left-0 top-0 w-full"
              style={{
                height: '79.25px',
              }}
            />
            <div className="relative z-10">
              {/* Round Info */}
              <div className="flex justify-between mb-3 text-xs uppercase text-[#8c8c8c]">
                <p>Round</p>
                <p>{roundNumber}</p>
              </div>
              {/* Avatar */}
              <div className="mx-auto w-[72px] h-[72px] mb-3">
                <div className="w-full h-full rounded-[21px] p-[1px] bg-[#303045] cursor-pointer overflow-hidden transition-[filter] duration-300">
                  <div
                    className="w-full h-full rounded-[20px] p-[2px] border border-[#222222]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgb(138, 138, 138), rgb(90, 90, 90))',
                    }}
                  >
                    <div
                      className="relative w-full h-full rounded-[18px] border border-[#222222] bg-black/75 overflow-hidden"
                      style={{
                        boxShadow:
                          'rgba(0, 0, 0, 0.5) 0px 5.92px 6px 0px inset, rgba(255, 255, 255, 0.15) 0px 10.37px 6px 0px inset',
                      }}
                    >
                      <img
                        src={avatarUrl}
                        alt={username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Username and Level */}
              <div className="flex items-center gap-1 justify-center mb-3">
                <p className="max-w-[75px] text-sm font-semibold truncate">
                  {username}
                </p>
                <div className="rounded-md p-[1px] bg-[#2a417c] text-[#60aaff] overflow-hidden">
                  <div className="flex items-center justify-center h-5 w-7 rounded-[5px] bg-[#22222d]/80 text-[11px] font-semibold">
                    {level}
                  </div>
                </div>
              </div>
              {/* Last Winner Badge */}
              <div className="relative flex justify-center">
                <UserAvatarIcon className="w-auto h-[22.6px]" />
                <span className="absolute inset-0 flex items-center justify-center text-[11px] uppercase italic">
                  Last Winner
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="h-[1px] w-full bg-[#0f0f0f]" />
        {/* Bottom Section */}
        <div
          className="relative flex-shrink-0 rounded-b-[11px] p-3"
          style={{
            backgroundImage:
              'linear-gradient(rgb(29, 29, 29), rgb(20, 20, 20))',
          }}
        >
          <img
            src="https://solpot.com/static/image/grid.bb6dda07.webp"
            alt=""
            className="absolute left-0 top-0 w-full h-full"
          />
          <div className="relative z-10 flex flex-col gap-1">
            {/* Prize Amount */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#c4c4c4]">Won</p>
              <div className="flex items-center gap-1.5">
                <SolanaIcon className="w-5 h-5" />
                <p className="text-sm font-semibold text-white">
                  {prizeAmount.toFixed(3)}
                </p>
              </div>
            </div>
            {/* Win Chance */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#c4c4c4]">Chance</p>
              <p className="text-sm font-semibold text-white">
                {winChance.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
