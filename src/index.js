import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import GlobalStyles from './styles/GlobalStyles'

import App from './App'

import ThemedSuspense from './components/common/ThemedSuspense'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
        <Suspense fallback={<ThemedSuspense />}>
    <GlobalStyles />
    <App />
    </Suspense>
  </React.StrictMode>,
);