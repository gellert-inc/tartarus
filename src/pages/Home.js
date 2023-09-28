import React from 'react'
import 'twin.macro'
import 'styled-components/macro'

import {
  Hero,
  HowItWorks,
  Discover,
  Contribute,
  Track,
  Mission
} from '../components/home'
import { Footer } from '../components/layout'

const Home = () => (
  <>
    <Hero />
    <HowItWorks />
    <Discover />
    <Contribute />
    <Track />
    <Mission />
    <Footer />
  </>
)

export default Home
