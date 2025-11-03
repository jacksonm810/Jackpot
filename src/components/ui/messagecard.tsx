import React from 'react'
export interface MessageCardProps {
  avatarUrl: string
  username: string
  level?: number
  message: string
  timestamp: string
  onClick?: () => void
  'data-id'?: string
}
export const MessageCard: React.FC<MessageCardProps> = ({
  avatarUrl,
  username,
  level,
  message,
  timestamp,
  onClick,
  'data-id': dataId,
}) => {
  return (
    <div
      data-id={dataId}
      onClick={onClick}
      className="relative cursor-pointer bg-[rgba(34,34,34,0.9)] hover:bg-[rgba(40,40,40,0.9)] transition-colors duration-200 rounded-lg p-3 pl-8 w-full text-white"
    >
      {/* Avatar with complex border effect */}
      <div className="absolute left-[-12px] top-3 w-9 h-9 aspect-square overflow-hidden bg-[#303045] transition-all duration-300 rounded-[11px] p-[1px]">
        <div
          className="w-[34px] h-[34px] rounded-[10px] p-[2px] border border-[#222222]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(138, 138, 138), rgb(90, 90, 90))',
          }}
        >
          <div
            className="relative w-7 h-7 overflow-hidden bg-[rgba(0,0,0,0.75)] rounded-lg border border-[#222222]"
            style={{
              boxShadow:
                'inset 0 5.92px 6px rgba(0, 0, 0, 0.5), inset 0 10.37px 6px rgba(255, 255, 255, 0.15)',
            }}
          >
            <img
              src={avatarUrl}
              alt={username}
              className="w-[26px] h-[26px] object-cover object-center block select-none"
              draggable="false"
            />
          </div>
        </div>
      </div>
      {/* Timestamp badge */}
      <div className="absolute right-0 top-0 bg-[#242424] rounded-tl-none rounded-tr-lg rounded-br-none rounded-bl-md px-1.5 py-0.5">
        <p className="text-[11px] leading-4 text-[#595959] select-none m-0">
          {timestamp}
        </p>
      </div>
      {/* Content */}
      <div className="relative z-[3]">
        <div className="flex items-center gap-1.5">
          <p className="max-w-[150px] text-sm leading-5 font-bold truncate select-none m-0">
            {username}
          </p>
          {level !== undefined && (
            <div className="overflow-hidden bg-[#2a417c] text-[#60aaff] rounded-md p-[1px]">
              <div className="flex h-5 w-7 items-center justify-center overflow-hidden bg-[rgba(34,34,45,0.8)] text-[11px] font-semibold rounded-[5px]">
                {level}
              </div>
            </div>
          )}
        </div>
        <p className="select-text text-sm leading-5 text-[#a2a2a2] break-words mt-0.5 m-0">
          {message}
        </p>
      </div>
    </div>
  )
}
