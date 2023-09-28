import React from 'react'
import 'twin.macro'
import 'styled-components/macro'


const Track = () => {
  return (
    <section tw='bg-gray-100'>
      <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20 space-y-12'>
        <div tw='text-center'>
          <Title />
          <Content />
        </div>
      </div>
    </section>
  )
}

const Title = () => (
  <div tw='max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl'>
    <h2 tw='max-w-4xl font-sans text-3xl font-normal leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto uppercase'>
      <span tw='relative inline-block'>
        <span tw='relative'>Track</span>
      </span>{' '}
    </h2>
  </div>
)
const Content = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div tw='grid gap-12 gap-x-8 lg:grid-cols-2'>
        <div tw='flex flex-col justify-center space-y-12'>
          <div tw='max-w-xl mb-6'>
            <h2 tw='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Experience the power
              <br tw='hidden md:block' />
              of real{' '}
              <span tw='relative px-1'>
                <div tw='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400' />
                <span tw='relative inline-block text-gray-900'>
                  transparency
                </span>
              </span>
            </h2>
            <p tw='text-base text-gray-700 md:text-lg'>
              Identify where the money comes from and where it goes. <br />
              Follow the imapct of your contributions in real time.
            </p>
          </div>
          <div tw='grid gap-5 gap-x-8 sm:grid-cols-2'>
            <div tw='bg-white border-l-4 shadow-sm border-teal-accent-400'>
              <div tw='h-full p-5 border border-l-0 rounded-r'>
                <h6 tw='mb-2 font-semibold leading-5'>Transparent ledger</h6>
                <p tw='text-sm text-gray-900'>
                  See how funds circulate through organisations. Contributions
                  and expenses are transparent.
                </p>
              </div>
            </div>
            <div tw='bg-white border-l-4 shadow-sm border-teal-accent-400'>
              <div tw='h-full p-5 border border-l-0 rounded-r'>
                <h6 tw='mb-2 font-semibold leading-5'>Proactive reporting</h6>
                <p tw='text-sm text-gray-900'>
                  Forget about getting an obscure report once in a year.
                  Organisations post regular updates about their progress.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div tw='relative'>
          <svg
            tw='absolute w-full text-teal-accent-400'
            fill='currentColor'
            viewBox='0 0 600 392'
          >
            <rect x='0' y='211' width='75' height='181' rx='8' />
            <rect x='525' y='260' width='75' height='132' rx='8' />
            <rect x='105' y='83' width='75' height='309' rx='8' />
            <rect x='210' y='155' width='75' height='237' rx='8' />
            <rect x='420' y='129' width='75' height='263' rx='8' />
            <rect x='315' y='0' width='75' height='392' rx='8' />
          </svg>
          <svg
            tw='relative w-full text-deep-purple-accent-400'
            fill='currentColor'
            viewBox='0 0 600 392'
          >
            <rect x='0' y='311' width='75' height='81' rx='8' />
            <rect x='525' y='351' width='75' height='41' rx='8' />
            <rect x='105' y='176' width='75' height='216' rx='8' />
            <rect x='210' y='237' width='75' height='155' rx='8' />
            <rect x='420' y='205' width='75' height='187' rx='8' />
            <rect x='315' y='83' width='75' height='309' rx='8' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Track