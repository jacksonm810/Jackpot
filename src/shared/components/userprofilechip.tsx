import React from 'react'
import { UserreplyIcon } from '@/shared/icons'
export interface UserProfileChipProps {
  avatarUrl: string
  username: string
  'data-id'?: string
}
export const UserProfileChip: React.FC<UserProfileChipProps> = ({
  avatarUrl,
  username,
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      className="flex items-center gap-1 w-fit max-w-full bg-[#141414] text-white px-1 py-0.5 mb-1.5"
    >
      <UserreplyIcon className="h-3 w-3 flex-shrink-0 -scale-x-100 opacity-25" />
      <div className="relative h-5 w-5 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border border-[#222222] mr-0.5 transition-all duration-300 hover:brightness-110">
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-xs text-white/50 truncate">{username}</p>
    </div>
  )
}
