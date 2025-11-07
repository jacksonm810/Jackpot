import React from 'react'
import { XIcon, DiscordIcon } from '../icons'
export interface NavigationLink {
  label: string
  href: string
}
export interface SocialLink {
  icon: 'twitter' | 'discord'
  href: string
  ariaLabel?: string
}
export interface NavbarProps {
  socialLinks?: SocialLink[]
  navigationLinks?: NavigationLink[]
  totalBets?: number
  onSupportClick?: () => void
  onLinkClick?: (href: string) => void
  className?: string
  'data-id'?: string
}
export const Navbar: React.FC<NavbarProps> = ({
  socialLinks = [
    {
      icon: 'twitter',
      href: 'https://x.com/solpotcom',
      ariaLabel: 'Twitter',
    },
    {
      icon: 'discord',
      href: 'https://discord.gg/solpot',
      ariaLabel: 'Discord',
    },
  ],
  navigationLinks = [
    {
      label: 'Provably Fair',
      href: '/fairness',
    },
    {
      label: 'Terms of Service',
      href: '/terms',
    },
  ],
  totalBets = 10878269,
  onSupportClick,
  onLinkClick,
  className = '',
  'data-id': dataId,
}) => {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    onLinkClick?.(href);
  };
  const renderIcon = (iconType: 'twitter' | 'discord') => {
    return iconType === 'twitter' ? (
      <XIcon className="h-3.5 w-3.5 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
    ) : (
      <DiscordIcon className="h-3.5 w-3.5 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
    )
  }
  return (
    <div
      data-id={dataId}
      className={`flex h-10 w-full items-center justify-between bg-[#0d0d0d] px-2.5 text-white border-b border-[#0d0d0d] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        {/* Social Links */}
        <div className="flex gap-2.5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <button className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-[#303030] text-[#a2a2a2] transition-all duration-300 hover:bg-[#404040]">
                {renderIcon(link.icon)}
              </button>
            </a>
          ))}
        </div>
        {/* Navigation Links */}
        <div className="ml-1 flex items-center gap-4">
          {navigationLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              onClick={(e) => handleLinkClick(link.href, e)}
            >
              <p className="m-0 text-sm font-medium text-[#a2a2a2] transition-colors duration-150 hover:text-white">
                {link.label}
              </p>
            </a>
          ))}
          <p
            onClick={onSupportClick}
            className="m-0 cursor-pointer text-sm font-medium text-[#a2a2a2] transition-colors duration-150 hover:text-white"
          >
            Support
          </p>
        </div>
      </div>
      {/* Stats Display */}
      <p className="m-0 text-sm font-semibold text-[#bfbfcd]">
        <span className="mr-1 font-bold text-white">
          {totalBets.toLocaleString()}
        </span>
        Total Bets
      </p>
    </div>
  )
}