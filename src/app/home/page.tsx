import React from 'react'
import FutureTechnology from './future-technology'
import Hero from './Hero'
import Products from './Products'
import Services from './Services'
import CenteredBoxWithButton from '../common/Box'

export default function Home() {
  return (
    <div>
        <Hero />
        <FutureTechnology />
        <Products />
        <Services />
    </div>
  )
}
