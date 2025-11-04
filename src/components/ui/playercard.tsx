import React from 'react'
import { DecorativeIcon } from '../icons'
export interface PlayerCardProps {
  username: string
  avatar: string
  amount: string
  percentage?: string
  tokenIcon?: string
  color?: 'purple' | 'blue'
  isActive?: boolean
  transform?: string
  style?: React.CSSProperties
}
export const PlayerCard: React.FC<PlayerCardProps> = ({
  username,
  avatar,
  amount,
  percentage,
  tokenIcon = 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
  color = 'blue',
  isActive = false,
  transform,
  style,
}) => {
  const colorScheme = {
    purple: {
      bg: 'rgb(38, 33, 68)',
      accent: 'rgb(103, 65, 255)',
      iconColor: 'rgb(98, 60, 255)',
    },
    blue: {
      bg: 'rgb(35, 46, 66)',
      accent: 'rgb(34, 144, 191)',
      iconColor: 'rgb(81, 151, 233)',
    },
  }
  const colors = colorScheme[color]
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        marginLeft: '377.141px',
        marginRight: '377.156px',
        marginTop: '-4px',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        width: '125.703px',
        transform: transform,
        zoom: 1,
        color: colors.accent,
        ...style,
      }}
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            aspectRatio: '1 / 1',
            width: '125.703px',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.15), rgba(42, 46, 55, 0))',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            borderRadius: '12px',
            padding: '2px',
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 3,
              display: 'block',
              height: '125.703px',
              width: '125.703px',
              backgroundColor: 'rgb(20, 20, 20)',
              transitionDuration: '0.5s',
              opacity: isActive ? 0 : 0.5,
              borderRadius: '12px',
            }}
          />
          {/* Card Content */}
          <div
            style={{
              display: 'flex',
              height: '121.703px',
              flexDirection: 'column',
              boxShadow:
                'rgba(0, 0, 0, 0.12) 0px 0.9px 3.6px 0.9px, rgba(0, 0, 0, 0.25) 0px 2.7px 2.92px -1.35px, rgba(0, 0, 0, 0.05) 0px 0px 0.22px 0.67px, rgba(0, 0, 0, 0.07) 0px 0px 0.22px 0.22px, rgb(29, 29, 29) 0px 0px 0px 1px',
              transitionProperty: 'background-color',
              transitionDuration: '0.3s',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              backgroundColor: colors.bg,
              borderRadius: '10px',
            }}
          >
            {/* Inner Content */}
            <div
              style={{
                position: 'relative',
                height: '121.703px',
                width: '121.703px',
                flexGrow: 1,
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.15), rgba(42, 46, 55, 0))',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                borderRadius: '10px',
                padding: '2px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  height: '117.703px',
                  width: '117.703px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transitionProperty: 'background-color, color',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  backgroundColor: colors.bg,
                  color: colors.accent,
                  borderRadius: '8px',
                  padding: '8px',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    position: 'relative',
                    marginTop: '8px',
                    height: '40px',
                    width: '44px',
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '1 / 1',
                      height: '44px',
                      width: '44px',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      backgroundColor: 'rgb(48, 48, 69)',
                      opacity: isActive ? 0.75 : 0.4,
                      boxShadow:
                        'rgba(255, 255, 255, 0.1) 0px 1.48px 0px 0px inset',
                      borderRadius: '14px',
                      padding: '1px',
                      margin: '-4px 0px 0px 0px',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        height: '42px',
                        width: '42px',
                        overflow: 'hidden',
                        backgroundColor: colors.accent,
                        border: '1px solid rgb(34, 34, 34)',
                        borderRadius: '13px',
                        padding: '2px',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          height: '40px',
                          width: '40px',
                          backgroundImage:
                            'linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0))',
                          opacity: 0.3,
                        }}
                      />
                      <div
                        style={{
                          position: 'relative',
                          zIndex: 3,
                          height: '36px',
                          width: '36px',
                          overflow: 'hidden',
                          backgroundColor: 'rgb(89, 89, 89)',
                          boxShadow:
                            'rgba(0, 0, 0, 0.5) 0px 5.92px 6px 0px inset, rgba(255, 255, 255, 0.15) 0px 10.37px 6px 0px inset',
                          border: '1px solid rgb(34, 34, 34)',
                          borderRadius: '11px',
                        }}
                      >
                        <img
                          src={avatar}
                          alt={username}
                          style={{
                            height: '34px',
                            width: '34px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Username */}
                <div
                  style={{
                    position: 'relative',
                    marginTop: '8px',
                    fontSize: '10px',
                  }}
                >
                  {percentage && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 0.3s',
                      }}
                    >
                      <p
                        style={{
                          maxWidth: '50px',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          color: 'rgb(255, 255, 255)',
                          margin: 0,
                        }}
                      >
                        {username}
                      </p>
                      <div
                        style={{
                          height: '8px',
                          width: '1px',
                          backgroundColor: 'rgba(255, 255, 255, 0.24)',
                        }}
                      />
                      <p
                        style={{
                          color: 'rgb(196, 196, 196)',
                          margin: 0,
                        }}
                      >
                        {percentage}
                      </p>
                    </div>
                  )}
                  <p
                    style={{
                      maxWidth: '75px',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      color: 'rgb(255, 255, 255)',
                      margin: 0,
                    }}
                  >
                    {username}
                  </p>
                </div>
                {/* Amount */}
                <div
                  style={{
                    position: 'relative',
                    marginTop: '2px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={tokenIcon}
                      alt="token"
                      style={{
                        height: '18px',
                        width: '18px',
                        marginRight: '6px',
                        backgroundColor: 'rgb(0, 0, 0)',
                        borderRadius: '9999px',
                      }}
                    />
                    <p
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'rgb(255, 255, 255)',
                        margin: 0,
                      }}
                    >
                      {amount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Decorative Icon */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                marginLeft: '45.8438px',
                marginRight: '45.8594px',
                height: '3px',
                width: '30px',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: '1px',
                  width: '30px',
                  backgroundImage:
                    'linear-gradient(to right, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0))',
                  opacity: isActive ? 1 : 0,
                  mixBlendMode: 'plus-lighter',
                  transition: 'opacity 0.3s',
                }}
              />
              <DecorativeIcon
                style={{
                  color: colors.iconColor,
                  filter: isActive
                    ? `drop-shadow(${colors.iconColor} 0px 0px 10px)`
                    : 'none',
                }}
              />
            </div>
          </div>
          {/* Shadow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-25.1406px',
              zIndex: -1,
              height: '32px',
              width: '125.703px',
              backgroundColor: 'rgb(0, 0, 0)',
              opacity: 0.5,
              filter: 'blur(16px)',
              backfaceVisibility: 'hidden',
              transform: 'matrix(1, 0, 0, 0.4, 0, 5)',
              borderRadius: '100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
