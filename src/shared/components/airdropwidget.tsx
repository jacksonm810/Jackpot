import React, { useState } from 'react'
import { DegenchatIcon, ArrowIcon, CoinIcons, SolanaIcon, DropIcon, EvenIcon, ChevronIcon } from '@/shared/icons'
export interface AirdropWidgetProps {
  chatName?: string
  notificationCount?: number
  airdropAmount?: string
  timeRemaining?: string
  isJoined?: boolean
  onJoinClick?: () => void
  onCollapseClick?: () => void
  onToggleSidebar?: () => void
  isSidebarVisible?: boolean
  'data-id'?: string
}
export const AirdropWidget: React.FC<AirdropWidgetProps> = ({
  chatName = 'Degen Chat',
  notificationCount = 267,
  airdropAmount = '0.256',
  timeRemaining = '13:32',
  isJoined = false,
  onJoinClick,
  onCollapseClick,
  onToggleSidebar,
  isSidebarVisible = true,
  'data-id': dataId,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div
      data-id={dataId}
      className="relative w-full bg-[#141414] text-white p-3 px-4"
      style={{
        animation: 'fadeIn 0.333s ease-in-out',
      }}
    >
      {/* Header */}
      <div className="mb-3 flex gap-2 items-center">
        <button 
          onClick={onCollapseClick}
          className="relative flex h-10 w-full min-w-10 items-center justify-between overflow-hidden rounded-lg border border-[#3b3b3b] bg-[#303030] px-4 text-sm font-medium leading-5 transition-all hover:bg-[#3b3b3b]"
        >
          <div className="flex w-[175px] items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap font-[550] text-[#e3e3e3]">
            <DegenchatIcon
              className="flex-shrink-0"
              style={{
                filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.5))',
              }}
            />
            <p
              className="overflow-hidden text-ellipsis whitespace-nowrap"
              style={{
                filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.5))',
              }}
            >
              {chatName}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3.5 w-3.5 rounded-full bg-[#6741ff66] p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#6741ff]"></div>
            </div>
            <p className="text-sm font-[550] leading-5 text-[#e3e3e3]">
              {notificationCount}
            </p>
          </div>
        </button>
        {/* Chevron Toggle Button - Inside sidebar header */}
        {onToggleSidebar && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSidebar();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#3b3b3b] bg-[#303030] transition-all hover:bg-[#3b3b3b] flex-shrink-0"
            aria-label={isSidebarVisible ? "Hide sidebar" : "Show sidebar"}
          >
            <ChevronIcon 
              className={`transition-transform duration-300 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] ${
                isSidebarVisible ? '' : 'rotate-180'
              }`}
            />
          </button>
        )}
      </div>
      {/* Main Content Area */}
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-lg border-b border-[#2c2653] bg-gradient-to-b from-[#20202e] to-[#231d42] p-3 transition-all duration-700"
        style={{
          height: isExpanded ? '200px' : '82px',
        }}
      >
        {/* Progress Bar */}
        <div className="absolute left-0 top-0 h-0.5 w-full bg-[#48485f]">
          <div
            className="h-0.5 bg-gradient-to-r from-[#6741ff] to-[#4127a8] transition-all duration-1000"
            style={{
              width: '65%',
            }}
          ></div>
        </div>
        {/* Collapsed View */}
        <div
          className="flex w-full items-center justify-between transition-all duration-700"
          style={{
            opacity: isExpanded ? 0 : 1,
            transform: isExpanded ? 'translateY(48px)' : 'translateY(0)',
          }}
        >
          <div>
            <div className="mb-0 flex items-center gap-1.5">
              <span className="relative left-0.5 text-base font-bold uppercase leading-[23px]">
                Live
              </span>
              <ArrowIcon className="w-4" />
            </div>
            <div className="relative text-2xl leading-6">
              <span
                className="absolute inset-0 m-0 font-black uppercase text-black mix-blend-screen"
                style={{
                  textShadow: '0 -1px 0 #c39eff',
                }}
              >
                Airdrop
              </span>
              <span className="whitespace-nowrap bg-[#8567ff] bg-clip-text font-black uppercase text-transparent">
                Airdrop
              </span>
            </div>
          </div>
          <div className="rounded-[10px] bg-gradient-to-r from-[#9748e680] via-[#4d94e980] to-[#ce4ec280] p-px">
            <div className="flex h-11 cursor-pointer items-center justify-center gap-2.5 rounded-[9px] bg-[#1c1c28] px-3 py-3 pr-1.5 transition-colors hover:bg-[#252535]">
              <div
                className="flex items-center gap-1"
                style={{
                  filter: 'drop-shadow(0 1.83px 1.83px rgba(0,0,0,0.48))',
                }}
              >
                <img
                  src="https://solpot.com/img/3d-sol.webp"
                  alt="SOL"
                  className="h-[27.3281px] w-6 object-cover"
                />
                <span className="text-base font-black leading-6">
                  {airdropAmount}
                </span>
              </div>
              <button className="relative flex h-8 w-8 min-w-0 items-center justify-center overflow-hidden rounded-lg border-0 bg-[#6741ff] p-0 text-sm font-bold leading-5 shadow-[inset_0_1px_0_0_#9379ff] transition-all hover:bg-[#7851ff]">
                <CoinIcons className="w-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Expanded View */}
        <div
          className="pointer-events-none absolute top-3.5 w-full transition-all duration-700"
          style={{
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? 'translateY(0)' : 'translateY(-48px)',
            pointerEvents: isExpanded ? 'auto' : 'none',
          }}
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="relative">
              <img
                src="https://solpot.com/img/3d-sol.webp"
                alt="Airdrop"
                className="relative z-[3] h-[72px] w-[72px] flex-shrink-0"
              />
              <div className="absolute inset-0 m-2.5 h-[52px] w-[52px] rounded-full bg-[#6741ff] blur-2xl"></div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="relative text-[26px] leading-[26px]">
                <span
                  className="absolute inset-0 m-0 font-black uppercase text-black mix-blend-screen"
                  style={{
                    textShadow: '0 -1px 0 #c39eff',
                  }}
                >
                  Airdrop Live
                </span>
                <span className="whitespace-nowrap bg-[#8567ff] bg-clip-text font-black uppercase text-transparent">
                  Airdrop Live
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <SolanaIcon
                    className="w-6"
                    style={{
                      filter: 'drop-shadow(0 1.83px 1.83px rgba(0,0,0,0.48))',
                    }}
                  />
                  <p className="text-lg font-extrabold leading-7 tabular-nums">
                    <span>{airdropAmount}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-base leading-6">
                  <DropIcon className="w-[18px]" />
                  <p className="font-[550] tabular-nums">{timeRemaining}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onJoinClick}
            disabled={isJoined}
            className="w-full overflow-visible rounded-2xl border-0 bg-gradient-to-t from-[#222222] to-[#303030] p-[3px] text-base font-normal leading-[18.4px] transition-opacity disabled:cursor-default disabled:opacity-50"
          >
            <div className="relative h-[50px] w-full rounded-xl border border-[#1d1d1d] bg-gradient-to-b from-[#957aff] to-[#6741ff] p-0.5">
              <div className="relative flex h-11 w-full min-w-10 items-center justify-center gap-1 overflow-hidden rounded-[10px] bg-[#6741ff] px-4 py-3 text-base font-medium leading-6 text-white opacity-50 shadow-[0_2px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:opacity-100">
                {isJoined ? 'Joined' : 'Join Airdrop'}
                {isJoined && (
                  <EvenIcon
                    style={{
                      filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.5))',
                    }}
                  />
                )}
                <div className="absolute inset-0 z-[1] h-11 w-full bg-[radial-gradient(68.53%_169.15%_at_50%_-27.56%,#d787ff_0%,#6741ff_100%)] opacity-0 mix-blend-screen transition-opacity duration-500 hover:opacity-100"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 h-10 w-full translate-y-10 bg-gradient-to-b from-[#141414] to-transparent"></div>
    </div>
  )
}