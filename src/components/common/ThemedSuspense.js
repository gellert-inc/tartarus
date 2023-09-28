import React from 'react'
import 'twin.macro'
import 'styled-components/macro'

export default function ThemedSuspense () {
  return (
    <div tw='w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900'>
      Loading...
    </div>
  )
}
