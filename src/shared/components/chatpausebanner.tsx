import React from 'react'
import { PauseIcon } from '@/shared/icons/PauseIcon'
export interface ChatPausedBannerProps {
  text?: string
  icon?: React.ReactNode
  className?: string
  onClick?: () => void
  'data-id'?: string
}
export const ChatPausedBanner: React.FC<ChatPausedBannerProps> = ({
  text = 'Chat Paused',
  icon,
  className = '',
  onClick,
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      onClick={onClick}
      className={`relative mx-auto w-full max-w-[333px] cursor-pointer rounded-md p-[1px] bg-[#141414] transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
      style={{
        backgroundImage: 'linear-gradient(rgb(51, 51, 51), rgb(19, 19, 19))',
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
      }}
    >
      <div className="flex h-9 items-center justify-between rounded-md bg-[#0f0f0f] px-3 py-2 backdrop-blur-2xl">
        <div className="flex items-center gap-1.5 text-sm text-[#919191]">
          {icon || <PauseIcon className="block" />}
          <p className="m-0">{text}</p>
        </div>
      </div>
    </div>
  )
}
