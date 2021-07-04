import { useState } from 'react'
import 'twin.macro'

import { Header } from '../components/Header'
import {
  AccountCheckStep,
  EmailInput,
  RecipientSelectStep,
  NameInput,
  CauseSelectStep
} from '../components/form/OnboardingForm'

import Button from '../components/button/Button'

const ACCOUNT_CHECK = 'ACCOUNT_CHECK'
const LOGIN = 'LOGIN'
const SELECT_RECIPIENT = 'SELECT_RECIPIENT'
const NAME_INPUT = 'NAME_INPUT'
const SELECT_CAUSE = 'SELECT_CAUSE'
const MONTHLY_PLAN = 'MONTHLY_PLAN'
const FREQUENCY = 'FREQUENCY'

const STEPS = {
  ACCOUNT_CHECK: {
    name: 'ACCOUNT_CHECK',
    text: ['Hey, I am Gellert!', 'Do you already have an account?'],
    component: AccountCheckStep,
    to: LOGIN
  },
  LOGIN: {
    text: ['Amazing! Enter your email to log in'],
    component: EmailInput,
    to: SELECT_RECIPIENT
  },
  SELECT_RECIPIENT: {
    text: ['Got it. Which would you like?'],
    component: RecipientSelectStep,
    to: NAME_INPUT
  },
  NAME_INPUT: {
    text: [`I’ll help you find something amazing today! Ready to go?`],
    component: NameInput,
    to: SELECT_CAUSE
  },
  SELECT_CAUSE: {
    text: ['Got it. Which would you like?'],
    component: CauseSelectStep,
    to: MONTHLY_PLAN
  },
  MONTHLY_PLAN: {
    text: ['Hey, I am Gellert!', 'Do you already have an account?'],
    component: AccountCheckStep,
    to: FREQUENCY
  },
  FREQUENCY: {
    text: ['How often should I report you the status of '],
    component: AccountCheckStep,
    to: LOGIN
  }
}

const Onboarding = () => {
  const [selected, setSelected] = useState()
  const [step, setSelectedStep] = useState(ACCOUNT_CHECK)

  const stepMetadata = STEPS[step]

  return (
    <div tw='relative h-screen'>
      <Header />
      <div tw='p-4 text-center mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16'>
        <Text text={STEPS[step]?.text} />
        <div tw='w-full px-4 py-8'>
          <stepMetadata.component
            selected={selected}
            setSelected={setSelected}
          />
          <Button
            variant='primary'
            md
            tw='w-full md:max-w-xs'
            onClick={() => setSelectedStep(stepMetadata.to)}
          >
            Next
          </Button>
        </div>
      </div>

      <Path />
    </div>
  )
}

const Text = ({ text = [] }) => (
  <div tw='max-w-2xl px-8 font-sans text-2xl font-normal leading-none tracking-tight text-gray-900 lg:text-4xl md:mx-auto'>
    {text.map(line => (
      <>
        {line} <br />
      </>
    ))}
    <br />
  </div>
)
const Path = () => (
  <div tw='absolute inset-x-0 bottom-0'>
    <svg
      viewBox='0 0 224 12'
      fill='currentColor'
      tw='w-full -mb-1 text-teal-accent-700'
      preserveAspectRatio='none'
    >
      <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
    </svg>
  </div>
)

export default Onboarding
