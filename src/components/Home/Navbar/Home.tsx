import React from 'react'
import Hero from '../Hero'
import Restaurant from '../Restaurant/Restaurant'
import Category from '../Category/Category'
import HowItWork from '../HowItWork/HowItWork'
import About from '../About/About'
import Feature from '../Feature/Feature'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Restaurant/>
      <Category/>
      <HowItWork/>
      <About/>
      <Feature/>
    </div>
  )
}

export default Home