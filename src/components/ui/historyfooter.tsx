import React from 'react'
import { CopyIcon } from '../icons'
interface HistoryFooterProps {
  hashedSeed?: string
  serverSeed?: string
  eosBlock?: string
  eosHash?: string
}
export function HistoryFooter({
  hashedSeed,
  serverSeed,
  eosBlock,
  eosHash,
}: HistoryFooterProps) {
  return (
    <div className="mt-4 flex items-start justify-between gap-4 text-xs leading-4 text-[#a2a2a2]">
      <div className="flex w-[300px] max-w-[300px] flex-col gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
        {hashedSeed && (
          <div className="flex cursor-pointer items-center gap-2 whitespace-nowrap opacity-50 transition-opacity hover:opacity-100">
            <CopyIcon className="flex-shrink-0" />
            <div className="flex gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
              <span>Hashed Seed:</span>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                {hashedSeed}
              </p>
            </div>
          </div>
        )}
        {serverSeed && (
          <div className="flex cursor-pointer items-center gap-2 whitespace-nowrap opacity-50 transition-opacity hover:opacity-100">
            <CopyIcon />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              <span>Server Seed:</span> {serverSeed}
            </p>
          </div>
        )}
      </div>
      <div className="flex w-[300px] max-w-[300px] flex-col items-end gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
        {eosBlock && (
          <div className="flex w-[300px] cursor-pointer items-center justify-end gap-2 overflow-hidden text-ellipsis whitespace-nowrap opacity-50 transition-opacity hover:opacity-100">
            <CopyIcon className="flex-shrink-0" />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              <span>EOS Block:</span> {eosBlock}
            </p>
          </div>
        )}
        {eosHash && (
          <div className="flex w-[300px] cursor-pointer items-center justify-end gap-2 overflow-hidden text-ellipsis whitespace-nowrap opacity-50 transition-opacity hover:opacity-100">
            <CopyIcon />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              <span>EOS Hash:</span> {eosHash}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
