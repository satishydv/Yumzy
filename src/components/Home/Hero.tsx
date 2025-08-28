import Image from 'next/image'
import React from 'react'
import { FaApple, FaLocationArrow, FaPlaystation } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
        <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Text content */}
        <div data-aos="fade-up">

        
        <div className='flex flex-col gap-6'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white sm:leading-[2.5rem] md:leading-[4.5rem]'>
            Your favorite food, {" "} <span className='text-pink-600'>delivered</span> to your home
          </h1>
          <p className='text-gray-600 text-xl md:text-base font-medium'>
              Food, drinks, groceries, and more available for delivery and pickup.
          </p>
          <div className='w-full max-w-md'>
            <div className='bg-gray-200 flex items-center h-14 shadow-md rounded-md'>
              <div className='text-gray-500 px-4'>
                  <GrMapLocation className='w-5 h-5 text-black'/>
              </div>
              <input type="text"
              placeholder='Enter your address'
              className='flex-1 px-2 text-sm text-black h-full'
              />
              <button className='bg-gray-900 dark:bg-gray-600 h-full px-4 flex items-center justify-center rounded-md'>
                  <FaLocationArrow className=' text-white dark:text-black'/>
              </button>
            </div>
          </div>
          <p className='text-gray-400'>Apps available to download</p>
          {/* Buttons */}
          <div className='flex space-x-4'>
              <a href="#"
              className='flex items-center justify-between group border border-gray-400 px-4 py-4 rounded-md'>
                <FaApple className='text-xl font-black' />
                <div className='ml-3'>
                  <p className='text-xs'>Download on the</p>
                  <p className='text-sm'>App store</p>
                </div>
              </a>
               <a href="#"
              className='flex items-center justify-between group border border-gray-400 px-4 py-4 rounded-md'>
                <FaPlaystation className='text-xl font-black' />
                <div className='ml-3'>
                  <p className='text-xs'>Download on the</p>
                  <p className='text-sm'>Play store</p>
                </div>
              </a>
          </div>
        </div>
        </div>
        {/* Image content */}
        <div
        data-aos="fade-left"
        data-aos-delay="150"
        className='mx-auto hidden md:block'>
          <Image 
          src="/images/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          />
        </div>
        </div>
        
    </div>
  )
}

export default Hero