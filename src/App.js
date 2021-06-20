import React, { lazy } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))

function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
