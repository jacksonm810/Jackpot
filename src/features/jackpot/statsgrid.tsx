import React, { useEffect, useState } from 'react'
export interface StatCardData {
  label: string
  value: string | number
  icon?: string
  suffix?: string
  highlighted?: boolean
  showTimer?: boolean
}
export interface StatsGridProps {
  stats: StatCardData[]
  'data-id'?: string
}
export function StatsGrid({ stats, 'data-id': dataId }: StatsGridProps) {
  return (
    <div
      data-id={dataId}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-white"
    >
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
interface StatCardProps extends StatCardData {}
function StatCard({
  label,
  value,
  icon,
  suffix,
  highlighted,
  showTimer,
}: StatCardProps) {
  return (
    <div
      className={`relative h-[97px] w-full transition-all duration-300 rounded-xl p-1 ${highlighted ? 'bg-[#0d0d0d]' : 'bg-transparent'}`}
    >
      {highlighted && (
        <>
          <div className="absolute -top-[2px] -bottom-[2px] -left-[3px] h-[101px] w-[calc(100%+6px)] border-2 border-[#2d254b] rounded-[14px]" />
          <div className="absolute top-0 bottom-0 left-0 my-[24.25px] h-[48.5px] w-full bg-[#6741ff] opacity-0 blur-[50px]" />
        </>
      )}
      <div
        className="relative h-[89px] overflow-hidden rounded-lg p-[1px]"
        style={
          highlighted
            ? {
                backgroundImage:
                  'conic-gradient(from 181.06deg, rgb(204, 57, 255) -49.9deg, rgb(103, 65, 255) 210.06deg, rgb(204, 57, 255) 310.1deg, rgb(103, 65, 255) 570.06deg)',
              }
            : undefined
        }
      >
        <div className="relative z-[3] flex h-[87px] w-full flex-col items-center justify-center overflow-hidden bg-[#1d1d1d] rounded-[7px]">
          {highlighted && (
            <>
              <div
                className="absolute h-full w-full"
                style={{
                  backgroundImage:
                    'linear-gradient(to left, rgba(103, 65, 255, 0.15), rgba(103, 65, 255, 0))',
                }}
              />
              <img
                src="/assets/dot-pattern-stat.webp"
                alt=""
                className="absolute left-0 top-0 h-full w-full opacity-20 mix-blend-overlay"
              />
            </>
          )}
          <div className="flex items-center gap-1.5 relative z-10">
            {icon && <img src={icon} alt="" className="h-6 w-6" />}
            <div className="text-xl font-bold">
              {showTimer ? (
                <Timer initialTime={value as string} />
              ) : (
                <span>{value}</span>
              )}
              {suffix && suffix}
            </div>
          </div>
          <p className="text-sm font-medium text-[#a2a2a2] relative z-10">
            {label}
          </p>
        </div>
        <div className="absolute right-[1px] top-[1px] h-[87px] w-[calc(100%-2px)] bg-[#303030] rounded-[7px]" />
      </div>
    </div>
  )
}
function Timer({ initialTime }: { initialTime: string }) {
  const [time, setTime] = useState(initialTime)
  const digits = time.split('')
  useEffect(() => {
    const interval = setInterval(() => {
      const [hours, minutes, seconds] = time.split(':').map(Number)
      let totalSeconds = hours * 3600 + minutes * 60 + seconds
      if (totalSeconds > 0) {
        totalSeconds--
        const h = Math.floor(totalSeconds / 3600)
        const m = Math.floor((totalSeconds % 3600) / 60)
        const s = totalSeconds % 60
        setTime(
          `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`,
        )
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [time])
  return (
    <div className="flex overflow-hidden tabular-nums">
      {digits.map((digit, index) => (
        <TimerDigit key={index} digit={digit} />
      ))}
    </div>
  )
}
function TimerDigit({ digit }: { digit: string }) {
  const isColon = digit === ':'
  return (
    <div
      className={`relative inline-flex w-[13px] items-center justify-center animate-timer-digit ${isColon ? '-top-[2px]' : ''}`}
    >
      <span className="absolute -top-7 text-white">{digit}</span>
      <span className="text-white">{digit}</span>
    </div>
  )
}
