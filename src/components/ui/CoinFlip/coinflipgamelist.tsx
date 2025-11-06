import React, { useState, useEffect, useRef } from 'react'
import { CoinflipLogo, ChevronIcon, SolanaIcon } from '../../icons'
import { GameRow } from './gamerow'
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
export interface CoinflipGameListProps {
  games?: Game[]
  totalGames?: number
  onCreateGame?: (amount: number, choice: 'heads' | 'tails') => void
  onJoinGame?: (gameId: string) => void
  onViewGame?: (gameId: string) => void
  'data-id'?: string
}
export const CoinflipGameList: React.FC<CoinflipGameListProps> = ({
  games = [],
  totalGames = 53,
  onCreateGame,
  onJoinGame,
  onViewGame,
  'data-id': dataId,
}) => {
  const [betAmount, setBetAmount] = useState('0')
  const [selectedCoin, setSelectedCoin] = useState<'heads' | 'tails'>('heads')
  const [sortBy, setSortBy] = useState<'high-to-low' | 'low-to-high'>(
    'high-to-low',
  )
  const [amountFilter, setAmountFilter] = useState('all')
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false)
  const [isAmountMenuOpen, setIsAmountMenuOpen] = useState(false)
  const sortMenuRef = useRef<HTMLDivElement>(null)
  const amountMenuRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        (isSortMenuOpen && sortMenuRef.current && !sortMenuRef.current.contains(target)) ||
        (isAmountMenuOpen && amountMenuRef.current && !amountMenuRef.current.contains(target))
      ) {
        if (sortMenuRef.current && !sortMenuRef.current.contains(target)) {
          setIsSortMenuOpen(false)
        }
        if (amountMenuRef.current && !amountMenuRef.current.contains(target)) {
          setIsAmountMenuOpen(false)
        }
      }
    }

    if (isSortMenuOpen || isAmountMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSortMenuOpen, isAmountMenuOpen])
  return (
    <div
      data-id={dataId}
      className="w-full max-w-[1196px] mx-auto text-white px-6"
    >
      {/* Header Section */}
      <div className="relative flex items-center gap-8 pb-9 border-b border-[#1d1d1d]">
        <div className="relative z-[2] flex">
          <div className="h-[60px]">
            <div className="flex items-center gap-2">
              <CoinflipLogo className="h-7 w-7 text-[#fef9c3]" />
              <h2 className="text-[32px] font-extrabold uppercase tracking-[1.6px] font-['Airstrike',sans-serif]">
                Coinflip
              </h2>
            </div>
            <h4 className="mt-3 text-sm text-[#a2a2a2]">
              The classic 50/50 game mode.
            </h4>
          </div>
        </div>
        {/* Bet Controls */}
        <div className="relative z-[2] ml-auto flex items-end gap-6 h-11">
          <div className="flex gap-1 w-[356px]">
            {/* Bet Amount Input */}
            <div className="relative w-[220px]">
              <p className="absolute -top-6 flex gap-1 text-xs font-medium text-[#a2a2a2] mb-2">
                Bet Amount
                <span className="text-white">~$0</span>
              </p>
              <div className="relative w-[220px]">
                <div className="absolute top-0 bottom-0 left-[10px] my-[10px] h-6 w-6">
                  <img
                    src="	https://solpot.com/img/solana.png"
                    alt="SOL"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </div>
                <input
                  type="text"
                  placeholder="0.00"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  className="h-11 w-[220px] bg-[#242424] border border-[#292929] rounded-lg pl-11 pr-3 text-sm text-white transition-colors duration-300"
                />
              </div>
            </div>
            {/* Quick Bet Buttons */}
            <div className="relative flex gap-2 h-11">
              <button className="bg-gradient-to-t from-[#222] to-[#303030] rounded-2xl p-[3px] transition-opacity duration-300 hover:opacity-80">
                <div className="relative h-[38px] w-[54px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-[2px]">
                  <div className="relative flex h-8 min-w-[40px] items-center justify-center overflow-hidden bg-[#303030] px-4 text-sm font-medium text-[#c4c4c4] transition-all duration-300 rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                    +0.1
                  </div>
                </div>
              </button>
              <button className="bg-gradient-to-t from-[#222] to-[#303030] rounded-2xl p-[3px] transition-opacity duration-300 hover:opacity-80">
                <div className="relative h-[38px] w-[54px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-[2px]">
                  <div className="relative flex h-8 min-w-[40px] items-center justify-center overflow-hidden bg-[#303030] px-4 text-sm font-medium text-[#c4c4c4] transition-all duration-300 rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                    +1
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* Coin Selection & Create Game */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://solpot.com/static/image/heads.4b0cf586.png"
                alt="heads"
                className={`h-11 w-11 cursor-pointer transition-opacity duration-300 ${selectedCoin === 'heads' ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setSelectedCoin('heads')}
              />
              <img
                src="	https://solpot.com/static/image/tails.03d97597.png"
                alt="tails"
                className={`h-11 w-11 cursor-pointer transition-opacity duration-300 ${selectedCoin === 'tails' ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setSelectedCoin('tails')}
              />
            </div>
            <button
              disabled={!betAmount || betAmount === '0'}
              onClick={() =>
                onCreateGame?.(parseFloat(betAmount), selectedCoin)
              }
              className="bg-gradient-to-t from-[#222] to-[#303030] rounded-2xl p-[3px] transition-opacity duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-default"
            >
              <div className="relative h-[38px] bg-gradient-to-b from-[#957aff] to-[#6741ff] border border-[#1d1d1d] rounded-xl p-[2px]">
                <div className="relative flex h-8 items-center justify-center overflow-hidden bg-[#6741ff] px-4 text-sm font-bold text-white transition-all duration-300 rounded-[10px] shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                  <span className="px-4">Create Game</span>
                  <div className="absolute inset-0 z-[1] bg-[radial-gradient(68.53%_169.15%_at_50%_-27.56%,#d787ff_0%,#6741ff_100%)] opacity-0 mix-blend-screen transition-opacity duration-500" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <img
          src="	https://solpot.com/static/image/halftone.af312876.png"
          alt=""
          className="absolute right-[730px] top-[-17px] h-[97px] w-[155px]"
        />
      </div>
      {/* Filter Section */}
      <div className="mt-9 mb-6 flex items-center h-10 text-sm">
        <div className="flex items-center gap-3">
          <div className="font-semibold uppercase tracking-[0.7px] text-[#595959]">
            All Games{' '}
            <span className="ml-1.5 text-[#c4c4c4]">{totalGames}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-[rgba(173,152,255,0.1)] rounded-lg py-1 px-3">
            <img
              src="	https://solpot.com/img/solana.png"
              alt="SOL"
              className="h-4 w-4"
            />
            <p className="text-[13px] font-medium text-[#ad98ff]">
              Payouts are settled in SOL
            </p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          {/* Sort By */}
          <div className="flex items-center gap-3">
            <p className="font-medium text-[#d9d9d9]">Sort By</p>
            <div className="relative" ref={sortMenuRef}>
              <button
                onClick={() => {
                  setIsSortMenuOpen(!isSortMenuOpen)
                  setIsAmountMenuOpen(false)
                }}
                className="relative flex h-10 items-center justify-center bg-[#1d1d1d] rounded-lg px-4 text-sm font-medium text-[#a2a2a2] transition-colors duration-300 hover:bg-[#242424]"
              >
                <span>{sortBy === 'high-to-low' ? 'High to Low' : 'Low to High'}</span>
                <ChevronIcon className="ml-2 -rotate-90 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
              </button>
              {isSortMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-lg border border-[#303030] bg-[#141414] text-white shadow-xl z-20">
                  {[
                    { value: 'high-to-low', label: 'High to Low' },
                    { value: 'low-to-high', label: 'Low to High' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value as 'high-to-low' | 'low-to-high')
                        setIsSortMenuOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#1f1f1f] ${
                        sortBy === option.value ? 'text-[#ad98ff]' : 'text-[#e5e5e5]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Amount Filter */}
          <div className="flex items-center gap-3">
            <p className="font-medium text-[#d9d9d9]">Amount</p>
            <div className="relative" ref={amountMenuRef}>
              <button
                onClick={() => {
                  setIsAmountMenuOpen(!isAmountMenuOpen)
                  setIsSortMenuOpen(false)
                }}
                className="relative flex h-10 items-center justify-center bg-[#1d1d1d] rounded-lg px-4 text-sm font-medium text-[#a2a2a2] transition-colors duration-300 hover:bg-[#242424]"
              >
                <SolanaIcon className="mr-1.5 h-5 w-5" />
                <span>
                  {amountFilter === 'all' ? 'All' : 
                   amountFilter === '0-0.01' ? '0 - 0.01' :
                   amountFilter === '0.01-0.1' ? '0.01 - 0.1' :
                   amountFilter === '0.1-1' ? '0.1 - 1' :
                   amountFilter === '1-10' ? '1 - 10' :
                   amountFilter === '10+' ? '10+' : 'All'}
                </span>
                <ChevronIcon className="ml-2 -rotate-90 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
              </button>
              {isAmountMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-lg border border-[#303030] bg-[#141414] text-white shadow-xl z-20">
                  {[
                    { value: 'all', label: 'All' },
                    { value: '0-0.01', label: '0 - 0.01' },
                    { value: '0.01-0.1', label: '0.01 - 0.1' },
                    { value: '0.1-1', label: '0.1 - 1' },
                    { value: '1-10', label: '1 - 10' },
                    { value: '10+', label: '10+' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setAmountFilter(option.value)
                        setIsAmountMenuOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#1f1f1f] ${
                        amountFilter === option.value ? 'text-[#ad98ff]' : 'text-[#e5e5e5]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Game List */}
      <div className="flex flex-col gap-4">
        {(games.length ? games : Array.from({ length: 10 }, (_, i) => ({
          id: `placeholder-${i}`,
          player1: {
            username: 'Waiting',
            level: 1,
            avatar: '	https://solpot.com/cdn/avatars/98e84ebc2ca86033fcddb714436e0be59fe0ed75e043e6a9e3554a4f5735f2aa.jpeg',
          },
          betAmount: 0.0,
          player1Choice: 'heads' as const,
          status: 'waiting' as const,
        }))).map((g) => (
          <GameRow
            key={g.id}
            game={g as any}
            onJoin={() => onJoinGame?.(g.id)}
            onView={() => onViewGame?.(g.id)}
          />
        ))}
      </div>
    </div>
  )
}
