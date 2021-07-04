import React from 'react'
import 'twin.macro'

import { Header } from '../components/Header'
import Footer from '../components/layout/Footer'
import { Badge } from '../components/badge'
import SocialButtons from '../components/social/SocialButtons'

const OrganisationProfile = ({
  organisations = [{ id: '1', name: 'Test' }]
}) => (
  <>
    <Header />
    <Hero />
    <Details />
    <Contribute />
    <Track />
    <Footer />
  </>
)

const Hero = () => {
  return (
    <div tw='flex flex-col px-8 py-12 max-w-screen-xl mx-auto space-y-8'>
      <div tw='space-y-2'>
        <Badge text='Childcare' />
        <div tw='flex justify-between text-left sm:mx-auto'>
          <h2 tw='font-sans text-4xl font-semibold leading-none tracking-tight text-gray-900 lg:text-5xl'>
            Guardians of Dreams
          </h2>
          <SocialButtons />
        </div>
      </div>
      <Gallery />
      <NavBar />
    </div>
  )
}

const Gallery = ({ images: [highlight, left, right, bottom, top] = [] }) => {
  return (
    <div tw='grid gap-8 lg:grid-cols-2'>
      <div tw='flex flex-col justify-center'>
        <img
          tw='object-cover w-full h-full col-span-2 rounded shadow-lg'
          src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          alt=''
        />
      </div>
      <div tw='grid grid-cols-2 gap-5'>
        <img
          tw='object-cover w-full h-56 col-span-2 rounded shadow-lg'
          src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          alt=''
        />
        <img
          tw='object-cover w-full h-48 rounded shadow-lg'
          src='https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          alt=''
        />
        <img
          tw='object-cover w-full h-48 rounded shadow-lg'
          src='https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
          alt=''
        />
      </div>
    </div>
  )
}

