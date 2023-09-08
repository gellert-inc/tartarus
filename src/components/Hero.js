import React from 'react'
import 'twin.macro'

import useWebAnimations, {
  fadeInUp,
  fadeIn
} from '@wellyshen/use-web-animations'

import Button from './button/Button'
import { Header } from './Header'
import { Subtitle } from './text'

export const Hero = () => (
  <div tw='relative h-screen'>
    <Header />
    <HeroSection />
    <Path />
  </div>
)

const HeroSection = () => {
  const { ref: buttonRef } = ButtonRef({ animation: fadeInUp })

  return (
    <div tw='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28'>
      <div tw='max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl'>
        <div tw='text-center'>
          <div tw='max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12'>
            <Title />
            <Subtitle
              text='Find the right charity. Get personalised reports'
              subtext='Build trust and a better society.'
            />
          </div>
          <Button variant='primary' href='/onboarding' ref={buttonRef} xl>
            <a href='/onboarding'>Contribute</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

const ButtonRef = ({ animation: { keyframes, animationOptions } }) =>
  useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 1000,
      duration: animationOptions.duration * 0.5
    }
  })

const Title = () => {
  const { ref } = TitleRef({ animation: fadeIn, delay: 100 })

  return (
    <h2
      tw='max-w-2xl mb-10 font-sans text-4xl font-semibold leading-none tracking-tight text-gray-900 lg:text-5xl md:mx-auto'
      ref={ref}
    >
      <span tw='relative inline-block'>
        <svg
          viewBox='0 0 52 24'
          fill='currentColor'
          tw='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
        >
          <defs>
            <pattern
              id='b039bae0-fdd5-4311-b198-8557b064fce0'
              x='0'
              y='0'
              width='.135'
              height='.30'
            >
              <circle cx='1' cy='1' r='.7' />
            </pattern>
          </defs>
          <rect
            fill='url(#b039bae0-fdd5-4311-b198-8557b064fce0)'
            width='52'
            height='24'
          />
        </svg>
        <span tw='relative'>Bringing</span>
      </span>{' '}
      <span tw='inline-block text-teal-accent-700'>
        <span tw='inline-block text-teal-accent-700'>philanthropy </span>
      </span>{' '}
      to the digital age
    </h2>
  )
}

const TitleRef = ({ animation: { keyframes, animationOptions }, delay }) =>
  useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: delay,
      duration: animationOptions.duration * 0.5
    }
  })

const Path = () => (
  <div tw='absolute inset-x-0 bottom-0'>
    <svg
      viewBox='0 0 224 12'
      fill='currentColor'
      tw='w-full -mb-1 text-teal-accent-700'
      preserveAspectRatio='none'
    >
      <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
    </svg>
  </div>
)
