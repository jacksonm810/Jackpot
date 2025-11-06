import React from 'react'
import { SolanaIcon, EyeIcon, SparkleIcon } from '../../icons'
import { PlayerAvatar, PlayerInfo } from './playeravatar'
interface Player {
  username: string
  level: number
  avatar: string
  isVIP?: boolean
}
interface Game {
  id: string
  player1: Player
  player2?: Player
  betAmount: number
  player1Choice: 'heads' | 'tails'
  player2Choice?: 'heads' | 'tails'
  status: 'waiting' | 'flipping' | 'completed'
  winner?: 'player1' | 'player2'
}
interface GameRowProps {
  game: Game
  onJoin?: () => void
  onView?: () => void
}
export const GameRow: React.FC<GameRowProps> = ({ game, onJoin, onView }) => {
  const getLevelColor = (level: number) => {
    if (level >= 100)
      return {
        bg: 'bg-gradient-to-r from-[#9748e6] via-[#4d94e9] via-[#debc63] via-[#ce4ec2] to-[#ff814b]',
        text: 'text-white',
      }
    if (level >= 50)
      return {
        bg: 'bg-[#7c432a]',
        text: 'text-[#ffa845]',
      }
    if (level >= 20)
      return {
        bg: 'bg-[#2a417c]',
        text: 'text-[#60aaff]',
      }
    if (level >= 10)
      return {
        bg: 'bg-[#307293]',
        text: 'text-[#75d1ff]',
      }
    return {
      bg: 'bg-[#616161]',
      text: 'text-[#d2d2d2]',
    }
  }
  const isCompleted = game.status === 'completed'
  const isFlipping = game.status === 'flipping'
  const hasLost = isCompleted && game.player2
  return (
    <div className={`h-[84px] ${isCompleted ? 'opacity-50' : ''}`}>
      <div className="relative flex w-full items-center justify-between bg-gradient-to-t from-[#222] to-[#303030] rounded-[15px] p-[3px] transition-transform duration-150 hover:scale-[1.01]">
        <div className="relative flex h-[78px] w-full items-center justify-between gap-4 overflow-hidden bg-[rgba(23,23,33,0.9)] border border-[#1d1d1d] rounded-xl px-6 py-5">
          {/* Decorative borders */}
          <div className="pointer-events-none absolute inset-0 opacity-10 mask-gradient-to-b border-[3px] border-white/80 rounded-xl" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(103,65,255,0.5)] to-transparent opacity-5" />
          {/* Player 1 */}
          <div className="flex items-center gap-6">
            <div className="relative z-[2] flex items-center gap-4 transition-opacity duration-150">
              <PlayerAvatar
                player={game.player1}
                choice={game.player1Choice}
                isWinner={isCompleted && game.winner === 'player1'}
                hasLost={hasLost && game.winner === 'player2'}
              />
              <PlayerInfo player={game.player1} getLevelColor={getLevelColor} />
            </div>
            {/* Sparkle Icon */}
            <div className="relative mr-2">
              <div
                className="relative z-[2] h-6 w-6 transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <SparkleIcon
                  className="absolute inset-0 h-6 w-6 text-[#a2a2a2]"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                />
                <SparkleIcon
                  className="absolute inset-0 h-6 w-6 text-[#7755ff]"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                />
              </div>
              <div className="absolute top-0 h-6 w-6 bg-[#7755ff] opacity-0 blur-2xl rounded-full" />
            </div>
            {/* Player 2 or Waiting */}
            <div
              className={`relative z-[2] flex items-center gap-4 transition-opacity duration-150 ${!game.player2 ? 'opacity-50' : ''}`}
            >
              {game.player2 ? (
                <>
                  <PlayerAvatar
                    player={game.player2}
                    choice={game.player2Choice!}
                    isWinner={isCompleted && game.winner === 'player2'}
                    hasLost={hasLost && game.winner === 'player1'}
                  />
                  <PlayerInfo
                    player={game.player2}
                    getLevelColor={getLevelColor}
                  />
                </>
              ) : (
                <>
                  <div className="relative">
                    <img
                      src="https://solpot.com/static/image/heads.4b0cf586.png"
                      alt="coin"
                      className="absolute -right-1 -top-1 z-10 h-5 w-5"
                    />
                    <div className="h-10 w-10 rounded-xl overflow-hidden bg-[#303045] border border-[#222] p-[1px]">
                      <div className="relative h-[38px] w-[38px] overflow-hidden bg-[#303030] opacity-50 border border-[#222] rounded-[10px] p-[2px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30" />
                        <div className="relative z-[3] h-8 w-8 overflow-hidden bg-transparent border border-[#222] rounded-lg shadow-[inset_0_5.92px_6px_rgba(0,0,0,0.5),inset_0_10.37px_6px_rgba(255,255,255,0.15)]">
                          <img
                            src="https://solpot.com/img/unknown.webp"
                            alt="unknown"
                            className="h-[30px] w-[30px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <div className="flex-shrink-0 overflow-hidden bg-[#616161] text-[#d2d2d2] rounded-md p-[1px]">
                      <div className="flex h-5 w-7 items-center justify-center overflow-hidden bg-[rgba(34,34,45,0.8)] text-[11px] rounded-[5px]">
                        1
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      Waiting...
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Bet Amount & Actions */}
          <div className="flex items-center gap-4">
            <div className="h-10 bg-gradient-to-b from-[#2b2a33] to-transparent shadow-[0_0.9px_3.6px_0.9px_rgba(0,0,0,0.12),0_2.7px_2.92px_-1.35px_rgba(0,0,0,0.25),0_0_0.22px_0.67px_rgba(0,0,0,0.05),0_0_0.22px_0.22px_rgba(0,0,0,0.07),0_0_0_1px_#1d1d1d] border border-[#1d1d1d] rounded-lg p-[1px]">
              <div className="flex h-9 items-center gap-1.5 bg-[#12121c] rounded-md px-3">
                <SolanaIcon className="h-5 w-5" />
                <p className="text-sm font-bold">{game.betAmount}</p>
              </div>
            </div>
            <div className="block h-6 w-px bg-[#22222d]" />
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {game.status === 'waiting' && (
                <button
                  disabled={!game.player2}
                  onClick={onJoin}
                  className="bg-gradient-to-t from-[#222] to-[#303030] rounded-2xl p-[3px] transition-opacity duration-300 hover:opacity-90 disabled:opacity-50"
                >
                  <div className="relative h-[38px] bg-gradient-to-b from-[#957aff] to-[#6741ff] border border-[#1d1d1d] rounded-xl p-[2px]">
                    <div className="relative flex h-8 items-center justify-center overflow-hidden bg-[#6741ff] px-4 text-base font-medium text-white transition-all duration-300 rounded-[10px] shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                      Join
                    </div>
                  </div>
                </button>
              )}
              {game.status === 'flipping' && (
                <button
                  disabled
                  className="bg-gradient-to-t from-[#222] to-[#303030] rounded-2xl p-[3px] opacity-50"
                >
                  <div className="relative h-[38px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-[2px]">
                    <div className="relative flex h-8 items-center justify-center overflow-hidden bg-[#303030] px-4 text-base font-medium text-white rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                      Flipping...
                    </div>
                  </div>
                </button>
              )}
              {game.status === 'completed' && game.winner && (
                <button className="bg-gradient-to-t from-[#222] to-[#303030] rounded-2xl p-[3px] transition-opacity duration-300 hover:opacity-90">
                  <div className="relative h-[38px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-[2px]">
                    <div className="relative flex h-8 items-center justify-center gap-2 overflow-hidden bg-[#303030] px-4 text-base font-medium text-white rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                      <img
                        src={
                          game.winner === 'player1'
                            ? game.player1.avatar
                            : game.player2!.avatar
                        }
                        alt="winner"
                        className="h-6 w-6 rounded-md border border-[#222] drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]"
                      />
                      <p className="text-base font-medium">Winner</p>
                    </div>
                  </div>
                </button>
              )}
              <button
                onClick={onView}
                className="bg-gradient-to-t from-[#222] to-[#303030] rounded-2xl p-[3px] transition-opacity duration-300 hover:opacity-90"
              >
                <div className="relative h-[38px] w-12 bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-[2px]">
                  <div className="relative flex h-8 items-center justify-center overflow-hidden bg-[#303030] text-sm font-medium text-white rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                    <EyeIcon className="h-5 w-5 text-[#c4c4c4] drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