const NavBar = ({ items = [] }) => {
  return (
    <div tw='flex flex-col items-center md:flex-row'>
      <a
        href='/'
        tw='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-teal-accent-700 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          tw='w-4'
        >
          <polyline
            fill='none'
            stroke='currentColor'
            strokeMiterlimit='10'
            points='4,4 22,4 19,14 4,14 '
          />
          <circle
            cx='4'
            cy='22'
            r='2'
            strokeLinejoin='miter'
            strokeLinecap='square'
            stroke='none'
            fill='currentColor'
          />
          <circle
            cx='20'
            cy='22'
            r='2'
            strokeLinejoin='miter'
            strokeLinecap='square'
            stroke='none'
            fill='currentColor'
          />
          <polyline
            fill='none'
            stroke='currentColor'
            strokeMiterlimit='10'
            points='1,1 4,4 4,14 2,18 23,18 '
          />
        </svg>
        <span tw='ml-3'>Discover</span>
      </a>
      <a
        href='/'
        aria-label=''
        tw='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-teal-accent-700 md:mr-4'
      >
        Contribute
      </a>
      <a
        href='/'
        aria-label=''
        tw='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-teal-accent-700'
      >
        Track
      </a>
    </div>
  )
}
const Details = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div tw='grid gap-24 row-gap-8 lg:grid-cols-5'>
        <div tw='grid gap-8 lg:col-span-2'>
          <div>
            <p tw='mb-2 text-lg font-bold'>Old man</p>
            <p tw='text-gray-700'>
              An old man lived in the village. He was one of the most
              unfortunate people in the world. The whole village was tired of
              him, he was always gloomy, he constantly complained.
            </p>
          </div>
          <div>
            <p tw='mb-2 text-lg font-bold'>The Wise Man</p>
            <p tw='text-gray-700'>
              People have been coming to the wise man, complaining about the
              same problems every time. One day he told them a joke and everyone
              roared in laughter.
            </p>
          </div>
        </div>
        <div tw='grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x'>
          <div tw='flex flex-col justify-between p-10'>
            <div>
              <p tw='text-lg font-semibold text-gray-800 sm:text-base'>
                Funds Raised
              </p>
              <p tw='text-2xl font-bold text-teal-accent-700 sm:text-xl'>
                $84 000 000
              </p>
            </div>
            <div>
              <p tw='text-lg font-semibold text-gray-800 sm:text-base'>
                Products
              </p>
              <p tw='text-2xl font-bold text-teal-accent-700 sm:text-xl'>52</p>
            </div>
            <div>
              <p tw='text-lg font-semibold text-gray-800 sm:text-base'>
                Downloads
              </p>
              <p tw='text-2xl font-bold text-teal-accent-700 sm:text-xl'>
                186M
              </p>
            </div>
          </div>
          <div tw='flex flex-col justify-between p-10'>
            <div>
              <p tw='text-lg font-semibold text-gray-800 sm:text-base'>Users</p>
              <p tw='text-2xl font-bold text-teal-accent-700 sm:text-xl'>86K</p>
            </div>
            <div>
              <p tw='text-lg font-semibold text-gray-800 sm:text-base'>
                Installations
              </p>
              <p tw='text-2xl font-bold text-teal-accent-700 sm:text-xl'>
                917 000
              </p>
            </div>
            <div>
              <p tw='text-lg font-semibold text-gray-800 sm:text-base'>
                Subscribers
              </p>
              <p tw='text-2xl font-bold text-teal-accent-700 sm:text-xl'>
                213K
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contribute = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20'>
      <SectionTitle
        title='Contribute'
        subtitle='Become a financial contributor.'
      />
      <div tw='grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-xl lg:grid-cols-3 sm:mx-auto'>
        <div tw='flex flex-col justify-between p-5 bg-white border rounded shadow-sm'>
          <div tw='mb-6'>
            <div tw='flex items-center justify-between pb-6 mb-6 border-b'>
              <div>
                <Badge text='reccuring' />
                <p tw='text-5xl font-extrabold'>Sponsor</p>
              </div>
              <div tw='flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50'>
                <svg
                  tw='w-10 h-10 text-gray-600'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLidth='2'
                >
                  <path
                    d='M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z'
                    fill='none'
                    stroke='currentColor'
                  />
                  <path
                    d='M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z'
                    fill='none'
                    stroke='currentColor'
                  />
                </svg>
              </div>
            </div>
            <div>
              <p tw='mb-2 font-bold tracking-wide'>Features</p>
              <ul tw='space-y-2'>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>10 deploys per day</p>
                </li>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>10 GB of storage</p>
                </li>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>Unlimited domains</p>
                </li>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>SSL Certificates</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href='/'
              tw='inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none'
            >
              Start for free
            </a>
            <p tw='text-sm text-gray-600'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>
          </div>
        </div>
        <div tw='flex flex-col justify-between p-5 bg-white border rounded shadow-sm'>
          <div tw='mb-6'>
            <div tw='flex items-center justify-between pb-6 mb-6 border-b'>
              <div>
                <p tw='text-sm font-bold tracking-wider uppercase'>
                  For your team
                </p>
                <p tw='text-5xl font-extrabold'>$39</p>
              </div>
              <div tw='flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50'>
                <svg
                  tw='w-10 h-10 text-teal-accent-700'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLidth='2'
                >
                  <path
                    d='M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z'
                    fill='none'
                    stroke='currentColor'
                  />
                  <path
                    d='M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1'
                    fill='none'
                    stroke='currentColor'
                  />
                  <path
                    d='M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z'
                    fill='none'
                    stroke='currentColor'
                  />
                  <path
                    d='M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1'
                    fill='none'
                    stroke='currentColor'
                  />
                  <path
                    d='M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z'
                    fill='none'
                    stroke='currentColor'
                  />
                  <path
                    d='M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z'
                    fill='none'
                    stroke='currentColor'
                  />
                </svg>
              </div>
            </div>
            <div>
              <p tw='mb-2 font-bold tracking-wide'>Features</p>
              <ul tw='space-y-2'>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>Unlimited deploys</p>
                </li>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>Up to 10 Team Members</p>
                </li>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>100 GB of starge</p>
                </li>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>24/7 support</p>
                </li>
                <li tw='flex items-center'>
                  <div tw='mr-2'>
                    <svg
                      tw='w-4 h-4 text-teal-accent-700'
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
                  <p tw='font-medium text-gray-800'>Global CDN</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href='/'
              tw='inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-700 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
            >
              Get started
            </a>
            <p tw='text-sm text-gray-600'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </p>
          </div>
        </div>
        <PricingCard
          title='Sponsor'
          subtitle='recurring'
          description='Contribute what you can each month to support biweekly food + household item distribution to Ward 2 neighbors'
        />
      </div>
    </div>
  )
}

