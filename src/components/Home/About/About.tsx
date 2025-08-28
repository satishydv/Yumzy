import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                {/* Image section */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center"
                 className='mx-auto'>
                    <Image src="/images/a.png" alt="About Us" width={800} height={800}/>
        </div>
        {/* Text section */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading:12'>
            We deliver our products as fast as we can to our customers
          </h1>
          <p className='mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base'>
            Our commitment to fast delivery ensures that you receive your products promptly, allowing you to enjoy them without unnecessary delays. We prioritize efficien.
          </p>
          <div className='mt-8 '>
           <div className='flex mt-8 items-center space-x-6'>
            <p className='text-3xl md:text-5xl opacity-40 font-bold'>01</p>
            <div>
                <h2 className='text-base sm:text-lg font-extrabold'>Fast Delivery</h2>
                <p className='text-sm sm:text-base text-gray-800 dark:text-gray-300 font-medium mt-2 leading-6 sm:leading-8'>We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.</p>
               </div> 
           </div>
          </div>

          <div className='mt-8 '>
           <div className='flex mt-8 items-center space-x-6'>
            <p className='text-3xl md:text-5xl opacity-40 font-bold'>02</p>
            <div>
                <h2 className='text-base sm:text-lg font-extrabold'>Deliver Food within 30 min</h2>
                <p className='text-sm sm:text-base text-gray-800 dark:text-gray-300 font-medium mt-2 leading-6 sm:leading-8'>We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.</p>
               </div> 
           </div>
          </div>

          <div className='mt-8 '>
           <div className='flex mt-8 items-center space-x-6'>
            <p className='text-3xl md:text-5xl opacity-40 font-bold'>03</p>
            <div>
                <h2 className='text-base sm:text-lg font-extrabold'>Deliver Food within 30 min</h2>
                <p className='text-sm sm:text-base text-gray-800 dark:text-gray-300 font-medium mt-2 leading-6 sm:leading-8'>We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.</p>
               </div> 
           </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About