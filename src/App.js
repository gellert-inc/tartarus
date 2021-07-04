import React, { lazy } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Onboarding = lazy(() => import('./pages/Onboarding'))
const Discover = lazy(() => import('./pages/Listings'))
const OrganisationProfile = lazy(() => import('./pages/OrganisationProfile'))

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/org' component={OrganisationProfile} />
          <Route path='/discover' component={Discover} />
          <Route path='/onboarding' component={Onboarding} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
