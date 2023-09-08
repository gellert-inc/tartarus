import React from 'react'
import { useHistory } from 'react-router'
import 'twin.macro'
import Button from '../button/Button'

const Discover = () => {
  return (
    <section tw='bg-gray-100'>
      <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 space-y-12'>
        <Title />
        <Content />
      </div>
    </section>
  )
}

const Title = () => (
  <div tw='max-w-xl mb-4 md:mx-auto text-center lg:max-w-2xl'>
    <h2 tw='max-w-4xl font-sans text-3xl font-normal leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto uppercase'>
      <span tw='relative inline-block'>
        <span tw='relative'>Discover</span>
      </span>{' '}
    </h2>
  </div>
)

const Content = () => {
  const history = useHistory()
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div tw='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
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
          <div tw='space-x-2'>
            <Button
              variant='primary'
              md
              onClick={() =>
                history.push({
                  pathname: `/onboarding`
                })
              }
            >
              Get started
            </Button>
            <a
              href='/discover'
              aria-label=''
              tw='inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-700 hover:text-teal-900'
            >
              Explore Organisations
              <svg
                tw='inline-block w-3 ml-2'
                fill='currentColor'
                viewBox='0 0 12 12'
              >
                <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
