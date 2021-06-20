import React from 'react'
import 'twin.macro'

const Logo = ({ colour = 'primary' }) => (
  <a href='/' aria-label='Gurufa' title='Gurufa' tw='inline-flex items-center'>
    <svg
      tw='w-8 text-teal-accent-700'
      viewBox='0 0 24 24'
      strokeLinejoin='round'
      strokeWidth='2'
      strokeLinecap='round'
      strokeMiterlimit='10'
      stroke='currentColor'
      fill='none'
    >
      <rect x='3' y='1' width='7' height='12' />
      <rect x='3' y='17' width='7' height='6' />
      <rect x='14' y='1' width='7' height='6' />
      <rect x='14' y='11' width='7' height='12' />
    </svg>

    <div
      tw='
        flex ml-3 text-3xl font-medium tracking-wide lowercase text-teal-accent-700'
    >
      Gellert
    </div>
  </a>
)

export default Logo
