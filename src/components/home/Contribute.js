import React from 'react'
import 'twin.macro'

const Discover = () => {
  return (
    <section tw='bg-teal-accent-700'>
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
  <div tw='max-w-xl mb-4 md:mx-auto text-center lg:max-w-2xl'>
    <h2 tw='max-w-4xl font-sans text-3xl font-normal leading-none tracking-tight text-white sm:text-4xl md:mx-auto uppercase'>
      <span tw='relative inline-block'>
        <span tw='relative'>Contribute</span>
      </span>{' '}
    </h2>
  </div>
)

const Content = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div tw='grid gap-8 row-gap-8 lg:grid-cols-2'>
        <div tw='flex flex-col justify-center space-y-12'>
          <div tw='max-w-xl mb-6'>
            <h2 tw='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
              Support communities
              <br tw='hidden md:block' />
              and help them{' '}
              <span tw='relative inline-block p-1'>
                <div tw='absolute inset-0 transform -skew-x-12 bg-white' />
                <span tw='relative text-teal-accent-700'>grow</span>
              </span>
            </h2>
            <p tw='text-base text-gray-100 md:text-lg'>
              Become a one-time or recurring financial contributor.
            </p>
          </div>
          <div tw='grid gap-5 row-gap-8 sm:grid-cols-2'>
            <div tw='bg-white border-l-4 shadow-sm border-teal-accent-400'>
              <div tw='h-full p-5 border border-l-0 rounded-r'>
                <h6 tw='mb-2 font-semibold leading-5'>
                  Claim tax benfits with ease
                </h6>
                <p tw='text-sm text-gray-900'>
                  Retreive the 80G certificate for your contribution instantly.{' '}
                  <br />
                  We will also e-mail it you so that you don't miss it.
                </p>
              </div>
            </div>
            <div tw='bg-white border-l-4 shadow-sm border-teal-accent-400'>
              <div tw='h-full p-5 border border-l-0 rounded-r'>
                <h6 tw='mb-2 font-semibold leading-5'>
                  No more hefty commissions
                </h6>
                <p tw='text-sm text-gray-900'>
                  Gellert ensures that your contribution is put to great use
                  without charging traditional commission rates, which often
                  exceed 15%.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            tw='w-full h-56 rounded shadow-lg sm:h-96'
            src='/contributors.jpeg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Discover
