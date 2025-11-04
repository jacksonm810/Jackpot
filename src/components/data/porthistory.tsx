import React from 'react'
import { UserCard } from '../ui/usercard'
import { HistoryHeader } from '../ui/historyheader'
import { HistoryFooter } from '../ui/historyfooter'
export interface PlayerEntry {
  id: string
  username: string
  level: number
  avatarUrl: string
  avatarColor: string
  itemImage: string
  rarityImage: string
  rarityColor: string
  amount: number
  usdAmount: number
  chance: number
  isWinner?: boolean
}
export interface PotHistoryProps {
  playerCount: number
  roundNumber: number
  players: PlayerEntry[]
  hashedSeed?: string
  serverSeed?: string
  eosBlock?: string
  eosHash?: string
  showSolanaInfo?: boolean
  'data-id'?: string
}
export function PotHistory({
  playerCount,
  roundNumber,
  players,
  hashedSeed,
  serverSeed,
  eosBlock,
  eosHash,
  showSolanaInfo = true,
  'data-id': dataId,
}: PotHistoryProps) {
  return (
    <div
      data-id={dataId}
      className="min-h-[600px] w-full max-w-[880px] border-t border-[rgba(34,34,45,0.5)] bg-[#0d0d0d] text-white font-['Flama',sans-serif]"
    >
      <HistoryHeader
        playerCount={playerCount}
        roundNumber={roundNumber}
        showSolanaInfo={showSolanaInfo}
      />
      <div className="min-h-[92px]">
        {players.map((player) => (
          <UserCard key={player.id} player={player} />
        ))}
      </div>
      {(hashedSeed || serverSeed || eosBlock || eosHash) && (
        <HistoryFooter
          hashedSeed={hashedSeed}
          serverSeed={serverSeed}
          eosBlock={eosBlock}
          eosHash={eosHash}
        />
      )}
    </div>
  )
}
