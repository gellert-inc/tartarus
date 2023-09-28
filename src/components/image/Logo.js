import React from 'react'
import 'twin.macro'
import 'styled-components/macro'

const Logo = ({ colour = 'primary' }) => (
  <a href='/' aria-label='Gellert' title='Gellert' tw='flex items-center justify-center'>
    <svg
      tw='w-12 text-teal-accent-700 -mt-1'
      viewBox='0 0 305 333'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d)'>
        <rect x='4' y='43' width='297' height='282' rx='40' fill='#00BFA5' />
      </g>
      <path
        d='M214.816 178.2H235.264V255.096C225.856 263.352 214.72 269.688 201.856 274.104C188.992 278.52 175.456 280.728 161.248 280.728C141.088 280.728 122.944 276.312 106.816 267.48C90.688 258.648 78.016 246.456 68.8 230.904C59.584 215.16 54.976 197.592 54.976 178.2C54.976 158.808 59.584 141.336 68.8 125.784C78.016 110.04 90.688 97.752 106.816 88.92C122.944 80.088 141.184 75.672 161.536 75.672C176.896 75.672 191.008 78.168 203.872 83.16C216.736 87.96 227.584 95.16 236.416 104.76L223.168 118.296C207.232 102.552 186.976 94.68 162.4 94.68C146.08 94.68 131.296 98.328 118.048 105.624C104.992 112.728 94.72 122.712 87.232 135.576C79.744 148.248 76 162.456 76 178.2C76 193.944 79.744 208.152 87.232 220.824C94.72 233.496 104.992 243.48 118.048 250.776C131.104 258.072 145.792 261.72 162.112 261.72C182.848 261.72 200.416 256.536 214.816 246.168V178.2Z'
        fill='white'
      />
      <defs>
        <filter
          id='filter0_d'
          x='0'
          y='43'
          width='305'
          height='290'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
      </defs>
    </svg>

    <div
      tw='
        flex ml-0.5 text-3xl font-medium tracking-wide lowercase text-teal-accent-700'
    >
      ellert
    </div>
  </a>
)

export default Logo
