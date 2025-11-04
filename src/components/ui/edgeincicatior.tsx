import React from 'react'
interface EdgeIndicatorProps {
  color: string
}
export function EdgeIndicator({ color }: EdgeIndicatorProps) {
  return (
    <div
      className="absolute bottom-0 right-0 top-0 my-[14px] h-16 w-[9px]"
      style={{
        color,
      }}
    >
      <div className="absolute right-0 z-[3] h-16 w-[4.5px] bg-gradient-to-b from-transparent via-white to-transparent opacity-10 mix-blend-plus-lighter" />
      <div
        className="absolute left-[5px] top-8 h-32 w-[18px] -translate-y-16 rounded-full opacity-0 blur-[40px]"
        style={{
          backgroundColor: color,
        }}
      />
      <svg
        width="9"
        height="64"
        viewBox="0 0 9 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M4 7.52179C4 6.80462 4.384 6.14235 5.00641 5.78606L7.5032 4.35681C8.16986 3.9752 9 4.45652 9 5.22468L9 58.7753C9 59.5435 8.16986 60.0248 7.5032 59.6432L5.00641 58.2139C4.384 57.8577 4 57.1954 4 56.4782L4 7.52179Z"
            fill="currentColor"
          />
          <path
            d="M4.2 7.52179C4.2 6.87634 4.5456 6.28029 5.10577 5.95963L7.60256 4.53039C8.13589 4.22509 8.8 4.61016 8.8 5.22468L8.8 58.7753C8.8 59.3898 8.13589 59.7749 7.60256 59.4696L5.10577 58.0404C4.5456 57.7197 4.2 57.1237 4.2 56.4782L4.2 7.52179Z"
            stroke="url(#paint0_linear)"
            strokeOpacity="0.5"
            strokeWidth="0.4"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_f)">
          <path
            d="M5 10.4449C5 9.85277 5.26235 9.29111 5.71642 8.9111L6.35821 8.374C7.00915 7.82923 8 8.29206 8 9.14088L8 54.8591C8 55.7079 7.00915 56.1708 6.3582 55.626L5.71642 55.0889C5.26235 54.7089 5 54.1472 5 53.5551L5 10.4449Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0.223145"
            width="13"
            height="63.5537"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.403922 0 0 0 0 0.254902 0 0 0 0 1 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_f"
            x="3"
            y="6.13916"
            width="7"
            height="51.7217"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="9"
            y1="32"
            x2="4"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.56" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="6.5"
            y1="7"
            x2="6.5"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.5" stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
