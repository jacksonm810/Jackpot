import React, { useState } from 'react'
import { InfoIcon,  CoinIcon, SolanaIcon, ClockIcon, CheckIcon } from '@/shared/icons'
export interface AirdropCardProps {
  /** Amount of tokens for the airdrop */
  amount?: number
  /** Time remaining in format "MM:SS" */
  timeRemaining?: string
  /** Progress percentage (0-100) */
  progress?: number
  /** Whether user has joined the airdrop */
  isJoined?: boolean
  /** Callback when join button is clicked */
  onJoin?: () => void
  /** Whether the card is expanded */
  isExpanded?: boolean
  /** Token symbol */
  tokenSymbol?: string
  /** Token icon URL */
  tokenIconUrl?: string
  /** Optional data-id for component identification */
  'data-id'?: string
}
export const AirdropCard: React.FC<AirdropCardProps> = ({
  amount = 0.268,
  timeRemaining = '01:10',
  progress = 76,
  isJoined = false,
  onJoin,
  isExpanded: controlledExpanded,
  tokenSymbol = 'SOL',
  tokenIconUrl = '/img/3d-sol.webp',
  'data-id': dataId,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = controlledExpanded ?? internalExpanded
  const progressWidth = `${progress}%`
  return (
    <div
      data-id={dataId}
      className="relative w-[251px] h-[145px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#20202e] to-[#231d42] transition-all duration-700 rounded-lg border border-[#2c2653] p-3"
    >
      {/* Progress Bar */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-[#48485f]">
        <div
          className="h-0.5 bg-gradient-to-r from-[#6741ff] to-[#4127a8] transition-all duration-1000 linear"
          style={{
            width: progressWidth,
          }}
        />
      </div>
      {/* Collapsed State */}
      <div
        className={`flex w-[227px] items-center justify-between transition-all duration-700 ${isExpanded ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <span className="relative left-0.5 text-sm font-bold uppercase leading-[19px]">
              Live
            </span>
            <InfoIcon className="w-3.5 text-[#8a8aa3]" />
          </div>
          <div className="relative text-xl leading-5">
            <span className="absolute inset-0 font-black uppercase text-black mix-blend-screen [text-shadow:0_-1px_0_#c39eff]">
              Airdrop
            </span>
            <span className="whitespace-nowrap bg-[#8567ff] bg-clip-text font-black uppercase text-transparent">
              Airdrop
            </span>
          </div>
        </div>
        <div className="rounded-[10px] bg-gradient-to-r from-[#9748e6]/50 via-[#4d94e9]/50 to-[#ce4ec2]/50 p-px">
          <div className="flex h-9 cursor-pointer items-center justify-center gap-2.5 rounded-[9px] bg-[#1c1c28] px-1 py-1 transition-colors duration-300">
            <div className="flex items-center gap-1 [filter:drop-shadow(0_1.83px_1.83px_rgba(0,0,0,0.48))]">
              <img
                src={tokenIconUrl}
                alt={tokenSymbol}
                className="h-[22.77px] w-5"
              />
              <span className="text-sm font-black leading-5">{amount}</span>
            </div>
            <button className="relative flex h-7 w-7 min-w-0 items-center justify-center overflow-hidden rounded-md bg-[#6741ff] p-0 shadow-[inset_0_1px_0_0_#9379ff] transition-all">
              <CoinIcon className="w-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Expanded State */}
      <div
        className={`absolute top-3.5 w-[227px] transition-all duration-700 ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <div className="mb-3 flex items-center gap-3">
          <div className="relative">
            <img
              src="/img/grid-sol-2.webp"
              alt="Solana"
              className="relative z-[3] h-[57px] w-[57px] flex-shrink-0"
            />
            <div className="absolute inset-0 m-[2.5px] h-[52px] w-[52px] rounded-full bg-[#6741ff] blur-2xl" />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="relative text-[22px] leading-[22px]">
              <span className="absolute inset-0 font-black uppercase text-black mix-blend-screen [text-shadow:0_-1px_0_#c39eff]">
                Airdrop Live
              </span>
              <span className="whitespace-nowrap bg-[#8567ff] bg-clip-text font-black uppercase text-transparent">
                Airdrop Live
              </span>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <SolanaIcon className="w-5 [filter:drop-shadow(0_1.83px_1.83px_rgba(0,0,0,0.48))]" />
                <p className="text-sm font-extrabold leading-5">{amount}</p>
              </div>
              <div className="flex items-center gap-1 text-[13px]">
                <ClockIcon className="w-4" />
                <p className="font-medium">{timeRemaining}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onJoin}
          disabled={isJoined}
          className={`w-full rounded-2xl bg-gradient-to-t from-[#222] to-[#303030] p-[3px] transition-opacity ${isJoined ? 'cursor-default opacity-50' : ''}`}
        >
          <div className="relative h-[42px] w-full rounded-xl border border-[#1d1d1d] bg-gradient-to-b from-[#957aff] to-[#6741ff] p-0.5">
            <div className="relative flex h-9 w-full min-w-10 items-center justify-center gap-1 overflow-hidden rounded-[10px] bg-[#6741ff] px-4 text-sm font-medium leading-5 text-white transition-all duration-300 [text-shadow:0_2px_0_rgba(0,0,0,0.5)]">
              {isJoined ? (
                <>
                  Joined
                  <CheckIcon className="[filter:drop-shadow(0_2px_0_rgba(0,0,0,0.5))]" />
                </>
              ) : (
                'Join Airdrop'
              )}
              <div className="absolute inset-0 z-[1] bg-[radial-gradient(68.53%_169.15%_at_50%_-27.56%,#d787ff_0%,#6741ff_100%)] opacity-0 mix-blend-screen transition-opacity duration-500" />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
AirdropCard.displayName = 'AirdropCard'
