import React, { useState } from "react";
import {
  JackpotIcon,
  CoinflipIcon,
  AffiliatesIcon,
  CoinIcon,
  WalletIcon,
} from '@/shared/icons';
export interface NavigationLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}
export interface NavigationProps {
  links?: NavigationLink[];
  activeLink?: string;
  onLinkClick?: (href: string) => void;
  onConnectClick?: () => void;
  showLeaderboard?: boolean;
  leaderboardPrize?: string;
  className?: string;
  "data-id"?: string;
}
const defaultLinks: NavigationLink[] = [
  {
    label: "Jackpot",
    href: "/",
    icon: <JackpotIcon />,
  },
  {
    label: "Coinflip",
    href: "/coinflip",
    icon: <CoinflipIcon />,
  },
  {
    label: "Affiliates",
    href: "/affiliates",
    icon: <AffiliatesIcon />,
  },
];
export function Navigation({
  links = defaultLinks,
  activeLink = "/",
  onLinkClick,
  onConnectClick,
  showLeaderboard = true,
  leaderboardPrize = "250,000",
  className = "",
  "data-id": dataId,
}: NavigationProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const activeIndex = links.findIndex((link) => link.href === activeLink);
  const hoveredIndex = links.findIndex((link) => link.href === hoveredLink);
  const indicatorIndex = hoveredLink ? hoveredIndex : activeIndex;
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    onLinkClick?.(href);
  };
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
            const isActive = link.href === activeLink;
            const isHovered = link.href === hoveredLink;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`flex w-[123px] items-center justify-center gap-1.5 text-base transition-colors duration-300 ${
                  isActive
                    ? "text-[#6741FF]"
                    : "text-[#A2A2A2] hover:text-white"
                }`}
              >
                <div className="[&>svg]:w-6 [&>svg]:h-6">{link.icon}</div>
                <h1
                  className={`text-base font-semibold ${
                    isActive ? "text-white" : "text-inherit"
                  }`}
                >
                  {link.label}
                </h1>
              </a>
            );
          })}
          {/* Active Indicator */}
          <div
            className="absolute bottom-0 left-0 h-px w-[123px] bg-[#6741FF] transition-transform duration-500"
            style={{
              transform: `translateX(${indicatorIndex * 123}px)`,
              transitionTimingFunction: "cubic-bezier(0.25, 1.4, 0.61, 0.98)",
            }}
          />
        </div>
        {/* Right Section */}
        <div className="flex h-[69px] items-center gap-3">
          {/* Leaderboard Button */}
          <button className="relative text-violet-600 items-center bg-transparent caret-transparent gap-x-0.5 flex flex-col h-full justify-center gap-y-0.5 text-center w-[123px] ml-4 mr-auto p-0 md:mr-4">
            <img
              src="https://c.animaapp.com/mhnl16iioSW2oC/assets/icon-10.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-2.5 opacity-50 rotate-[-165.00000507213028deg] w-2.5 left-1 top-3"
            />
            <img
              src="https://c.animaapp.com/mhnl16iioSW2oC/assets/icon-11.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-3 opacity-25 -rotate-45 w-3 -left-1 top-6"
            />
            <img
              src="https://c.animaapp.com/mhnl16iioSW2oC/assets/icon-12.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-3 rotate-[49.99996654906819deg] w-3 -right-1.5 top-3"
            />
            <div className="items-center box-border caret-transparent gap-x-0.5 flex gap-y-0.5 mt-1">
              <img
                src="https://c.animaapp.com/mhnl16iioSW2oC/assets/3d-sol.webp"
                alt=""
                className="relative box-border caret-transparent max-w-full object-cover w-4 -top-0.5"
              />
              <img
                src="https://c.animaapp.com/mhnl16iioSW2oC/assets/250000-small.png"
                alt=""
                className="aspect-[387_/_44] box-border caret-transparent h-3 max-w-full object-cover"
              />
            </div>
            <div className="relative box-border caret-transparent h-4 w-[123px] z-10">
              <img
                src="https://c.animaapp.com/mhnl16iioSW2oC/assets/en.webp"
                alt=""
                className="box-border caret-transparent h-full max-w-full object-contain w-full"
              />
            </div>
            <div className="absolute bg-violet-600 box-border caret-transparent blur-lg h-[33.3333%] opacity-50 w-full z-[-1] m-auto rounded-[100%] inset-0"></div>
            <div className="[mask-image:linear-gradient(rgb(0,0,0),rgba(0,0,0,0))] absolute box-border caret-transparent h-[65px] z-[-1]">
              <div className="absolute box-border caret-transparent h-full w-full left-0 top-0">
                <div className="absolute box-border caret-transparent h-full pointer-events-none w-full z-[-1] left-0 top-0">
                  <img
                    src="https://c.animaapp.com/mhnl16iioSW2oC/assets/image-1.png"
                    className="aspect-[auto_123_/_65] box-border caret-transparent max-w-full w-[123px]"
                  />
                </div>
              </div>
              <img
                src="https://c.animaapp.com/mhnl16iioSW2oC/assets/star-basic.webp"
                alt=""
                className="box-border caret-transparent max-w-full object-cover w-[123px]"
              />
            </div>
            <div className="absolute bg-[linear-gradient(to_right,rgb(103,65,255),rgb(173,152,255),rgb(103,65,255))] box-border caret-transparent h-px w-full left-0 -bottom-px"></div>
          </button>
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
  );
}
