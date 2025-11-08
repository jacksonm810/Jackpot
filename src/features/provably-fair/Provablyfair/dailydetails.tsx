import React, { useState } from 'react'
import { GiftIcon, TargetIcon, CoinflipIcon } from '@/shared/icons'
import { DailyCaseDetails } from './dailycasedetails'
import { JackpotVerification } from './jakportdetails'
import { CoinflipDetails } from './coinflipdetails'

interface ProvablyFairProps {
  'data-id'?: string
}
interface GameType {
  id: string
  name: string
  icon: React.ReactNode
  color: string
}
const games: GameType[] = [
  {
    id: 'daily-case',
    name: 'Daily Case',
    icon: <GiftIcon className="w-4 h-4" />,
    color: 'text-purple-400',
  },
  {
    id: 'jackpot',
    name: 'Jackpot',
    icon: <TargetIcon className="w-4 h-4" />,
    color: 'text-purple-400',
  },
  {
    id: 'coinflip',
    name: 'Coinflip',
    icon: <CoinflipIcon className="w-4 h-4" />,
    color: 'text-purple-400',
  },
]
export function ProvablyFair({ 'data-id': dataId }: ProvablyFairProps) {
  const [selectedGame, setSelectedGame] = useState<string>('daily-case')
  return (
    <div
      data-id={dataId}
      className="w-full min-h-screen text-white font-sans"
    >
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-20 py-12">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-normal mb-3"
            style={{
              fontFamily: 'Airstrike, sans-serif',
            }}
          >
            Provably Fair
          </h1>
          <p className="text-sm text-gray-400 font-medium max-w-[466px] mx-auto">
            Verify your bets and learn how the website uses blockchain to verify
            all bets to ensure nothing is rigged.
          </p>
        </div>
        {/* Main Content */}
        <div className="flex gap-12">
          {/* Sidebar */}
          <div className="flex-shrink-0 w-[190px] p-4">
            <div className="flex items-center justify-between mb-5">
              <h4
                className="text-2xl font-black uppercase"
                style={{
                  fontFamily: 'Airstrike, sans-serif',
                }}
              >
                Games
              </h4>
            </div>
            <div className="flex flex-col gap-1">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game.id)}
                  className={`flex items-center justify-start h-10 px-4 rounded-lg transition-all duration-300 ${selectedGame === game.id ? 'bg-[#6741FF] text-white' : 'bg-transparent text-gray-400 hover:bg-[#1a1a1a]'}`}
                >
                  <div className="flex items-center">
                    <span
                      className={
                        selectedGame === game.id ? game.color : 'text-current'
                      }
                    >
                      {game.icon}
                    </span>
                    <span className="ml-2 text-sm">{game.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {/* Main Content Area - Conditionally Render Child Components */}
          {selectedGame === 'daily-case' && <DailyCaseDetails />}
          {selectedGame === 'jackpot' && <JackpotVerification />}
          {selectedGame === 'coinflip' && <CoinflipDetails />}
        </div>
      </div>
    </div>
  )
}
