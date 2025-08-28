"use client"
import React, { useEffect } from 'react'
import Hero from '../Hero'
import Restaurant from '../Restaurant/Restaurant'
import Category from '../Category/Category'
import HowItWork from '../HowItWork/HowItWork'
import About from '../About/About'
import Feature from '../Feature/Feature'
import ClientReview from '../ClientReview/ClientReview'
import Downloads from '../Downloads/Downloads'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease', // Animation easing
          anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
          once: true, // Whether animation should happen only once - while scrolling down
        });
      };
      initAOS();
  }, []);
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