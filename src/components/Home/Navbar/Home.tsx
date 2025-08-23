import React from 'react'
import Hero from '../Hero'
import Restaurant from '../Restaurant/Restaurant'
import Category from '../Category/Category'
import HowItWork from '../HowItWork/HowItWork'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Restaurant/>
      <Category/>
      <HowItWork/>
    </div>
  )
}

export default Home