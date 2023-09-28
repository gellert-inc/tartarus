import React from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'

const DEFAULT = 'default'

const PADDINGS = {
  [DEFAULT]: tw`px-4 py-px`
}

const FONT = {
  [DEFAULT]: tw`text-xs font-semibold`
}

const Badge = ({
  text,
  font = DEFAULT,
  inverted = false,
  padding = DEFAULT
}) => (
  <p
    css={[
      tw`inline-block tracking-wider uppercase rounded-full`,
      inverted
        ? tw`bg-white text-gray-900`
        : tw`text-teal-900 bg-teal-accent-400`,
      padding && PADDINGS[padding],
      font && FONT[font]
    ]}
  >
    {text}
  </p>
)

export default Badge
