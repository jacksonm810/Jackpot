
import React from 'react'
import { LogoIcon } from '../icons'
interface LogoProps {
  href?: string
  videoSrc?: string
  glowImageSrc?: string
  showVideo?: boolean
  showGlow?: boolean
  className?: string
  'data-id'?: string
}
export const Logo: React.FC<LogoProps> = ({
  href = '/',
  videoSrc = '/assets/icon.gif',
  glowImageSrc = '/assets/icon.gif',
  showVideo = true,
  showGlow = true,
  className = '',
  'data-id': dataId,
}) => {
  return (
    <a
      href={href}
      data-id={dataId}
      className={`relative flex h-[109px] w-full items-center justify-center bg-[#141414] border-r border-border/50 ${className}`}
    >
      {showGlow && (
        <img
          src={glowImageSrc}
          alt=""
          className="absolute left-0 top-0 -z-10 block h-[109px] w-full opacity-50"
        />
      )}
      <div className="flex items-center gap-0">
        {showVideo && (
          <img
            src={videoSrc}
            className="block h-16 w-16 mix-blend-lighten"
          />
        )}
        <LogoIcon className="block text-white" />
      </div>
    </a>
  )
}
