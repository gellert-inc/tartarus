import React from 'react'
import 'twin.macro'
import 'styled-components/macro'

import Fade from 'react-reveal/Fade'

import { Subtitle } from '../text'

const STEPS = [
  {
    id: 1,
    title: 'Discover',
    subtitle:
      'Gellert, our artificial intelligence bot, will find the perfect initiatives to follow. It couldn’t be easier, or faster '
  },
  {
    id: 2,
    title: 'Contribute',
    subtitle:
      'Support the initiatives you care about by becoming a monthly or a one-time donor.'
  },
  {
    id: 3,
    title: 'Track',
    subtitle:
      'Track the impact of your donations and see how your contributions are making a difference. Have transparency on how your money is being spent.'
  },
  {
    id: 4,
    title: 'Success',
    last: true
  }
]

const HowItWorks = () => {
  return (
    <section id='howItWorks' tw='bg-teal-accent-700'>
      <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 space-y-12'>
        <div tw='text-center'>
          <Fade>
            <Title />
            <Subtitle
              variant='xl'
              color='gray-100'
              text='Find the right organisations and initiatives to support.'
              subtext='Watch them grow'
            />
          </Fade>
        </div>
        <Steps />
      </div>
    </section>
  )
}

const Title = () => (
  <div tw='max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl'>
    <h2 tw='max-w-4xl font-sans text-3xl font-normal leading-none tracking-tight text-white sm:text-4xl md:mx-auto uppercase'>
      The{' '}
      <span tw='relative inline-block'>
        <span tw='relative'>Gellert</span>
      </span>{' '}
      way
    </h2>
  </div>
)

const Steps = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div tw='grid gap-6 gap-x-10 lg:grid-cols-2'>
        <div tw='lg:py-6 lg:pr-16'>
          {STEPS.map(step => (
            <Step {...step} key={step.id} />
          ))}
        </div>
        <div tw='relative'>
          <img
            tw='inset-0 object-cover w-full rounded shadow-lg h-96 lg:absolute lg:h-full'
            src='https://images.unsplash.com/photo-1575356891535-a79c0bc6bffc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

const Step = ({ id, title, subtitle, last }) => (
  <Fade delay={id * 600}>
    <div tw='flex'>
      <div tw='flex flex-col items-center mr-4'>
        {last ? (
          <div>
            <div tw='flex items-center justify-center w-10 h-10 border rounded-full'>
              <svg
                tw='w-6 text-white'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <polyline
                  fill='none'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit='10'
                  points='6,12 10,16 18,8'
                />
              </svg>
            </div>
          </div>
        ) : (
          <>
            <div tw='flex items-center justify-center w-10 h-10 border rounded-full'>
              <div>
                <svg
                  tw='w-4 text-white'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <line
                    fill='none'
                    strokeMiterlimit='10'
                    x1='12'
                    y1='2'
                    x2='12'
                    y2='22'
                  />
                  <polyline
                    fill='none'
                    strokeMiterlimit='10'
                    points='19,15 12,22 5,15'
                  />
                </svg>
              </div>
            </div>
            <div tw='w-px h-full bg-gray-300' />
          </>
        )}
      </div>
      <div tw='pt-1 pb-8'>
        <p tw='mb-2 text-white text-2xl font-semibold'>{title}</p>
        <p tw='text-gray-200 font-normal'>{subtitle}</p>
      </div>
    </div>
  </Fade>
)

export default HowItWorks
