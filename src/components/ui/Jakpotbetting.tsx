import React, { useState } from 'react'
import { BigcoinIcon } from '../icons'
interface JackpotBettingProps {
  'data-id'?: string
  onPlaceBet?: (amount: number) => void
  disabled?: boolean
  className?: string
}
export const JackpotBetting: React.FC<JackpotBettingProps> = ({
  'data-id': dataId,
  onPlaceBet,
  disabled = false,
  className = '',
}) => {
  const [betAmount, setBetAmount] = useState('0')
  const handleQuickAdd = (amount: number) => {
    const currentAmount = parseFloat(betAmount) || 0
    setBetAmount((currentAmount + amount).toString())
  }
  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setBetAmount(value)
    }
  }
  const handlePlaceBet = () => {
    if (onPlaceBet && !disabled) {
      onPlaceBet(parseFloat(betAmount) || 0)
    }
  }
  return (
    <div
      data-id={dataId}
      className={`flex flex-col xl:flex-row w-full justify-between gap-4 xl:gap-6 xl:items-center text-white p-4 sm:p-5 ${className}`}
    >
      {/* Header Section */}
      <div className="flex flex-1 gap-2 sm:gap-3 xl:gap-4 items-center min-w-0">
        <div className="flex flex-col min-w-0 flex-shrink-0">
          <div className="mb-2 sm:mb-2.5 flex items-center gap-2">
            <BigcoinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#6741ff] flex-shrink-0" />
            <h2
              className="text-xl sm:text-2xl xl:text-[32px] font-normal leading-7 m-0 truncate"
              style={{
                fontFamily: 'Airstrike, sans-serif',
              }}
            >
              Jackpot
            </h2>
          </div>
          <h4 className="text-xs sm:text-sm font-medium text-[#bfbfcd] whitespace-nowrap m-0">
            Winner takes all...
          </h4>
        </div>
        <img
          src="/assets/halftone.e9491561.webp"
          alt="Jackpot decoration"
          className="hidden xl:block h-[79px] w-[109px] object-cover flex-shrink-0"
        />
      </div>
      {/* Betting Controls */}
      <div className="flex flex-col sm:flex-row flex-shrink-0 items-stretch sm:items-end gap-3 xl:gap-2 xl:mt-[35px] min-w-0">
        <div className="flex-1 sm:flex-initial sm:min-w-[240px] xl:min-w-[280px] min-w-0">
          <p className="flex gap-1 text-xs font-semibold text-[#a2a2a2] mb-2 whitespace-nowrap">
            Bet Amount
            <span className="text-white">~$0</span>
          </p>
          <div className="flex h-11 gap-1.5 min-w-0">
            {/* Bet Amount Input */}
            <div className="relative flex-1 min-w-0">
              <div className="absolute top-0 bottom-0 left-2.5 my-auto h-5 w-5 sm:h-6 sm:w-6 z-10">
                <img
                  src="/assets/solana.png"
                  alt="Solana"
                  className="h-full w-full rounded-full"
                />
              </div>
              <input
                type="text"
                placeholder="0.00"
                value={betAmount}
                onChange={handleBetAmountChange}
                className="h-11 w-full bg-[#242424] border border-[#292929] rounded-lg pl-8 sm:pl-11 pr-3 text-white text-xs sm:text-sm transition-colors duration-300 focus:outline-none focus:border-[#6741ff]"
              />
            </div>
            {/* Quick Add Buttons */}
            <button
              onClick={() => handleQuickAdd(0.1)}
              className="flex-shrink-0 cursor-pointer p-0.5 bg-gradient-to-t from-[#232323] to-[#303030] border border-[#1d1d1d] rounded-2xl transition-opacity duration-300 hover:opacity-80"
            >
              <div className="relative h-[38px] w-[48px] sm:w-[54px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-0.5">
                <div
                  className="relative flex h-8 w-10 sm:w-12 min-w-[40px] items-center justify-center overflow-hidden bg-[#303030] px-2 sm:px-4 text-xs sm:text-sm font-medium text-[#c4c4c4] rounded-lg transition-all duration-300"
                  style={{
                    textShadow: '0 2px 0 rgba(0,0,0,0.5)',
                  }}
                >
                  +0.1
                </div>
              </div>
            </button>
            <button
              onClick={() => handleQuickAdd(1)}
              className="flex-shrink-0 cursor-pointer p-0.5 bg-gradient-to-t from-[#232323] to-[#303030] border border-[#1d1d1d] rounded-2xl transition-opacity duration-300 hover:opacity-80"
            >
              <div className="relative h-[38px] w-[48px] sm:w-[54px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-0.5">
                <div
                  className="relative flex h-8 w-10 sm:w-12 min-w-[40px] items-center justify-center overflow-hidden bg-[#303030] px-2 sm:px-4 text-xs sm:text-sm font-medium text-[#c4c4c4] rounded-lg transition-all duration-300"
                  style={{
                    textShadow: '0 2px 0 rgba(0,0,0,0.5)',
                  }}
                >
                  +1
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* Place Bet Button */}
        <div className="relative h-11 w-full sm:w-[120px] xl:w-[140px] flex-shrink-0">
          <button
            onClick={handlePlaceBet}
            disabled={disabled}
            className={`w-full sm:w-[120px] xl:w-[140px] p-0.5 bg-gradient-to-b from-[#957aff] to-[#6741ff] border border-[#1d1d1d] rounded-xl transition-opacity duration-300 ${disabled ? 'cursor-default opacity-50' : 'cursor-pointer hover:opacity-90'}`}
          >
            <div className="relative h-[38px] w-full sm:w-[114px] xl:w-[134px] bg-gradient-to-b from-[#957aff] to-[#6741ff] border border-[#1d1d1d] rounded-xl p-0.5">
              <div
                className={`relative flex h-8 w-full sm:w-28 xl:w-32 min-w-[40px] items-center justify-center overflow-hidden whitespace-nowrap bg-[#6741ff] px-2 sm:px-4 text-xs sm:text-sm font-semibold text-white rounded-[10px] transition-all duration-300 ${disabled ? 'opacity-50' : ''}`}
                style={{
                  textShadow: '0 2px 0 rgba(0,0,0,0.5)',
                }}
              >
                <span className="mr-1">Place</span>
                Bet
                <div className="absolute left-0 top-0 z-10 h-8 w-full sm:w-28 xl:w-32 bg-[radial-gradient(68.53%_169.15%_at_50%_-27.56%,rgb(215,135,255)_0%,rgb(103,65,255)_100%)] opacity-0 mix-blend-screen transition-opacity duration-500 hover:opacity-100" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
