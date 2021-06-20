import React from 'react'
import 'twin.macro'

export const Hero = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32'>
      <div tw='max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl'>
        <div tw='text-center'>
          <div tw='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p tw='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
                Coming soon
              </p>
            </div>
            <h2 tw='max-w-xl mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
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
                <span tw='relative'>Redefining</span>
              </span>{' '}
              <span tw='inline-block text-teal-accent-700'>
                <span tw='inline-block text-teal-accent-700'>
                  philanthropy{' '}
                </span>
              </span>{' '}
              for the digital age
            </h2>
            <p tw='text-base text-gray-700 md:text-lg'>
              Find the right charity. Get reports on your donations.
              <br /> Build trust and a better society.
            </p>
          </div>
          <form
            tw='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'
            name='alpha-release'
            method='post'
            action='/'
          >
            <input type='hidden' name='form-name' value='alpha-release' />

            <input
              placeholder='Email'
              required={true}
              type='email'
              tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-teal-accent-400 focus:outline-none focus:shadow-outline'
            />
            <button
              type='submit'
              tw='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-widest text-white transition duration-200 rounded shadow-md md:w-auto bg-teal-accent-700 hover:bg-teal-700 focus:shadow-outline focus:outline-none'
            >
              Subscribe
            </button>
          </form>
          <p tw='max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-28'>
            We are currently building Gellert to grow up to care for others.
            Sign up for our alpha release.
          </p>
          <a
            href='/'
            aria-label='Scroll down'
            tw='flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-700 hover:border-teal-accent-700 hover:shadow hover:scale-110'
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
          </a>
        </div>
      </div>
    </div>
  )
}
