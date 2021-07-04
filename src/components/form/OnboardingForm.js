import tw from 'twin.macro'

import { RadioGroup } from '@headlessui/react'

const ACCOUNT_CHECK_OPTIONS = ['Yes', 'No']
const RECIPIENT_SELECT_OPTIONS = [
  {
    value: 'Organisation',
    img: '/organisation.svg'
  },
  {
    value: 'Fundraising',
    img: '/individual.svg'
  },
  {
    value: 'Individual',
    img: '/crowd-funding.svg'
  }
]
const CAUSE_SELECT_OPTIONS = [
  {
    value: 'Donate to the poor',
    img: '/organisation.svg'
  },
  {
    value: 'Education',
    img: '/individual.svg'
  },
  {
    value: 'Disaster Management',
    img: '/crowd-funding.svg'
  },
  {
    value: 'Health',
    img: '/individual.svg'
  }
]

export const EmailInput = () => (
  <div tw='w-full max-w-md mx-auto py-8'>
    <input
      name='email'
      placeholder='Email'
      required={true}
      type='email'
      tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-teal-accent-400 focus:outline-none focus:shadow-outline'
    />
  </div>
)

export const AccountCheckStep = ({ selected, setSelected }) => (
  <div tw='w-full max-w-md mx-auto mb-8'>
    <RadioGroup value={selected} onChange={setSelected}>
      <div tw='space-y-4'>
        {ACCOUNT_CHECK_OPTIONS.map(option => (
          <RadioGroup.Option
            key={option}
            value={option}
            tw='relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none'
          >
            {({ active, checked }) => (
              <>
                <div
                  css={[
                    tw`flex items-center bg-white justify-start space-x-4 w-full focus:outline-none focus:border-none`
                  ]}
                >
                  <div tw='flex-shrink-0 text-white'>
                    <CheckIcon tw='w-6 h-6' checked={checked} />
                  </div>

                  <div tw='flex items-center'>
                    <div tw='text-sm'>
                      <RadioGroup.Description as='span' css={[tw`inline`]}>
                        <span tw='uppercase font-normal'>{option}</span>{' '}
                      </RadioGroup.Description>
                    </div>
                  </div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  </div>
)

export const RecipientSelectStep = ({ selected, setSelected }) => (
  <div tw='max-w-4xl mx-auto mb-8'>
    <RadioGroup value={selected} onChange={setSelected}>
      <div tw='space-y-2 md:flex justify-evenly'>
        {RECIPIENT_SELECT_OPTIONS.map(option => (
          <RadioGroup.Option
            key={option.value}
            value={option.value}
            tw='relative rounded-lg shadow-md px-6 py-4 cursor-pointer flex focus:outline-none'
          >
            {({ active, checked }) => (
              <>
                <div
                  css={[
                    tw`flex flex-col items-center bg-white justify-start space-y-2 w-full focus:outline-none focus:border-none`
                  ]}
                >
                  <img tw='w-32 h-32' src={option.img} alt={option.value}/>

                  <div tw='flex flex-col items-center space-y-4'>
                    <div tw='text-base'>
                      <RadioGroup.Description as='span' css={[tw`inline`]}>
                        <span tw='uppercase font-normal'>{option.value}</span>{' '}
                      </RadioGroup.Description>
                    </div>
                    <div tw='flex-shrink-0 text-white'>
                      <CheckIcon tw='w-6 h-6' checked={checked} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  </div>
)
export const CauseSelectStep = ({ selected, setSelected }) => (
  <div tw='max-w-4xl mx-auto mb-8'>
    <RadioGroup value={selected} onChange={setSelected}>
      <div tw='space-y-2 md:flex justify-evenly'>
        {CAUSE_SELECT_OPTIONS.map(option => (
          <RadioGroup.Option
            key={option.value}
            value={option.value}
            tw='relative rounded-lg shadow-md px-6 py-4 cursor-pointer flex focus:outline-none'
          >
            {({ active, checked }) => (
              <>
                <div
                  css={[
                    tw`flex flex-col items-center bg-white justify-start space-y-2 w-full focus:outline-none focus:border-none`
                  ]}
                >
                  <img tw='w-32 h-32' src={option.img} alt={option.value}/>

                  <div tw='flex flex-col items-center space-y-4'>
                    <div tw='text-base'>
                      <RadioGroup.Description as='span' css={[tw`inline`]}>
                        <span tw='uppercase font-normal'>{option.value}</span>{' '}
                      </RadioGroup.Description>
                    </div>
                    <div tw='flex-shrink-0 text-white'>
                      <CheckIcon tw='w-6 h-6' checked={checked} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  </div>
)

export const NameInput = () => (
  <div tw='flex w-full max-w-lg mx-auto mb-8'>
    <input
      name='fname'
      placeholder='First Name'
      required={true}
      tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-teal-accent-400 focus:outline-none focus:shadow-outline'
    />
    <input
      name='lname'
      placeholder='Last Name'
      required={true}
      tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-teal-accent-400 focus:outline-none focus:shadow-outline'
    />
  </div>
)
function CheckIcon (props) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#00bfa5' opacity='0.2' />
      {props.checked ? (
        <path
          d='M7 13l3 3 7-7'
          stroke='#00bfa5'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      ) : null}
    </svg>
  )
}
