import React from 'react'
import 'twin.macro'
import 'styled-components/macro'

const Title = ({ text }) => (
  <div tw='max-w-xl mb-4 md:mx-auto text-center lg:max-w-2xl'>
    <h2 tw='max-w-4xl font-sans text-3xl font-normal leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto uppercase'>
      <span tw='relative inline-block'>
        <span tw='relative'>{text}</span>
      </span>{' '}
    </h2>
  </div>
)

export default Title
