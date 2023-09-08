import React from 'react'
import 'twin.macro'

import { Hero } from '../components/Hero'
import Footer from '../components/layout/Footer'
import {
  HowItWorks,
  Discover,
  Contribute,
  Track,
  Mission
} from '../components/sections'

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
