import React from 'react'
import { SolanaIcon, MinusIcon, RocketIcon, ChevronIcon } from '../../icons'
export interface UserStatsProps {
  username?: string
  level?: number
  joinDate?: string
  netProfit?: number
  netProfitChange?: 'positive' | 'negative'
  luckiestWin?: number
  biggestWin?: number
  totalWagered?: number
  avatarUrl?: string
  timeframe?: string
  'data-id'?: string
}
export const UserStats: React.FC<UserStatsProps> = ({
  username = 'Nargiss01',
  level = 13,
  joinDate = 'October 22, 2025',
  netProfit = 1.9968,
  netProfitChange = 'negative',
  luckiestWin = 12.04,
  biggestWin = 1.307,
  totalWagered = 30.381,
  avatarUrl = 'https://api.dicebear.com/7.x/avataaars/svg?seed=default',
  timeframe = 'Last 7 Days',
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      className="relative w-full min-h-screen bg-[#161616] text-white p-8 font-sans"
    >
      {/* Header Section */}
      <div className="mb-4 flex items-center gap-4 pb-5 border-b border-[#222222]">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="h-16 w-16 flex-shrink-0 rounded-[19px] p-px bg-gradient-to-b from-[#8a8a8a] to-[#5a5a5a]">
            <div className="h-full w-full rounded-[18px] p-0.5 bg-[#303045]">
              <div className="relative h-14 w-14 rounded-2xl overflow-hidden bg-black/75">
                <img
                  src={avatarUrl}
                  alt={username}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* User Info */}
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xl font-semibold max-w-[200px] truncate">
                {username}
              </h4>
              <div className="bg-[#30729] rounded-md p-px overflow-hidden">
                <div className="flex h-5 w-7 items-center justify-center bg-[#22222d]/80 rounded-[5px] text-[#75d1ff] text-xs font-semibold">
                  {level}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Join Date Button */}
        <button className="ml-auto flex items-center justify-center h-9 px-4 bg-[#222222] text-[#a2a2a2] text-sm font-medium rounded-lg hover:bg-[#2a2a2a] transition-colors">
          Joined{' '}
          <span className="ml-1 font-semibold text-[#c4c4c4]">{joinDate}</span>
        </button>
      </div>
      {/* Net Profit Section */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2.5">Statistics</p>
        <div className="p-px rounded-xl bg-gradient-to-r from-[#9748e6]/40 via-[#4d94e9]/40 to-[#ce4ec2]/40">
          <div className="relative flex h-[100px] items-center justify-between gap-3 bg-gradient-to-t from-[#1f1f2d] to-[#171721] rounded-[11px] px-6 py-5">
            <div>
              <p className="text-sm font-medium text-[#a2a2a2] mb-1">
                Net Profit
              </p>
              <div className="flex items-center gap-1.5">
                <MinusIcon className="text-[#ff4d4f]" />
                <SolanaIcon className="h-8 w-8" />
                <h4 className="text-2xl font-bold">{netProfit.toFixed(4)}</h4>
              </div>
            </div>
            {/* Timeframe Dropdown */}
            <button className="flex h-10 items-center justify-center gap-2 px-4 bg-[#303030] text-white text-sm font-medium rounded-lg hover:bg-[#383838] transition-colors">
              <span>{timeframe}</span>
              <ChevronIcon className="-rotate-90" />
            </button>
          </div>
        </div>
      </div>
      {/* Chart Section - Simplified placeholder */}
      <div className="relative mb-4 h-[315px] border-b border-[#222222]">
        <div className="w-full h-[290px] bg-[#1d1d1d] rounded-xl p-4 flex items-center justify-center">
          <p className="text-[#a2a2a2]">Chart visualization would go here</p>
        </div>
      </div>
      {/* Stats Cards */}
      <div>
        <p className="text-sm font-medium mb-2.5">Statistics</p>
        <div className="grid grid-cols-3 gap-3">
          {/* Luckiest Win */}
          <div className="relative flex h-24 items-center gap-4 bg-[#1d1d1d] border border-[#303030] rounded-xl px-4 py-4 overflow-hidden">
            <RocketIcon className="h-[62px] w-[62px] flex-shrink-0" />
            <div className="absolute right-0 top-0 h-full w-[231px] bg-gradient-to-l from-[#9b29ac]/20 to-transparent z-10" />
            <div>
              <p className="text-sm font-medium text-[#a2a2a2] mb-0">
                Luckiest Win
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <RocketIcon className="h-6 w-6" />
                <p className="font-bold m-0">{luckiestWin}x</p>
              </div>
            </div>
          </div>
          {/* Biggest Win */}
          <div className="relative flex h-24 items-center gap-4 bg-[#1d1d1d] border border-[#303030] rounded-xl px-4 py-4 overflow-hidden">
            <div className="h-[62px] w-[62px] flex-shrink-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full" />
            <div className="absolute right-0 top-0 h-full w-[231px] bg-gradient-to-l from-[#ffab35]/20 to-transparent z-10" />
            <div>
              <p className="text-sm font-medium text-[#a2a2a2] mb-0">
                Biggest Win
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <SolanaIcon className="h-6 w-6" />
                <p className="font-bold m-0">{biggestWin.toFixed(3)}</p>
              </div>
            </div>
          </div>
          {/* Total Wagered */}
          <div className="relative flex h-24 items-center gap-4 bg-[#1d1d1d] border border-[#303030] rounded-xl px-4 py-4 overflow-hidden">
            <div className="h-[62px] w-[62px] flex-shrink-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
            <div className="absolute right-0 top-0 h-full w-[231px] bg-gradient-to-l from-[#4d94e9]/20 to-transparent z-10" />
            <div>
              <p className="text-sm font-medium text-[#a2a2a2] mb-0">
                Total Wagered
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <SolanaIcon className="h-6 w-6" />
                <p className="font-bold m-0">{totalWagered.toFixed(3)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
