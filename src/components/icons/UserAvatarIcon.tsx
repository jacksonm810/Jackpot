import React from 'react'
export interface Icon1Props extends React.SVGProps<SVGSVGElement> {}
export const UserAvatarIcon: React.FC<Icon1Props> = (props) => (
  <svg
    width="161"
    height="25"
    viewBox="0 0 161 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_699_637)">
      <path
        d="M21.8097 3.3064C22.5239 1.32261 24.4057 0 26.5141 0H141.297C144.76 0 147.175 3.43529 146.002 6.6936L140.602 21.6936C139.887 23.6774 138.006 25 135.897 25H21.1141C17.6511 25 15.2367 21.5647 16.4097 18.3064L21.8097 3.3064Z"
        fill="#6741FF"
        fillOpacity="0.25"
      />
      <path
        d="M26.5141 0.5H141.297C144.414 0.5 146.587 3.59176 145.531 6.52424L140.131 21.5242C139.488 23.3097 137.795 24.5 135.897 24.5H21.1141C17.9974 24.5 15.8244 21.4082 16.8801 18.4758L22.2801 3.47576C22.9229 1.69035 24.6165 0.5 26.5141 0.5Z"
        stroke="#6741FF"
      />
    </g>
    <path
      d="M16.1365 8.1382C16.1788 8.0535 16.2654 8 16.3601 8H24.8011C24.9869 8 25.1078 8.19558 25.0247 8.3618L24.2747 9.8618C24.2323 9.9465 24.1458 10 24.0511 10H15.6101C15.4242 10 15.3034 9.80442 15.3865 9.6382L16.1365 8.1382Z"
      fill="#6741FF"
    />
    <path
      d="M137.3 18.124C137.345 18.0472 137.427 18 137.516 18H149.77C149.963 18 150.083 18.2093 149.986 18.376L149.111 19.876C149.066 19.9528 148.984 20 148.895 20H136.641C136.448 20 136.328 19.7907 136.425 19.624L137.3 18.124Z"
      fill="#6741FF"
    />
    <defs>
      <filter
        id="filter0_b_699_637"
        x="10.1099"
        y="-6"
        width="142.191"
        height="37"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_699_637"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_699_637"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
