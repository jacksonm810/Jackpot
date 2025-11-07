import React, { useState } from 'react'
import { GiftIcon, TargetIcon, CoinflipIcon,SolanaIcon,ExternalLinkIcon } from '../../../icons'
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
    color: 'text-gray-400',
  },
  {
    id: 'coinflip',
    name: 'Coinflip',
    icon: <CoinflipIcon className="w-4 h-4" />,
    color: 'text-gray-400',
  },
]
export function ProvablyFair({ 'data-id': dataId }: ProvablyFairProps) {
  const [selectedGame, setSelectedGame] = useState<string>('daily-case')
  const [verificationId, setVerificationId] = useState<string>('')
  const [verificationResults, setVerificationResults] = useState({
    serverSeed: '',
    clientSeed: '',
    nonce: '',
    ticket: '',
    demoSpin: '',
  })
  const handleVerify = () => {
    // Placeholder for verification logic
    console.log('Verifying:', verificationId)
  }
  const selectedGameData = games.find((g) => g.id === selectedGame)
  return (
    <div
      data-id={dataId}
      className="w-full min-h-screen bg-[#0d0d0d] text-white font-sans"
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
                  className={`flex items-center justify-start h-10 px-4 rounded-lg transition-all duration-300 ${selectedGame === game.id ? 'bg-[#303030] text-white' : 'bg-transparent text-gray-400 hover:bg-[#1a1a1a]'}`}
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
          {/* Main Content Area */}
          <div className="flex-grow px-8 pt-14">
            {/* Explanation Section */}
            <div className="flex gap-9 mb-9">
              <div className="flex-1 flex flex-col gap-2">
                <p className="font-semibold">
                  {selectedGameData?.name} Details
                </p>
                <p className="text-sm text-gray-400 font-medium">
                  Our platform ensures fairness and transparency through a
                  provably fair system. Here's how it works:
                </p>
                <ol className="flex flex-col gap-2 text-sm text-gray-400 list-decimal ml-3.5">
                  <li>
                    <b className="font-bold text-white">Server Seed</b> - A
                    future EOS block is selected before each case opening. Once
                    the block is mined, its hash is used as the server seed,
                    ensuring results cannot be manipulated.
                  </li>
                  <li>
                    <b className="font-bold text-white">Client Seed</b> - This
                    is a unique seed provided by the client, which can be
                    customized in the account settings.
                  </li>
                  <li>
                    <b className="font-bold text-white">Nonce</b> - A counter
                    that increments with every case opened, ensuring each result
                    is unique.
                  </li>
                </ol>
                <p className="text-sm text-gray-400 font-medium">
                  Players can replicate any past roll by using the code
                  provided, or verify it using an{' '}
                  <a
                    href="https://codepen.io/solpot/pen/jEEmqyX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    external tool
                  </a>
                  .
                </p>
              </div>
              {/* Code Snippet */}
              <div className="flex-1 bg-[#141414] rounded-xl p-6">
                <pre className="text-sm text-[#00ffad] whitespace-pre-wrap break-all overflow-auto">
                  {`const crypto = require("crypto");
                    const serverSeed = "example_server_seed";
                    const clientSeed = "example_client_seed";
                    const nonce = 1;
                    const min = 0;
                    const max = (100*10000) - 1;
                    const hash = crypto.createHash('sha512')
                      .update(\`\${serverSeed}-\${clientSeed}-\${nonce}\`)
                      .digest('hex');
                    const ticket = seededRandomInteger(hash, min, max);
                    console.log(\`Generated ticket: \${ticket}\`)
                    function seededRandomInteger(hash, min, max) {
                      const uintValue = parseInt(hash.slice(0, 16), 16);
                      const range = max - min + 1;
                      return min + (uintValue % range);
                    }`}
                </pre>
              </div>
            </div>
            {/* Verify Section */}
            <div className="mb-9">
              <p className="text-sm font-semibold mb-4">Verify</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <textarea
                    placeholder="Enter Opening ID"
                    value={verificationId}
                    onChange={(e) => setVerificationId(e.target.value)}
                    className="flex-1 h-11 px-3 py-2.5 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 resize-none transition-colors duration-300 focus:border-gray-600 focus:outline-none"
                  />
                  <button
                    onClick={handleVerify}
                    className="relative px-4 py-2 rounded-2xl bg-gradient-to-t from-[#222] to-[#303030] transition-opacity duration-300 hover:opacity-90"
                  >
                    <div className="relative h-[38px] px-4 flex items-center justify-center bg-gradient-to-b from-[#957aff] to-[#6741ff] rounded-xl border border-[#1d1d1d]">
                      <span
                        className="text-sm font-bold text-white"
                        style={{
                          textShadow: '0 2px 0 rgba(0,0,0,0.5)',
                        }}
                      >
                        Verify
                      </span>
                    </div>
                  </button>
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Server Seed"
                    value={verificationResults.serverSeed}
                    readOnly
                    className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Client Seed"
                    value={verificationResults.clientSeed}
                    readOnly
                    className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Nonce"
                    value={verificationResults.nonce}
                    readOnly
                    className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Ticket"
                    value={verificationResults.ticket}
                    readOnly
                    className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Demo spin"
                    value={verificationResults.demoSpin}
                    readOnly
                    className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
            {/* Spins Table */}
            <div>
              <p className="text-sm font-semibold mb-4">
                {selectedGameData?.name} Spins
              </p>
              <div>
                <div className="flex gap-4 px-4 mb-3 text-sm text-gray-400">
                  <div className="w-[98px]">Opening ID</div>
                  <div className="w-[131px]">Date</div>
                  <div className="w-[98px]">EOS Block</div>
                  <div className="w-[196px]">Server Seed</div>
                  <div className="w-[196px]">Client Seed</div>
                  <div className="w-[65px] text-right">Nonce</div>
                  <div className="w-[65px]">Ticket</div>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Table rows would go here */}
                  <div className="text-center text-sm text-gray-500 py-8">
                    No spins to display
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
