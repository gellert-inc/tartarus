import React from 'react'
import 'twin.macro'

const Card = ({ course }) => (
  <div tw='flex flex-col bg-white rounded shadow-sm hover:shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
    <div tw='relative w-full h-48'>
      <img
        src='/chess.jpeg'
        tw='object-cover w-full h-full rounded-t'
        alt='Plan'
      />
    </div>
    <div tw='flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b'>
      <div>
        <div tw='text-lg font-semibold'>{course}</div>
        <p tw='text-sm text-gray-900'>
          Chess strengthens critical thinking and improves decision-making and
          problem-solving skills, and it is also great fun!
        </p>
        <hr tw='mt-4' />
        <div tw='mt-2'>
          <p tw='mb-2 font-bold tracking-wide'>Programme</p>
          <ul tw='space-y-2'>
            <li tw='flex items-center'>
              <div tw='mr-2'>
                <svg
                  tw='w-4 h-4 text-blue-primary'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLidth='2'
                >
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    points='6,12 10,16 18,8'
                  />
                  <circle
                    cx='12'
                    cy='12'
                    fill='none'
                    r='11'
                    stroke='currentColor'
                  />
                </svg>
              </div>
              <p tw='font-medium text-gray-800'>24 live online classes</p>
            </li>
            <li tw='flex items-center'>
              <div tw='mr-2'>
                <svg
                  tw='w-4 h-4 text-blue-primary'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLidth='2'
                >
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    points='6,12 10,16 18,8'
                  />
                  <circle
                    cx='12'
                    cy='12'
                    fill='none'
                    r='11'
                    stroke='currentColor'
                  />
                </svg>
              </div>
              <p tw='font-medium text-gray-800'>12 core course assignments</p>
            </li>
            <li tw='flex items-center'>
              <div tw='mr-2'>
                <svg
                  tw='w-4 h-4 text-blue-primary'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLidth='2'
                >
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    points='6,12 10,16 18,8'
                  />
                  <circle
                    cx='12'
                    cy='12'
                    fill='none'
                    r='11'
                    stroke='currentColor'
                  />
                </svg>
              </div>
              <p tw='font-medium text-gray-800'>6 real life skill projects</p>
            </li>
            <li tw='flex items-center'>
              <div tw='mr-2'>
                <svg
                  tw='w-4 h-4 text-blue-primary'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLidth='2'
                >
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    points='6,12 10,16 18,8'
                  />
                  <circle
                    cx='12'
                    cy='12'
                    fill='none'
                    r='11'
                    stroke='currentColor'
                  />
                </svg>
              </div>
              <p tw='font-medium text-gray-800'>Completion certificate</p>
            </li>
          </ul>
        </div>
        <hr tw='mt-3' />
        <div tw='my-4 mr-1 text-xl font-bold sm:text-2xl'>INR 5999/month</div>
      </div>
      <a
        href='/'
        tw='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-primary transition duration-200 rounded shadow-md bg-yellow-primary hover:bg-amber-400 focus:shadow-outline focus:outline-none'
      >
        Buy now
      </a>
    </div>
  </div>
)

export default Card
