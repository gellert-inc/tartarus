import React from 'react'
import 'twin.macro'
import { Card } from '../card'

const Courses = ({ courses = ['Chess', 'Vedic Maths', 'Yoga'] }) => {
  return (
    <div tw='bg-blue-primary'>
      <div tw='sm:max-w-xl md:max-w-full lg:max-w-screen-2xl mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20'>
        <div tw='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 tw='max-w-lg mb-6 font-sans text-3xl font-normal leading-none tracking-tight text-white sm:text-4xl md:mx-auto'>
            Courses we offer
          </h2>
        </div>
        <div tw='grid max-w-md gap-20 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-xl sm:mx-auto'>
          {courses.map(course => (
            <Card key={course} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Courses
