import React from 'react'
import { PlayerEntry } from '@/shared/data/porthistory'
import { EdgeIndicator } from '@/shared/components/edgeincicatior'
interface PlayerCardProps {
  player: PlayerEntry
}
export function UserCard({ player }: PlayerCardProps) {
  return (
    <div className="mb-4 w-full cursor-pointer rounded-[15px] bg-gradient-to-t from-[#222222] to-[#303030] p-[3px] transition-transform hover:scale-[1.01]">
      <div className="relative h-[78px] w-full overflow-hidden rounded-[13px] bg-gradient-to-b from-[#2e2e35] to-[#1a1a22] p-[3px] shadow-[0_0.9px_3.6px_0.9px_rgba(0,0,0,0.12),0_2.7px_2.92px_-1.35px_rgba(0,0,0,0.25),0_0_0.22px_0.67px_rgba(0,0,0,0.05),0_0_0.22px_0.22px_rgba(0,0,0,0.07),0_0_0_1px_#1d1d1d]">
        <div className="flex h-[72px] items-center justify-between rounded-[11px] bg-gradient-to-b from-[#1c1c24] to-[#1a1a22] px-4">
          {/* Player Info */}
          <div
            className="flex items-center"
            style={{
              color: player.avatarColor,
            }}
          >
            <div className="flex items-center">
              <div
                className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-[11px] p-px shadow-[inset_0_1.48px_0_0_rgba(255,255,255,0.1)]"
                style={{
                  backgroundColor: '#303045',
                }}
              >
                <div
                  className="relative h-[38px] w-[38px] overflow-hidden rounded-[10px] border border-[#222222] p-[2px]"
                  style={{
                    backgroundColor: player.avatarColor,
                  }}
                >
                  <div className="absolute left-0 top-0 h-9 w-9 bg-gradient-to-b from-white to-transparent opacity-30" />
                  <div className="relative z-[3] h-8 w-8 overflow-hidden rounded-lg border border-[#222222] bg-[#595959] shadow-[inset_0_5.92px_6px_0_rgba(0,0,0,0.5),inset_0_10.37px_6px_0_rgba(255,255,255,0.15)]">
                    <img
                      src={player.avatarUrl}
                      alt={player.username}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative -top-0.5 ml-2 flex flex-col items-start gap-1">
              <p className="w-[75px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-[550] text-[#c4c4c4]">
                {player.username}
              </p>
              <div className="overflow-hidden rounded-md bg-[#307293] p-px text-[#75d1ff]">
                <div className="flex h-5 w-7 items-center justify-center overflow-hidden rounded-[5px] bg-[rgba(34,34,45,0.8)] text-[11px] font-semibold">
                  {player.level}
                </div>
              </div>
            </div>
          </div>
          {/* Item and Amount */}
          <div className="flex h-10 items-center gap-3">
            <div className="relative h-[52px] w-[52px]">
              <img
                src={player.itemImage}
                alt="Item"
                className="relative z-[3] h-[52px] w-[52px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.75)]"
              />
              <div className="absolute inset-0 h-[52px] w-[52px] mix-blend-screen">
                <img
                  src={player.rarityImage}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <div
                className="absolute inset-0 m-[8px] h-9 w-9 rounded-full opacity-25 mix-blend-plus-lighter blur-[24px]"
                style={{
                  backgroundColor: player.rarityColor,
                }}
              />
            </div>
            <div className="relative min-w-[80px]">
              <p className="text-xl font-semibold leading-7">{player.amount}</p>
              <p className="text-sm font-[550] leading-5 text-[#c4c4c4]">
                ~${player.usdAmount.toFixed(2)}
              </p>
            </div>
          </div>
          {/* Chance */}
          <div className="text-right">
            <p className="text-sm font-[550] leading-5 text-[#c4c4c4]">
              Chance
            </p>
            <p className="font-semibold leading-7">
              {player.chance.toFixed(2)}%
            </p>
          </div>
        </div>
        {/* Background effects */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[78px] w-full opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, ${player.avatarColor}, rgba(31,31,45,0))`,
          }}
        />
        <div
          className="pointer-events-none absolute -left-6 -top-6 h-12 w-12 rounded-full blur-[60px]"
          style={{
            backgroundColor: player.avatarColor,
          }}
        />
        {/* Edge Indicator */}
        <EdgeIndicator color={player.avatarColor} />
      </div>
    </div>
  )
}
