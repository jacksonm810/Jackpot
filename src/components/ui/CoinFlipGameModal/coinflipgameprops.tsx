export interface CoinflipGameProps {
  'data-id'?: string
  gameId?: string
  player1?: {
    name: string
    avatar: string
    level: number
    bet: number
    side: 'heads' | 'tails'
  }
  player2?: {
    name: string
    avatar: string
    level: number
    bet: number
    side: 'heads' | 'tails'
  }
  hashedSeed?: string
  secret?: string
  status?: 'waiting' | 'playing' | 'finished'
  onClose?: () => void
  onVerify?: () => void
  onShare?: () => void
  onJoin?: () => void
}