import React, { useState } from 'react'
import { JackpotIcon, CoinflipIcon, AffiliatesIcon, CoinIcon, WalletIcon } from '../icons'
export interface NavigationLink {
  label: string
  href: string
  icon: React.ReactNode
}
export interface NavigationProps {
  links?: NavigationLink[]
  activeLink?: string
  onLinkClick?: (href: string) => void
  onConnectClick?: () => void
  showLeaderboard?: boolean
  leaderboardPrize?: string
  className?: string
  'data-id'?: string
}
const defaultLinks: NavigationLink[] = [
  {
    label: 'Jackpot',
    href: '/',
    icon: <JackpotIcon />,
  },
  {
    label: 'Coinflip',
    href: '/coinflip',
    icon: <CoinflipIcon />,
  },
  {
    label: 'Affiliates',
    href: '/affiliates',
    icon: <AffiliatesIcon />,
  },
]
export function Navigation({
  links = defaultLinks,
  activeLink = '/',
  onLinkClick,
  onConnectClick,
  showLeaderboard = true,
  leaderboardPrize = '250,000',
  className = '',
  'data-id': dataId,
}: NavigationProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const activeIndex = links.findIndex((link) => link.href === activeLink)
  const hoveredIndex = links.findIndex((link) => link.href === hoveredLink)
  const indicatorIndex = hoveredLink ? hoveredIndex : activeIndex
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    onLinkClick?.(href)
  }
  return (
    <>
      <style>{`
        @keyframes coinFloat {
          0%, 100% { transform: translateY(0) rotate(-13deg); }
          50% { transform: translateY(-8px) rotate(-13deg); }
        }
        @keyframes coin2Float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-6px) rotate(12deg); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <nav
        data-id={dataId}
        className={`flex w-full items-center justify-between px-6 bg-[#141414] text-white border-b border-border/50 ${className}`}
      >
        {/* Navigation Links */}
        <div className="relative flex h-[69px] items-center">
          {links.map((link, index) => {
            const isActive = link.href === activeLink
            const isHovered = link.href === hoveredLink
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`flex w-[123px] items-center justify-center gap-1.5 text-base transition-colors duration-300 ${isActive ? 'text-[#6741FF]' : 'text-[#A2A2A2] hover:text-white'}`}
              >
                <div className="[&>svg]:w-6 [&>svg]:h-6">{link.icon}</div>
                <h1
                  className={`text-base font-semibold ${isActive ? 'text-white' : 'text-inherit'}`}
                >
                  {link.label}
                </h1>
              </a>
            )
          })}
          {/* Active Indicator */}
          <div
            className="absolute bottom-0 left-0 h-px w-[123px] bg-[#6741FF] transition-transform duration-500"
            style={{
              transform: `translateX(${indicatorIndex * 123}px)`,
              transitionTimingFunction: 'cubic-bezier(0.25, 1.4, 0.61, 0.98)',
            }}
          />
        </div>
        {/* Right Section */}
        <div className="flex h-[69px] items-center gap-3">
          {/* Leaderboard Button */}
          {showLeaderboard && (
            <button className="relative flex h-[69px] w-[123px] flex-col items-center justify-center gap-0.5 text-[#6741FF] transition-colors mx-4">
              {/* Floating Coins */}
              <CoinIcon
                className="absolute left-1 top-3 opacity-50"
                style={{
                  animation: 'coinFloat 4s ease-in-out infinite',
                  width: '10px',
                  height: '10px',
                }}
              />
              <CoinIcon
                className="absolute -left-1 top-6 opacity-25"
                style={{
                  animation: 'coin2Float 3s ease-in-out infinite reverse',
                  width: '12px',
                  height: '12px',
                }}
              />
              <CoinIcon
                className="absolute -right-1.5 top-3"
                style={{
                  animation: 'coinFloat 5s ease-in-out infinite reverse',
                  width: '12px',
                  height: '12px',
                }}
              />
              {/* Prize Amount */}
              <div className="mt-1 flex items-center gap-0.5 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=32&h=32&fit=crop"
                  alt=""
                  className="h-[18px] w-4 object-cover -mt-0.5"
                />
                <span className="text-sm font-bold">{leaderboardPrize}</span>
              </div>
              {/* Leaderboard Text */}
              <div className="relative z-10 h-4 w-[123px] text-xs font-semibold">
                LEADERBOARD
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 mx-auto my-auto h-6 w-[123px] bg-[#6741FF] opacity-50 blur-2xl rounded-full" />
              {/* Rotating Star Background */}
              <div className="absolute -z-10 h-[65px] w-[123px] overflow-hidden">
                <div
                  className="h-[124px] w-[123px]"
                  style={{
                    animation: 'rotate 60s linear infinite',
                    background:
                      'radial-gradient(circle, rgba(103, 65, 255, 0.3) 0%, transparent 70%)',
                  }}
                />
              </div>
              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 h-px w-[123px] bg-gradient-to-r from-[#6741FF] via-[#AD98FF] to-[#6741FF]" />
            </button>
          )}
          {/* Connect Button */}
          <button
            onClick={onConnectClick}
            className="rounded-2xl bg-gradient-to-t from-[#222222] to-[#303030] p-[3px] transition-opacity hover:opacity-90"
          >
            <div className="relative h-[46px] rounded-xl bg-gradient-to-b from-[#957AFF] to-[#6741FF] p-[2px] border border-[#1D1D1D]">
              <div className="relative flex h-10 items-center justify-center gap-1.5 overflow-hidden rounded-[10px] bg-[#6741FF] px-4 text-sm font-bold text-white transition-all duration-300 hover:brightness-110">
                <WalletIcon className="h-5 w-5 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
                <span className="drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                  Connect
                </span>
                {/* Hover Glow */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#6741FF] to-[#D787FF] opacity-0 mix-blend-screen transition-opacity duration-500 hover:opacity-100" />
              </div>
            </div>
          </button>
        </div>
      </nav>
    </>
  )
}