import React, { useState } from 'react'
import { SolanaIcon, ExternalLinkIcon, ChevronIcon } from '../../../icons'
interface HistoryItem {
  gameId: string
  gameValue: string
  eosBlock: string
  ticket: string
  winner: string
  avatarUrl: string
}
interface JackpotVerificationProps {
  'data-id'?: string
  historyItems?: HistoryItem[]
  onVerify?: (gameId: string) => void
  onViewDetails?: (gameId: string) => void
}
export const JackpotVerification: React.FC<JackpotVerificationProps> = ({
  'data-id': dataId,
  historyItems = [],
  onVerify,
  onViewDetails,
}) => {
  const [gameIdInput, setGameIdInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const handleVerify = () => {
    if (onVerify && gameIdInput) {
      onVerify(gameIdInput)
    }
  }
  return (
    <div
      data-id={dataId}
      className="w-full bg-[#0D0D0D] text-white px-8 pt-14 pb-8"
    >
      <div className="mt-9 flex gap-9">
        {/* Left Column - Details */}
        <div className="w-[458px] flex flex-col gap-2">
          <p className="font-medium text-[14px]">Jackpot Details</p>
          <p className="text-[14px] text-[#A2A2A2] font-medium">
            Our platform ensures fairness and transparency through a provably
            fair system. Here's how it works:
          </p>
          <ol className="flex flex-col gap-2 text-[14px] text-[#A2A2A2] list-decimal ml-3.5 pl-0">
            <li>
              <b className="font-bold">Server Seed</b> - A securely generated
              random value, created at the start of each Jackpot round. The
              SHA-256 hash of this seed is immediately revealed to all players,
              ensuring transparency.
            </li>
            <li>
              <b className="font-bold">Public Hash</b> - After the game is
              locked, we use the hash of a future EOS block. This block is
              chosen at the moment of the draw, and its hash acts as a random
              value that cannot be predicted or changed by anyone.
            </li>
            <li>
              <b className="font-bold">Winner Selection</b> - After generating
              the final ticket using the server seed, client seed, and game ID
              (nonce), we assign ticket ranges to all confirmed bets. The winner
              is the player whose range includes the drawn ticket. Bets are
              sorted based on the PF version used:
              <ul className="mt-1 pl-0">
                <li>
                  - PF v1 (Game IDs <b className="font-bold">0 - 24071</b> and{' '}
                  <b className="font-bold">24344 - 25062</b>): Bets are sorted
                  by Bet Date in ascending order.
                </li>
                <li>
                  - PF v2 (Game IDs <b className="font-bold">24072 - 24343</b>):
                  Due to a developer mistake, bets were sorted by Bet Date in
                  descending order. After this issue was detected, we reverted
                  to the original sorting logic from PF v1.
                </li>
                <li>
                  - PF v3 (Game IDs <b className="font-bold">25063 - present</b>
                  ): Bets are sorted using Bet Sequence, which reflects the
                  actual order of blockchain transactions for increased
                  accuracy.
                </li>
                <br />
                This sorting logic determines ticket assignment and ensures each
                round is transparent, deterministic, and verifiable by all
                players.
              </ul>
            </li>
          </ol>
          <p className="text-[14px] text-[#A2A2A2] font-medium">
            Players can replicate any past roll by using the code provided, or
            verify it using an{' '}
            <a
              href="https://codepen.io/solpot/pen/PwwbXgB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              external tool
            </a>
            .
          </p>
        </div>
        {/* Right Column - Code Example */}
        <div className="w-[484px] bg-[#141414] rounded-xl p-6">
          <p className="text-[#00FFAD] text-[14px] break-all whitespace-pre-wrap font-mono">
            {`const crypto = require("crypto");
const serverSeed = "example_server_seed";
const publicSeed = "example_public_seed";
const gameId = "example_game_id";
const min = 0n;
const max = BigInt(game_value_lamports);
const hash = crypto.createHash('sha512').update(\`\${serverSeed}-\${publicSeed}-\${gameId}\`).digest('hex');
const ticket = seededRandomBigInt(hash, min, max);
console.log(\`Generated ticket: \${ticket}\`)
function seededRandomBigInt(hash, min, max) {
  const uintValue = BigInt("0x" + hash.slice(0, 16));
  const range = max - min + BigInt(1);
  return min + (uintValue % range);
}`}
          </p>
        </div>
      </div>
      {/* Verify Section */}
      <div className="mt-9 w-[978px] flex flex-col gap-6">
        <div>
          <div className="mb-4 flex min-h-[44px] items-center justify-between">
            <p className="text-[14px] font-medium">Verify</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <textarea
                placeholder="Enter Game ID"
                maxLength={16}
                value={gameIdInput}
                onChange={(e) => setGameIdInput(e.target.value)}
                className="w-[883px] h-[44px] min-h-[44px] bg-transparent border border-[#222] rounded-lg px-3 py-2.5 text-[14px] text-white resize-none overflow-hidden transition-colors duration-300"
              />
              <button
                onClick={handleVerify}
                className="relative p-[3px] rounded-2xl bg-gradient-to-t from-[#222] to-[#303030] transition-opacity duration-300"
              >
                <div className="relative h-[38px] w-[77px] bg-gradient-to-b from-[#957AFF] to-[#6741FF] rounded-xl p-[2px] border border-[#1D1D1D]">
                  <div className="relative flex h-8 w-full min-w-[40px] items-center justify-center bg-[#6741FF] rounded-[10px] px-4 text-[14px] font-bold text-white transition-all duration-300 shadow-[0_2px_0_rgba(0,0,0,0.5)]">
                    Verify
                  </div>
                </div>
              </button>
            </div>
            <div className="flex gap-3">
              <input
                placeholder="Server Seed"
                readOnly
                type="text"
                maxLength={16}
                className="w-[235.5px] h-[44px] bg-transparent border border-[#222] rounded-lg px-3 text-[14px] text-white transition-colors duration-300"
              />
              <input
                placeholder="Public Seed"
                readOnly
                type="text"
                maxLength={16}
                className="w-[235.5px] h-[44px] bg-transparent border border-[#222] rounded-lg px-3 text-[14px] text-white transition-colors duration-300"
              />
              <input
                placeholder="EOS Block"
                readOnly
                type="text"
                maxLength={16}
                className="w-[235.5px] h-[44px] bg-transparent border border-[#222] rounded-lg px-3 text-[14px] text-white transition-colors duration-300"
              />
              <input
                placeholder="Ticket"
                readOnly
                type="number"
                maxLength={16}
                className="w-[235.5px] h-[44px] bg-transparent border border-[#222] rounded-lg px-3 text-[14px] text-white transition-colors duration-300"
              />
            </div>
          </div>
        </div>
        {/* History Section */}
        <div>
          <div className="mb-4 flex min-h-[44px] items-center justify-between">
            <p className="text-[14px] font-medium">Jackpot History</p>
          </div>
          <div>
            {/* Table Header */}
            <div className="mb-3 flex gap-4 px-4">
              <div className="w-[124px] text-[14px] text-[#A2A2A2]">
                Game ID
              </div>
              <div className="w-[165px] text-[14px] text-[#A2A2A2]">
                Game Value
              </div>
              <div className="w-[206px] text-[14px] text-[#A2A2A2]">
                EOS Block
              </div>
              <div className="w-[165px] text-[14px] text-[#A2A2A2]">Ticket</div>
              <div className="w-[165px] text-[14px] text-[#A2A2A2] text-right">
                Winner
              </div>
              <div className="w-[41px]"></div>
            </div>
            {/* Table Rows */}
            <div className="flex flex-col gap-2">
              {historyItems.map((item, index) => (
                <div
                  key={index}
                  className="flex w-[978px] items-center gap-4 bg-[#1D1D1D] border border-[#303030] rounded-lg p-2 px-4 transition-colors duration-300"
                >
                  <div className="w-[125px] text-[14px] text-[#A2A2A2] truncate cursor-pointer">
                    #{item.gameId}
                  </div>
                  <div className="w-[166px] text-[14px] text-[#A2A2A2] truncate cursor-pointer flex items-center gap-1">
                    <SolanaIcon className="w-[18px] h-[18px]" />
                    <span>{item.gameValue}</span>
                  </div>
                  <div className="w-[208px] flex gap-1.5 text-[14px] truncate cursor-pointer">
                    <a
                      href={`https://coffe.bloks.io/block/${item.eosBlock}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A2A2A2] max-w-[90%] truncate"
                    >
                      {item.eosBlock}
                    </a>
                  </div>
                  <div className="w-[166px] text-[14px] text-[#A2A2A2] truncate">
                    {item.ticket}
                  </div>
                  <div className="w-[166px] flex justify-end gap-1.5 text-[14px] truncate">
                    <span className="font-semibold text-white">
                      {item.winner}
                    </span>
                    <div className="w-5 h-5 rounded-lg border border-[#222] overflow-hidden cursor-pointer transition-[filter] duration-300">
                      <img
                        src={item.avatarUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => onViewDetails?.(item.gameId)}
                    className="relative flex h-8 w-[41.5px] min-w-[40px] items-center justify-center bg-white/10 rounded-lg transition-all duration-300"
                  >
                    <ExternalLinkIcon className="w-4 h-4 text-white/50" />
                  </button>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-4 flex w-[978px] items-center justify-between">
              <p className="text-[14px] text-[#A2A2A2]">
                {historyItems.length} of 178632
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="relative flex h-9 w-10 min-w-[40px] items-center justify-center bg-[#303030] border border-[#3B3B3B] rounded-lg transition-all duration-300"
                >
                  <ChevronIcon className="drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
                </button>
                <div className="flex w-5 items-center justify-center text-[14px] font-semibold">
                  <p>{currentPage}</p>
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="relative flex h-9 w-10 min-w-[40px] items-center justify-center bg-[#303030] border border-[#3B3B3B] rounded-lg transition-all duration-300"
                >
                  <ChevronIcon className="rotate-180 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
