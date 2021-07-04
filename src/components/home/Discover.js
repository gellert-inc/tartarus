import React, { useState } from 'react'
import 'twin.macro'

import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'

import { Button } from '../button'
import { Title } from '../text'
import { SignupForm } from '.'

const Discover = () => {
  return (
    <Fade>
      <section tw='bg-gray-100'>
        <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 space-y-12'>
          <Title text='Discover' />
          <Content />
        </div>
      </section>
    </Fade>
  )
}

const Content = () => {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div tw='flex flex-col-reverse items-center justify-between w-full mb-10 lg:flex-row'>
        <div tw='lg:max-w-lg lg:pr-5'>
          <div tw='max-w-xl mb-6'>
            <h2 tw='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6 text-center md:text-left'>
              Meet <span tw='inline-block text-teal-accent-700'>Gellert</span>
            </h2>
            <div tw='text-gray-700 text-base md:text-lg space-y-2'>
              <p>
                Our quirky artificial intelligence bot that will find the
                perfect initiatives for you to support.
              </p>
              <p> It couldn’t be easier, or faster</p>
            </div>
          </div>
          <div tw='space-x-2'></div>
          {showSignup ? (
            <AnimatedForm text='Join' />
          ) : (
            <Button variant='primary' md onClick={() => setShowSignup(true)}>
              Join the waitlist
            </Button>
          )}
        </div>
        <BotImage />
      </div>
    </div>
  )
}

const BotImage = () => (
  <div tw='flex items-center justify-center lg:w-1/2 mb-16 lg:mb-0'>
    <div tw='w-2/5'>
      <img
        tw='object-cover'
        src='https://kitwind.io/assets/kometa/one-girl-phone.png'
        alt=''
      />
    </div>
    <div tw='w-5/12 -ml-16 lg:-ml-32'>
      <img
        tw='object-cover'
        src='https://kitwind.io/assets/kometa/two-girls-phone.png'
        alt=''
      />
    </div>
  </div>
)

const AnimatedForm = withReveal(SignupForm, <Fade bottom tw='md:px-16' />)

export default Discover
