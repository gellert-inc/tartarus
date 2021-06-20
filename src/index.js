import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import GlobalStyles from './styles/GlobalStyles'

import App from './App'
import reportWebVitals from './reportWebVitals'

import ThemedSuspense from './components/ThemedSuspense'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<ThemedSuspense />}>
      <GlobalStyles />
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
