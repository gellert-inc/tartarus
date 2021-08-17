import React from 'react'
import 'twin.macro'

const Mission = () => {
  return (
    <div tw='bg-gray-900'>
      <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div tw='max-w-3xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12'>
          <h2 tw='max-w-3xl mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'>
            We are here to build a better society.
          </h2>
          <p tw='text-base text-gray-50 md:text-lg'>
            Our mission is to inculcate charitable giving as a habit in
            communites.
            <br />
          </p>
        </div>
        <div tw='grid gap-6 row-gap-5 lg:grid-cols-3'>
          <div>
            <img
              tw='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
              src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
              alt=''
            />
            <h5 tw='mb-2 text-white text-xl font-bold leading-none sm:text-2xl'>
              Celebrate your community
            </h5>
            <p tw='text-gray-100'>
              Schedule visits with your sponsored organisations to understand
              the situation on ground.
            </p>
          </div>
          <div>
            <img
              tw='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
              src='https://images.unsplash.com/photo-1542627088-6603b66e5c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1260&q=80'
              alt=''
            />
            <h5 tw='mb-2 text-white text-xl font-bold leading-none sm:text-2xl'>
              Customisable contributions
            </h5>
            <p tw='text-gray-100'>
              Support organisations by contributing to them once, monthly, or
              yearly.
            </p>
          </div>
          <div>
            <img
              tw='object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96'
              src='https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1260&q=80'
              alt=''
            />
            <h5 tw='mb-2 text-white text-xl font-bold leading-none sm:text-2xl'>
              Personalised reports
            </h5>
            <p tw='text-gray-100'>
              Get a monthly summary of all your sponsored organisations and
              their progress of budget goals contributors and expense details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
