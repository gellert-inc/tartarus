import React from 'react'
import tw from 'twin.macro'

const VARIANTS = {
  md: tw`text-base md:text-lg`,
  xl: tw`text-gray-200 text-lg md:text-xl`
}

const Subtitle = ({ text, subtext, variant = 'md' }) => {
  return (
      <p
        css={[
          variant === 'md' && VARIANTS['md'],
          variant === 'xl' && VARIANTS['xl']
        ]}
      >
        {text}
        <br />
        {subtext}
      </p>
  )
}

export default Subtitle
