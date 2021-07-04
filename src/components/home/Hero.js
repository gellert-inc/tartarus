import React from 'react'
import tw from 'twin.macro'

import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'

import { Button, ScrollDown } from '../button'
import { Header } from '../layout'
import { Subtitle } from '../text'
import { Path } from '../pattern'
import { Badge } from '../badge'

const CustomButton = tw(Button)`h-12 px-6 hover:bg-teal-700`

const Hero = () => (
  <div tw='relative h-screen'>
    <Header />
    <HeroSection />
    <Path />
  </div>
)
const HeroSection = () => {
  return (
    <div tw='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28'>
      <div tw='max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl'>
        <div tw='text-center'>
          <div tw='max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12 space-y-2'>
            <AnimatedBadge text='Coming Soon' />
            <AnimatedTitle />
            <AnimatedSubtitle
              text='Discover the right organisation. Contribute in minutes.'
              subtext='Track your contribution make an impact.'
            />
          </div>
          <Fade delay={1000}>
            <div tw='max-w-md mx-auto'>
              <SignupForm text='Subscribe' />
              <p tw='max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-28'>
                Sign up for our alpha release
              </p>
            </div>
          </Fade>
          <ScrollDown to='#howItWorks' />
        </div>
      </div>
    </div>
  )
}

const Title = () => {
  return (
    <Fade>
      <h2 tw='max-w-2xl mb-10 font-sans text-4xl font-semibold leading-none tracking-tight text-gray-900 lg:text-5xl md:mx-auto'>
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
    </Fade>
  )
}

export const SignupForm = ({ text }) => (
  <form
    tw='flex flex-col items-center w-full mb-4 md:flex-row'
    name='alpha-release'
    method='post'
    action='/'
  >
    <input type='hidden' name='form-name' value='alpha-release' />

    <input
      name='email'
      placeholder='Email'
      required={true}
      type='email'
      tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-teal-accent-400 focus:outline-none focus:shadow-outline'
    />
    <CustomButton variant='primary' md>
      {text}
    </CustomButton>
  </form>
)

const AnimatedTitle = withReveal(Title, <Fade />)
const AnimatedSubtitle = withReveal(Subtitle, <Fade bottom delay={300} />)
const AnimatedBadge = withReveal(Badge, <Fade delay={500} />)

export default Hero
