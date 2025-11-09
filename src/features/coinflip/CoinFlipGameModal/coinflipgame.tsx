import React from 'react'
import { Icon1, Icon2, SolanaIcon, Icon8, Icon9 } from './Icons'
import { CoinflipGameProps } from './coinflipgameprops'

export const CoinflipGame: React.FC<CoinflipGameProps> = ({
  'data-id': dataId,
  gameId = '#4203629',
  player1 = {
    name: 'Austinlynn',
    avatar:
      'https://solpot.com/cdn/avatars/a21fc23ff9fb0b5998657e7caba13dc48c3774a2ca33c4b696ad5bffe41887a3.png',
    level: 43,
    bet: 0.004,
    side: 'heads',
  },
  player2,
  hashedSeed = 'eb49e1c0170591159112025d38f5647f46042bb5468a3e89ee4cd563853042a8',
  secret = 'Waiting...',
  status = 'waiting',
  onClose,
  onVerify,
  onShare,
  onJoin,
}) => {
  return (
    <div
      data-id={dataId}
      className="relative w-full h-full bg-gradient-to-b from-[#221e3a] to-[#232325] rounded-2xl p-0.5"
    >
      <div className="relative w-full h-full bg-[#141414] rounded-[14px] overflow-hidden">
        {/* Header */}
        <div className="flex h-[72px] items-center justify-between px-6 border-b border-[#222222] bg-[url('data:image/webp;base64,UklGRlYBAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSOYAAAABgGrbdtzmQkFBQUFDsZjZLGE2i1nCVPbgg+ffMz93QAURocBtGyXdMeMj9Beobta3lvdisKHyoFMKk4rSBseEmQM9arO7GTApSaoGlxjFsjboRcoP/S7QYrvbpcqS0snBqpQ8GCRfh9rHbDzoZidIIcsAl5VHTGpQQjRoks8sHaCpQg2xQS5fiDY/BHmMeoarwZWz8SRXCDBV67zUEsNBKvUllhVNZEnH3ZzmKT3dJzPAp7zDm/DpYcJNpZY0j2FGYC2S8rhdjCkePl1BcwA/SDvY+dWAWfuoHq9mfW1JP0//lv43AVZQOCBKAAAAcAMAnQEqMAAwAD4lDoVCIYarVQAGAJEtIAAMmJMjRbxhCcNgAP7+7rs/a6OXrCc6pWghD+gEf///Q5b7//obqixsyEi6rSwAAAA=')]">
          <div className="flex items-center gap-2">
            <Icon1 className="w-[30px] h-[30px] text-[#6741ff]" />
            <h1 className="text-xl font-extrabold uppercase m-0">Coinflip</h1>
            <p className="text-xl font-semibold text-[#8a8aa3] m-0">{gameId}</p>
          </div>
          <button
            onClick={onClose}
            className="flex w-9 h-9 items-center justify-center rounded-full text-[#595959] hover:text-white transition-colors cursor-pointer"
          >
            <Icon2 />
          </button>
        </div>
        {/* Game Area */}
        <div
          className="relative flex h-[564px] items-center justify-center py-12 gap-[50px] bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              'url("https://solpot.com/static/image/bg.3338e82d.webp")',
            backgroundPosition: '50% 72px',
            backgroundBlendMode: 'difference',
          }}
        >
          {/* Player 1 */}
          <div className="z-10 flex w-[165px] flex-col items-center gap-5">
            <div className="relative">
              <div className="relative z-10">
                <div className="absolute inset-0 z-[3] w-[120px] h-[120px] rounded-full shadow-[inset_0_5.92px_6px_0_rgba(0,0,0,0.5),inset_0_10.37px_6px_0_rgba(255,255,255,0.15)]" />
                <img
                  src={
                    player1.side === 'heads'
                      ? '	https://solpot.com/static/image/tails.03d97597.png '
                      : '	https://solpot.com/static/image/heads.4b0cf586.png'
                  }
                  alt="coin"
                  className="absolute -right-1 -top-1 z-[4] w-9 h-9 rounded-full shadow-[0_0_0_3px_#141414]"
                />
                <div className="w-[120px] h-[120px] rounded-[28px] p-1 bg-gradient-to-b from-[#22222c] to-transparent">
                  <div className="relative h-[112px] rounded-[24px] p-1 bg-gradient-to-b from-[#38383d] to-[#252527]">
                    <div className="h-[104px] overflow-hidden rounded-[22px] border-2 border-[#222222] shadow-[inset_0_7.5px_15px_0_rgba(0,0,0,0.5),inset_0_10px_20px_0_rgba(255,255,255,0.082)]">
                      <img
                        src={player1.avatar}
                        alt={player1.name}
                        className="w-[100px] h-[100px] object-cover rounded-[22px] bg-black/75"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="data:image/webp;base64,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"
                alt="shadow"
                className="absolute top-0 -bottom-3 left-0 right-0 w-[120px] h-[156px] aspect-[1/1.3]"
              />
            </div>
            <div className="flex w-[165px] flex-col items-center gap-[15px] overflow-hidden">
              <div className="relative w-[165px] text-center">
                <div className="flex w-[165px] cursor-pointer items-center justify-center text-white">
                  <div className="mr-2 overflow-hidden bg-[#7c2a77] text-[#e45eff] rounded-md p-px">
                    <div className="flex h-[18px] w-[27px] items-center justify-center overflow-hidden bg-[rgba(34,34,45,0.8)] text-xs font-semibold rounded-[5px]">
                      {player1.level}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <h4 className="max-w-[100px] truncate text-sm font-bold m-0">
                      {player1.name}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="h-10 bg-gradient-to-b from-[#2b2a33] to-transparent shadow-[0_0.9px_3.6px_0.9px_rgba(0,0,0,0.12),0_2.7px_2.92px_-1.35px_rgba(0,0,0,0.25),0_0_0.22px_0.67px_rgba(0,0,0,0.05),0_0_0.22px_0.22px_rgba(0,0,0,0.07),0_0_0_1px_#1d1d1d] border border-[#1d1d1d] rounded-lg p-px">
                  <div className="flex h-9 items-center gap-1.5 bg-[#13121c] px-3 rounded-md">
                    <SolanaIcon className="w-5 h-5" />
                    <p className="text-sm font-bold m-0">{player1.bet}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Center Area */}
          <div className="relative z-20 w-[220px] aspect-[238/220] mb-20">
            <div className="relative">
              <img
                src="/img/coinflip/center.webp"
                alt="center"
                className="relative z-[2] w-[220px] h-[220.406px] object-contain"
              />
            </div>
            <div className="absolute top-[25px] -bottom-[140px] left-0 right-0 flex h-[115px] justify-center">
              <div className="relative flex h-[52px] items-center justify-center mt-0">
                <button
                  disabled={status !== 'waiting'}
                  onClick={onJoin}
                  className="relative cursor-pointer opacity-50"
                >
                  <div className="relative h-[46px] w-[101px] bg-gradient-to-b from-[#957aff] to-[#6741ff] border border-[#1d1d1d] rounded-xl p-0.5">
                    <div className="relative flex h-10 w-[95px] min-w-10 items-center justify-center overflow-hidden bg-[#6741ff] px-4 text-sm font-bold text-white opacity-50 transition-all shadow-[0_2px_0_rgba(0,0,0,0.5)] rounded-lg">
                      Join
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* Player 2 / Waiting */}
          <div className="z-10 flex w-[165px] flex-col items-center gap-5">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://solpot.com/static/image/heads.4b0cf586.png"
                  alt="coin"
                  className="absolute -right-1 -top-1 z-[4] w-9 h-9 rounded-full shadow-[0_0_0_3px_#141414]"
                />
                <div className="w-[120px] h-[120px] rounded-[28px] p-1 bg-gradient-to-b from-[#22222c] to-transparent">
                  <div className="relative h-[112px] rounded-[24px] p-1 bg-gradient-to-b from-[#38383d] to-[#252527]">
                    <div className="h-[104px] overflow-hidden rounded-[22px] border-2 border-[#222222] shadow-[inset_0_7.5px_15px_0_rgba(0,0,0,0.5),inset_0_10px_20px_0_rgba(255,255,255,0.082)]">
                      <img
                        src={player2?.avatar || 'https://solpot.com/img/unknown.webp'}
                        alt={player2?.name || 'Waiting'}
                        className="w-[100px] h-[100px] object-cover rounded-[22px] bg-black/75 opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="data:image/webp;base64,UklGRmIPAABXRUJQVlA4WAoAAAAQAAAAbQAAiwAAQUxQSD4LAAABGTFpwn77V7ZCRP8DdTgCgaT9xUeIiNTAsG3bSLbTZ/+JXye3wSFiAhS5bdsgOXXSeYYlN5IESZJMPf//4y1TwE3UPGZ2j3uICIm2bVtpYxV5XMjcG8Skn4DwA1sEtLyXFlrcsRjhaSyVg6QCLGlFwwu8GMKdnBVJ5DjLAR4oKcJRQb/rgaLBCkVgkSWpkSL3dTleQpTQXkawlS9KBinR9U3pzLYQz5js5SWBKI0lCZ+1MqCpip4qRAihgjWNtaoL0hwxS3iEWyIGBjBz8VKVLgz7VSHGCsHKDi2FPj2krtbMSOiaJohP6ekNnpJkq2SkQBYQMzCFFxTCEKQl0szzbwyh6abbZkznyhk+OT5eHBE6foCVxT/VDYHb1zZC6TdHqj4X1AJaBYfHw4LXJh0NLopAGRSDmiBLN0q3m9GFQcPxDbZ0MsnqRIYFj3RI88hTbIN9QEYl9DJGGmbVHMi/q9D0nWMRyeK0vp7dq2SyhTSKp3GCzISz93Vnu851aAFGtn/wz/p+V3zNsax5TQEl/ENyEaXPQax9v38QXP5guXNxX9EMkcUSTxBj10dsuyjTaNIKmgJKSMpY23DvAiDcIpnIdJ4yEe9zYq0S18kOTFrEdQAszdwscHLu9Dek1phADCMScOjjcKrMgUQjGVAQph1ArLAaE4LPjCyYwh0Akilf5lDT5ytxAaXYcato80A+GOmzfUzCiMT/zpX/3RanZ2b+qisPVDNkWYkWvF0ECIy2SFt0tWFyPctZUlAuu7aF2VNXNkICl2SHFYeGmxfIGp0uEAJCgEW47R6BdWZHylXCTZnb8AMiWuC/30EEo96uZYD5rLypaB7o8s4sw1DPak7JClpVx2EJlFrU8o7pecwtsw40akCmJHgJC7NJCpmyCUR3OGvJb3qnqlmN2zPizIGgnRn7ObYkpI6zFdHkfOA5otUGJ92Cynei2Xxq3mmlGIfDtIZPeoe6gr8IkGiKGSYPByrMGXn5NrjPnwZogQoL0xkZWkQgzMeBDCw0tK2cEJm3a109C8x2usQw+jvjDG5FDIO1eFiTKxqp1MCwJ++u2O3cmXJ0M0Lk8M9TCppYTsmCYzRRO1CuAJ9P6s/zrsINc+CumDtTHeiv+/D7B4BAodO8cBBZjf14d25gjg7K4JkQGgnBa+6b4qX5wDt43qU/M7rukhTNbHeFD3ejUoiWp9+XyKsIcvAD+GZumAH2BG5laVs46zXUaxWheGGs8FpRjuMeJvlIv758MIAEICDjZjhGTwqroIWsjLQpyZglc0j5zD3sNKyIplwq3KkzdaAmzOt+P9Ml7mraZpTf4jlIF9DMosbv/YjzODtgIhebDE4qFlYiqRkK3xGav6SDZzALgMBX5mm9IkegFRO7WovE+x3Tgzoz1fsynqXDKKWIxP3WMtZR0MIkrglc9Ovui7Pknw6E6M5ZIp2TKHKFiIEAmGkgvZnJW0wI51Yvq2dcow45gDu4z2AWSzxyRWxbCsi5EOLUtP4DuIznuagZN4GuMKHiCTjN4i6DmYDjkVIAJhjQrIU3Lra/cfWxdCpqCeDSCg2VcUETHPYBh10AKUIiAkN7KMJXneM08DY68itqIUGPUuhyixElcFoxLrrJI4ETzcQV3uJZmZkQNcKv14MW/JqDM6WFkAJWkTOP+/oBRXjrS4vuoDodK3I/NeMHBxE+XPRLtiAuaHxt4m8i1KA5ldHKJO/DaoAfJytTUSIqjAwJSOiefJkcXJLzgrWrkQMmtFA3+mkpwsd+WyxVaCJzBQa2RVpIQsrBw3ia8Wf8CK+Ln/txb/LQVWZTEqCw6BohkJE+HLxNqidL0+Khcg3spW+jmfsf/IH1MKCiCfBzSHoohuJ44/E6XaDgeAnCVtZti+vZQPTmw1AzJJtorb1PFWaUALz0sKykV7blSHMP0SyZRfQcj9FkzGUEK6fRGtLlSrC2zITpYUpjfHl73mZG8WvyYlZrom+hy1FWSJb+aq0gMgeSQSzV4e3MZSPJ3DTx0xKsjJN4irZwS2wCifGNk1JNLgilQ4qx+TJlX6D2MrbT/77Y06wPu+VNb6Ik61gwXA22I7pqmShjxJtymwUM/fL7BebSgxL7YxD5jsUc8p7Zb3RO5zIzGEUK0pBY6/UfYAugkKhj9AG4beYAUY87xNLkxwr5fL2RLxBkJJnsR3zhvTW+AhB05iUhAakhQYlyasHLxuuh1okScFQ6rTTCME046/3UJblL3wtvZSgsvxYNrY50Po4lGcw0klAUPA/F68CJEMxrXDhUJyFzC2MBPcj9Rk1FrrCWINHcCgjG4lgs+HHbf732HXwt2x/fo4D0+BFqidAaXPTwvC8zi8EFz+LnnN37Pk0NhReI/Qa0ZyAra0B85AmKK7KjyvwBB/ZcFv849sEzNmns5N88jBN5SGMEi+MotuhYT2n0Be8J5F3gzcs+9ahniEhD9vtckYcUEy6Ja34fnG7OwVK4i8laiY5YGgwDDIsdjZG2BbSdXzKzJ5sGzS0TsnFxCjlYxwj95cJ2BFsk0C2I90cki5aKu522w96nvJbzCGdtmT4Ekpd0odsZPsbrYrBHGblOD0wxfgRYkbljU6KgQI4hLQ+gBr/DfcQG1felljxJ0EuI+dHnvqFZKmAU5GBg0IIRys3Pr55AdDW+elnD3EtSnZHWE7NLrNUhB4WZH0jVwedsaMYLsM2Gci6LQb7+PxF6qQUFZQ6lqSYObmEnIvku9VHxngVVL7cWsa4ETLbH2UE37CdEn1rhHwTHA21j11HLF7cL34gvA0TbZuR9ZN4Jg2yeHem6RZ5VG1AjdDiEJba3kYjgHLG1Hjal45NEhXE4zXTYz6LWOCB7z0GjlU2Q9OFXFjx8cgt+qWTksx1vkmmzvk4pYqsi/Yg1pA+iOdLBsyqeLe5cPlcbPk8RAh5ocSnjW0saVLDwACdssl+FhWXa7kJfg3mxbslmfSNYhIPdq2Sr+asB9smuU3gab9eGsexHQ3OKCUHuNQkheywrTYlNwjwVdvM3FNVl3OXTayM1Y798rbxae7Dkt1LxOUcJ+Jy3lv76ZJL38b79+8dCQTGTw1zFX2RzpbDTeCZ4egYGLxh5roIxdhGWQhHh7Pm37ebqVEkNV4E4Fm9NJeIrZieNmFEQqY5nyscMzE4IgOeYiHDkker9GbhZvqgIRuBafh8C0jUrznA7cs3P/DtgzgNiZfwLjrFTlDE8OGFUYuJin6OGzfV3CTayA+dqnal+K07GEhh+CmK9+QISEGZQ7b/JNr8UkClsBW+eisCGBIksRPAjD/d9n2B5mteJXHJX9EdGab3WEss0JBQbITBJW6h3Q9a86kA0azzSsfv8/coL06NML8BJiBLpiCMh0EIg7JCghe8ufLZjE+OMdgjy1zsGkLUgFs8Cr7UcxdfB5IqZq+lTGSIbi++DrCngGSmCs59wbHtpLeEo0DMwa4hGRnCqJxdD8UnCEjhIsR+XVJEZijTFVw9Mf/ACePoMIVMJMET5snGXyIsIxTyU4mohEb/FzSUiNYQQVuVQh8KhHEGAADRi0RLM0KlOFBF/f4RfXdLosRFpVrmzgmREBRFpBZlFYf1QFEQXpgd/qY7pT5ML0bbbtCiOVD5DGJfii2Q/Zz7eDD+DeDPJIOOtj1pLAgRrjkWUiuRfvz+tVfM4UqFcTZp4M3ugx3AZmTrbhRcWFgHGXnRAgikvmdU13wf6JcXVFackOzQEgRiZlvJYgkjxImQJYfSyZF1XHV1YvmarmWnMqHK8pxd4jN0S56kNxPMwwWAqXPHxTgnml1PQAiQcdwr/YxMjyOlnH8vxgYgGnNv2FeWd8b/0z/X/zv8AVlA4IP4DAACwFQCdASpuAIwAPpFGnEqlpCKiJrYpwLASCWkNsAWwleq+oeEgrwZM2IHFv5936eqbeQcZZ86/xfqK/0r9UvYwzbfU3sBfy7+m/rp2Vf279h/9NSexFd/ujQHIeowShVLCpXUsAvjAzjXnLsukh2IY4FmbDD672TMN2hcy3CYtvOB6o7QN1hvuX5TJ6/sYvsmWK3EwMiNzTOrpfhl5tMPusZqwBV/Eu5YrJWqmrTrQz67byZJRAAD++5zAG9VbV3fMIFvw07Pdq0Rh13tNj/atpQ+aIs3bcRLA1A6/9kFc8vB/+kFeXRHy0NPn4bzPV2k+LcXcssHiCQ+ISzmDaM6Yb4FTB7C84L9yPfaqYwFZC6j+yzSRn9dGHfOit/zBmYnvbSeVG4bUO/BkgmFxdIzOf6fT3YpbE+YNluko4puJBWtbyLaShJPdV2M42CNqadFMqsSkZYxvN9YIrj5QMsj5DeISNntO9UokFTRQbVWbKe69HW+yKVRQ+upOAdkOsPpahCXSNcm5E165dJ6mj8TGs+CCQpnKhbLXaHqJuuBuKut0VjBvHUJQQdNeX5zH60DYYePbzM1zSQr0UYnzKMmNR1RkIE3dX3pYt88AjzrbME1TbfS/qSYrlNcGI1PJAN7bMm4U86kSQzWmV6Px0wlzdzfINVEufOHxOcNsGRAXUDKNaNVsAuglYurh83YEDSrq7rEB8rM3fjofuvWv6ZU8LLuI2wD++QBNdji0MkhboC/BpZo4PnDR6OooZGSkgZWm0DSzb6AgLQtShw3CbHgYpVlOX0OvCw40vayPU51P/xpDLpBiV+VANosnmkLSyjL8jMwlnlv2sf5/ru7rhmf1zm6nfGTBGodWbbfSK4QuxN6XXtI9RNeKo+YgHz1V2zw+6hByE+nwVb0XbhGB/Dab56eNHyvc7/tJ71vJUFUIn6uu2ssfFt5b+RtFYaq1PfQuMEruIY4WG64XY6p7Ek7806+tfTGYUdninG0k1HsLe1aDOJ7YAdUD5Fk2zelePdnhnGWpPSuiYAVTYG9N7WnIy1gqAAQXmy7TzoTxlm86i4VyepOxMS+2BtustJatcPEm+E43RsQikYv36lGmsQIlUFS6p5RY0+1mo+CahRAR7XYYtUHFB0gnvWARVGUX0cYFkqFIVYfcR609wZJ2oSXrPikfvzlqqWbnIp+h6tIlxjWB9K87cl1lf5Yp2AUo1S8hmAXn4PPb6SZZ/xWFBmWMPC5XHWLfdR0XBH9GxnfO4eR/P/QrGvnLcpM8Wb0RqEXRVbeHe4sVqhThUOIaWaY7M7pB2gq0hbrbTL16Ws6K4A8HeAvS4ZzQThAz7LHXmoGNvGbzECfaz12AAAAAAA=="
                alt="shadow"
                className="absolute top-0 -bottom-3 left-0 right-0 w-[120px] h-[156px] aspect-[1/1.3]"
              />
            </div>
            <div className="flex w-[165px] flex-col items-center gap-[15px] overflow-hidden">
              <div className="relative w-[165px] text-center">
                <div className="text-sm font-semibold text-[#a2a2a2] truncate overflow-hidden whitespace-nowrap">
                  {player2 ? player2.name : 'Waiting...'}
                </div>
              </div>
              <div className="relative">
                <div className="h-10 bg-gradient-to-b from-[#2b2a33] to-transparent shadow-[0_0.9px_3.6px_0.9px_rgba(0,0,0,0.12),0_2.7px_2.92px_-1.35px_rgba(0,0,0,0.25),0_0_0.22px_0.67px_rgba(0,0,0,0.05),0_0_0.22px_0.22px_rgba(0,0,0,0.07),0_0_0_1px_#1d1d1d] border border-[#1d1d1d] rounded-lg p-px">
                  <div className="flex h-9 items-center gap-1.5 bg-[#13121c] px-3 rounded-md">
                    <SolanaIcon className="w-5 h-5" />
                    <p className="text-sm font-bold m-0">{player2?.bet || 0}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between gap-6 border-t border-[#222222] p-4 pl-8">
          <div className="flex w-full flex-col gap-1 overflow-hidden text-xs text-[#595959]">
            <div className="flex gap-1 opacity-50">
              <div className="flex-shrink-0 font-bold uppercase tracking-wider">
                Hashed Seed:
              </div>
              <div className="truncate font-medium">{hashedSeed}</div>
            </div>
            <div className="flex gap-1">
              <div className="flex-shrink-0 font-bold uppercase tracking-wider">
                Secret:
              </div>
              <div className="truncate font-medium">{secret}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onVerify}
              className="cursor-pointer h-[42px] w-[42px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-0.5 hover:opacity-80 transition-opacity"
            >
              <div className="relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden bg-[#303030] rounded-lg">
                <Icon8 className="w-5 h-5 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
              </div>
            </button>
            <button
              onClick={onShare}
              className="cursor-pointer h-[42px] bg-gradient-to-b from-[#454545] to-[#232323] border border-[#1d1d1d] rounded-xl p-0.5 hover:opacity-80 transition-opacity"
            >
              <div className="relative flex h-[30px] items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap bg-[#303030] px-2 rounded-lg">
                <span className="pl-2 text-[#c4c4c4] text-sm font-medium">
                  Share
                </span>
                <Icon9 className="drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
