import React from 'react'
interface DecorativeIconProps {
  className?: string
  style?: React.CSSProperties
}
export const DecorativeIcon: React.FC<DecorativeIconProps> = ({
  className,
  style,
}) => (
  <svg
    width="30"
    height="3"
    viewBox="0 0 45 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M3.47326 4.29086C2.91607 4.29086 2.40153 3.99253 2.12472 3.50896L1.01431 1.56914C0.717824 1.0512 1.09177 0.40625 1.68857 0.40625L43.2933 0.406253C43.8901 0.406253 44.2641 1.0512 43.9676 1.56915L42.8572 3.50896C42.5803 3.99253 42.0658 4.29087 41.5086 4.29087L3.47326 4.29086Z"
      fill="currentColor"
    />
  </svg>
)
