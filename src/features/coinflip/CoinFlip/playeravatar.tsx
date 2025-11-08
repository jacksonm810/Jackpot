import React from 'react'
interface Player {
  username: string
  level: number
  avatar: string
  isVIP?: boolean
}
interface PlayerAvatarProps {
  player: Player
  choice: 'heads' | 'tails'
  isWinner?: boolean
  hasLost?: boolean
}
export const PlayerAvatar: React.FC<PlayerAvatarProps> = ({
  player,
  choice,
  isWinner,
  hasLost,
}) => {
  const coinImage =
    choice === 'heads'
      ? '	https://solpot.com/static/image/tails.03d97597.png'
      : '	https://solpot.com/static/image/heads.4b0cf586.png'
  return (
    <div className="relative">
      {hasLost && (
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M10 10 L30 30 M30 10 L10 30' stroke='%23ff4444' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E"
          alt="lost"
          className="absolute inset-0 z-[11] h-10 w-10 scale-[1.3]"
        />
      )}
      <div className="relative">
        <img
          src={coinImage}
          alt="coin"
          className="absolute -right-1 -top-1 z-10 h-5 w-5"
        />
        <div
          className={`rounded-xl ${isWinner ? 'text-[#6741ff] shadow-[0_0_24px_rgba(103,65,255,0.4)]' : 'text-[#303030]'}`}
        >
          <div className="h-10 w-10 cursor-pointer overflow-hidden bg-[#303045] rounded-[11px] p-[1px] shadow-[inset_0_1.48px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:brightness-110">
            <div
              className={`relative h-[38px] w-[38px] overflow-hidden ${isWinner ? 'bg-[#6741ff]' : 'bg-[#303030]'} border border-[#222] rounded-[10px] p-[2px]`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30" />
              <div className="relative z-[3] h-8 w-8 overflow-hidden bg-[#595959] border border-[#222] rounded-lg shadow-[inset_0_5.92px_6px_rgba(0,0,0,0.5),inset_0_10.37px_6px_rgba(255,255,255,0.15)]">
                <img
                  src={player.avatar}
                  alt={player.username}
                  className="h-[30px] w-[30px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
interface PlayerInfoProps {
  player: Player
  getLevelColor: (level: number) => {
    bg: string
    text: string
  }
}
export const PlayerInfo: React.FC<PlayerInfoProps> = ({
  player,
  getLevelColor,
}) => {
  const levelColor = getLevelColor(player.level)
  const isVIP = player.level >= 100
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-white overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-150">
      <div
        className={`flex-shrink-0 overflow-hidden ${levelColor.bg} ${levelColor.text} rounded-md p-[1px] ${isVIP ? 'animate-[rotateBackground_3s_ease_infinite_alternate] bg-[length:200%_100%]' : ''}`}
      >
        <div className="flex h-5 w-7 items-center justify-center overflow-hidden bg-[rgba(34,34,45,0.8)] text-[11px] rounded-[5px]">
          {player.level}
        </div>
      </div>
      <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {player.username}
      </div>
    </div>
  )
}