const PricingCard = ({ title, subtitle, description }) => (
  <div tw='flex flex-col justify-between p-5 bg-white border rounded shadow-sm'>
    <div tw='mb-6'>
      <div tw='flex items-center justify-between pb-6 mb-6 border-b'>
        <div>
          <p tw='text-sm font-bold tracking-wider uppercase'>For your team</p>
          <p tw='text-5xl font-extrabold'>$39</p>
        </div>
        <div tw='flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50'>
          <svg
            tw='w-10 h-10 text-teal-accent-700'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLidth='2'
          >
            <path
              d='M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z'
              fill='none'
              stroke='currentColor'
            />
            <path
              d='M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1'
              fill='none'
              stroke='currentColor'
            />
            <path
              d='M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z'
              fill='none'
              stroke='currentColor'
            />
            <path
              d='M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1'
              fill='none'
              stroke='currentColor'
            />
            <path
              d='M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z'
              fill='none'
              stroke='currentColor'
            />
            <path
              d='M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z'
              fill='none'
              stroke='currentColor'
            />
          </svg>
        </div>
      </div>
      <div>
        <p tw='mb-2 font-bold tracking-wide'>Features</p>
        <ul tw='space-y-2'>
          <li tw='flex items-center'>
            <div tw='mr-2'>
              <svg
                tw='w-4 h-4 text-teal-accent-700'
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
            <p tw='font-medium text-gray-800'>Unlimited deploys</p>
          </li>
          <li tw='flex items-center'>
            <div tw='mr-2'>
              <svg
                tw='w-4 h-4 text-teal-accent-700'
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
            <p tw='font-medium text-gray-800'>Up to 10 Team Members</p>
          </li>
          <li tw='flex items-center'>
            <div tw='mr-2'>
              <svg
                tw='w-4 h-4 text-teal-accent-700'
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
            <p tw='font-medium text-gray-800'>100 GB of starge</p>
          </li>
          <li tw='flex items-center'>
            <div tw='mr-2'>
              <svg
                tw='w-4 h-4 text-teal-accent-700'
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
            <p tw='font-medium text-gray-800'>24/7 support</p>
          </li>
          <li tw='flex items-center'>
            <div tw='mr-2'>
              <svg
                tw='w-4 h-4 text-teal-accent-700'
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
            <p tw='font-medium text-gray-800'>Global CDN</p>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <a
        href='/'
        tw='inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-700 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'
      >
        Get started
      </a>
      <p tw='text-sm text-gray-600'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium
      </p>
    </div>
  </div>
)

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div tw='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
      <h2 tw='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
        <span tw='relative inline-block'>
          <svg
            viewBox='0 0 52 24'
            fill='currentColor'
            tw='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
          >
            <defs>
              <pattern
                id='ace59d72-08d5-4850-b9e4-d9d0b86c0525'
                x='0'
                y='0'
                width='.135'
                height='.30'
              >
                <circle cx='1' cy='1' r='.7' />
              </pattern>
            </defs>
            <rect
              fill='url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)'
              width='52'
              height='24'
            />
          </svg>
          <span tw='relative'>{title}</span>
        </span>
      </h2>
      <p tw='text-base text-gray-700 md:text-lg'>{subtitle}</p>
    </div>
  )
}

const Track = () => {
  return (
    <>
      <SectionTitle title='Track' subtitle='Transparent and open finances.' />
      <div tw='flex mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
        <Transactions />
        <Statistics />
      </div>
    </>
  )
}
const Transactions = () => {
  return (
    <div tw='py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md'>
      <div tw='py-8 rounded shadow-xl sm:p-16 md:px-24 lg:px-8 '>
        <div tw='flex flex-col lg:flex-row'>
          <div tw='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
            <h2 tw='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              The quick, brown fox
              <br tw='hidden md:block' />
              jumps over{' '}
              <span tw='inline-block text-deep-purple-accent-400'>
                a lazy dog
              </span>
            </h2>
          </div>
          <div tw='lg:w-1/2'>
            <p tw='mb-4 text-base text-gray-700'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
              error sit voluptatem accusantium doloremque rem aperiam.
            </p>
            <a
              href='/'
              aria-label=''
              tw='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Statistics = () => {
  return (
    <div tw='py-16 md:px-24 lg:px-8'>
      <div tw='max-w-lg space-y-3 sm:mx-auto lg:max-w-xl'>
        <div
          className='group'
          tw='flex items-center p-2 transition-colors duration-200 border rounded shadow hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400'
        >
          <div tw='mr-2'>
            <svg
              tw='w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <span tw='text-gray-800 transition-colors duration-200 group-hover:text-white'>
            Change the world by being yourself.
          </span>
        </div>
        <div
          className='group'
          tw='flex items-center p-2 transition-colors duration-200 border rounded shadow hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400'
        >
          <div tw='mr-2'>
            <svg
              tw='w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <span tw='text-gray-800 transition-colors duration-200 group-hover:text-white'>
            Die with memories, not dreams.
          </span>
        </div>
        <div
          className='group'
          tw='flex items-center p-2 transition-colors duration-200 border rounded shadow hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400'
        >
          <div tw='mr-2'>
            <svg
              tw='w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <span tw='text-gray-800 transition-colors duration-200 group-hover:text-white'>
            What we think, we become.
          </span>
        </div>
        <div
          className='group'
          tw='flex items-center p-2 transition-colors duration-200 border rounded shadow hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400'
        >
          <div tw='mr-2'>
            <svg
              tw='w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <span tw='text-gray-800 transition-colors duration-200 group-hover:text-white'>
            Be so good they can’t ignore you.
          </span>
        </div>
        <div
          className='group'
          tw='flex items-center p-2 transition-colors duration-200 border rounded shadow hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400'
        >
          <div tw='mr-2'>
            <svg
              tw='w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <span tw='text-gray-800 transition-colors duration-200 group-hover:text-white'>
            Simplicity is the ultimate sophistication.
          </span>
        </div>
        <div
          className='group'
          tw='flex items-center p-2 transition-colors duration-200 border rounded shadow hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400'
        >
          <div tw='mr-2'>
            <svg
              tw='w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <span tw='text-gray-800 transition-colors duration-200 group-hover:text-white'>
            Yesterday you said tomorrow. Just do it today.
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrganisationProfile
