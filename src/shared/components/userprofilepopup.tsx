import React from 'react'
import { UserAvatarIcon } from '@/shared/icons'
export interface UserProfilePopupProps {
  username: string
  level: number
  avatarUrl: string
  position?: {
    top: number
    left: number
  }
  onProfileClick?: () => void
  'data-id'?: string
}
export const UserProfilePopup: React.FC<UserProfilePopupProps> = ({
  username,
  level,
  avatarUrl,
  position = {
    top: 228,
    left: 200,
  },
  onProfileClick,
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      data-popup
      className="fixed z-[999] flex min-w-[176px] w-44 flex-col bg-[#242424] shadow-xl rounded-lg border border-[#303030] text-white animate-popup"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-[#303030] p-4">
        <div className="relative h-6 w-6 rounded-full border border-[#222222] overflow-hidden cursor-pointer transition-all duration-300 hover:brightness-110">
          <img
            src={avatarUrl}
            alt={username}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="max-w-[60px] truncate text-sm font-bold">{username}</p>
        <div className="overflow-hidden rounded-md bg-[#307293] text-[#75d1ff] p-px">
          <div className="flex h-5 w-7 items-center justify-center overflow-hidden bg-[#22222d]/80 rounded-[5px] text-[11px] font-semibold">
            {level}
          </div>
        </div>
      </div>
      {/* Menu Items */}
      <div className="flex flex-col gap-1 p-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onProfileClick?.();
          }}
          className="flex items-center gap-1.5 rounded-lg border border-transparent px-3 py-2 text-sm text-[#a2a2a2] transition-colors hover:text-[#c4c4c4] hover:bg-white/5 cursor-pointer w-full text-left"
        >
          <UserAvatarIcon className="h-4 w-4" />
          <span>Profile</span>
        </button>
      </div>
    </div>
  )
}
