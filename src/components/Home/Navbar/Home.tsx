import React from 'react'
import Hero from '../Hero'
import Restaurant from '../Restaurant/Restaurant'
import Category from '../Category/Category'
import HowItWork from '../HowItWork/HowItWork'
import About from '../About/About'
import Feature from '../Feature/Feature'
import ClientReview from '../ClientReview/ClientReview'
import Downloads from '../Downloads/Downloads'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Restaurant/>
      <Category/>
      <HowItWork/>
      <About/>
      <Feature/>
      <ClientReview/>
      <Downloads/>
    </div>
  )
}

export default Home