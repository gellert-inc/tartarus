import React from 'react'
import 'twin.macro'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ScrollDown = ({ disabled, to }) => {
  return disabled ? null : (
    <AnchorLink
      href={to}
      aria-label='Scroll down'
      tw='flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-500 transform border border-gray-400 rounded-full hover:text-teal-accent-700 hover:border-teal-accent-700 hover:shadow hover:scale-110 animate-bounce'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='currentColor'
      >
        <path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' />
      </svg>
    </AnchorLink>
  )
}

export default ScrollDown
