import React, { useState, Fragment } from 'react'
import 'twin.macro'

import Logo from './Logo'
import { Popover, Transition } from '@headlessui/react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div tw='bg-white'>
      <div tw='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div tw='relative flex items-center justify-between'>
          <Logo />
          <ul tw='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Popover tw='relative'>
                <Popover.Button
                  type='primary'
                  aria-label='Sign up'
                  title='Sign up'
                  tw='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-700 hover:bg-teal-700 focus:shadow-outline focus:outline-none'
                >
                  Partner with us
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel tw='absolute z-10 px-6 py-2 mt-2 bg-gray-900 rounded-lg text-white'>
                    Coming soon!
                  </Popover.Panel>
                </Transition>
              </Popover>
            </li>
          </ul>
          <div tw='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              tw='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg tw='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div tw='absolute top-0 left-0 w-full z-10'>
                <div tw='p-5 bg-white border rounded shadow-sm'>
                  <div tw='flex items-center justify-between mb-4'>
                    <Logo colour='secondary' />

                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        tw='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg tw='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <Popover tw='relative'>
                    <Popover.Button
                      type='primary'
                      aria-label='Sign up'
                      title='Sign up'
                      tw='inline-flex items-center justify-center w-full h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-700 hover:bg-teal-700 focus:shadow-outline focus:outline-none '
                    >
                      Partner with us
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel tw='absolute z-10 px-4 py-2 mt-2 bg-gray-900 rounded-lg text-white transform -translate-x-1/2 left-1/2'>
                        Coming soon!
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
