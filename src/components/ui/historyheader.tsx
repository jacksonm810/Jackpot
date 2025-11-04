import React from 'react'
import { UserAvatarIcon, HashIcon, SolanaIcon } from '../icons'
interface HistoryHeaderProps {
  playerCount: number
  roundNumber: number
  showSolanaInfo?: boolean
}
export function HistoryHeader({
  playerCount,
  roundNumber,
  showSolanaInfo = true,
}: HistoryHeaderProps) {
  return (
    <div className="mb-4 flex justify-between pt-5 text-sm font-[550] text-[#a2a2a2]">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <UserAvatarIcon className="h-4 w-4 text-[#9176ff]" />
          <p>{playerCount} Players</p>
        </div>
        <div className="block h-5 w-px bg-[rgba(48,48,48,0.5)]" />
        {showSolanaInfo && (
          <div className="flex items-center gap-1.5 rounded-lg bg-[rgba(173,152,255,0.1)] px-3 py-1.5">
            <SolanaIcon className="h-4 w-4" />
            <p className="text-[13px] font-medium text-[#ad98ff]">
              Payouts are settled in SOL
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <HashIcon className="h-4 w-4" />
        <p className="text-[#e3e3e3]">
          Round: <strong className="font-bold text-white">{roundNumber}</strong>
        </p>
      </div>
    </div>
  )
}
