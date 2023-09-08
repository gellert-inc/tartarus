import React from 'react'
import { useHistory } from 'react-router'
import 'twin.macro'
import Button from '../components/button/Button'

import { Header } from '../components/Header'
import Footer from '../components/layout/Footer'

const Listings = ({ organisations = [{ id: '1', name: 'Test' }] }) => (
  <>
    <Header />
    {/* {organisations.map(organisation => (
      <Card key={organisation.id} course={organisation.name} />
    ))} */}
    <Cards />
    <Footer />
  </>
)

const Cards = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div tw='grid gap-x-8 gap-y-12 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        {[...Array(12).keys()].map(id => (
          <OrganisationCard key={id} />
        ))}
      </div>
    </div>
  )
}

const OrganisationCard = ({
  to = '/org',
  title = 'Test',
  imgSrc = 'https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
}) => {
  const history = useHistory()
  return (
    <div
      tw='overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg cursor-pointer'
      onClick={() =>
        history.push({
          pathname: to
        })
      }
    >
      <img src={imgSrc} tw='object-cover w-full h-44' alt='' />
      <div tw='p-5 border border-t-0'>
        <p tw='mb-3 text-xs font-semibold tracking-wide uppercase'>
          <a
            href='/'
            tw='transition-colors duration-200 text-blue-gray-900 hover:text-teal-accent-700'
            aria-label='Category'
            title='traveling'
          >
            traveling
          </a>
        </p>
        <a
          href='/'
          aria-label='Category'
          title={title}
          tw='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
        >
          {title}
        </a>
        <div>
          <p>Contributors</p>
          <p tw='font-semibold'>100</p>
          <p>Yearly budget</p>
          <p tw='font-semibold'>$20,753</p>
        </div>

        <Button variant='primary' md>
          Contribute
        </Button>
      </div>
    </div>
  )
}
export default Listings
