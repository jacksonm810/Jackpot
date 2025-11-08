import React, { useState } from 'react'
import { ExternalLinkIcon } from '@/shared/icons'

interface DailyCaseDetailsProps {
  'data-id'?: string
}

export const DailyCaseDetails: React.FC<DailyCaseDetailsProps> = ({ 'data-id': dataId }) => {
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

  return (
    <div data-id={dataId} className="flex-grow px-8 pt-14">
      {/* Explanation Section */}
      <div className="flex gap-9 mb-9">
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-semibold">Daily Case Details</p>
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
              id="daily-case-verification-id"
              placeholder="Enter Opening ID"
              value={verificationId}
              onChange={(e) => setVerificationId(e.target.value)}
              className="flex-1 h-11 px-3 py-2.5 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 resize-none transition-colors duration-300 focus:border-gray-600 focus:outline-none"
            />
            <button
              onClick={handleVerify}
              className="h-11 px-6 bg-[#6741FF] text-white text-sm font-semibold rounded-lg transition-opacity duration-300 hover:opacity-90 flex items-center justify-center"
            >
              Verify
            </button>
          </div>
          <div className="flex gap-3">
            <input
              id="daily-case-server-seed"
              type="text"
              placeholder="Server Seed"
              value={verificationResults.serverSeed}
              readOnly
              className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
            />
            <input
              id="daily-case-client-seed"
              type="text"
              placeholder="Client Seed"
              value={verificationResults.clientSeed}
              readOnly
              className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
            />
            <input
              id="daily-case-nonce"
              type="text"
              placeholder="Nonce"
              value={verificationResults.nonce}
              readOnly
              className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
            />
            <input
              id="daily-case-ticket"
              type="text"
              placeholder="Ticket"
              value={verificationResults.ticket}
              readOnly
              className="w-[186px] h-11 px-3 bg-transparent border border-[#222] rounded-lg text-sm text-white placeholder-gray-500 transition-colors duration-300"
            />
            <input
              id="daily-case-demo-spin"
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
        <p className="text-sm font-semibold mb-4">Daily Case Spins</p>
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
  )
}


