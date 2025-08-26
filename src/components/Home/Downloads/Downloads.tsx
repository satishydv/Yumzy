import Image from 'next/image'
import React from 'react'
import { FaApple, FaPlaystation } from 'react-icons/fa'

const Downloads = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
          <Image src="/images/app.png" alt="app" width={500} height={500} className='w-full h-auto'/>
          {/* Text section */}
          <div className='flex flex-col gap-6'>
            <h1 className='font-bold leading-8 text-xl sm:text-2xl sm:leading-12'>Connecting our user with iOS & Android apps. Download from iTune & Play store</h1>
            <p className='text-gray-800 dark:text-gray-400 mt-6 text-sm sm:text-base leading-6 sm:leading-8'>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.</p>
            {/* Download buttons */}
            <div className='sm:flex sm:space-y-0 space-y-3 mt-8 space-x-4'>
                          <a href="#"
                          className='flex items-center justify-between group border border-gray-400 px-4 py-4 rounded-md'>
                            <FaApple className='text-xl font-black' />
                            <div className='ml-3'>
                              <p className='text-xs'>Download on the</p>
                              <p className='text-sm'>App store</p>
                            </div>
                          </a>
                           <a href="#"
                          className='flex items-center justify-between group border border-gray-400 bg-gray-950 text-white px-4 py-4 rounded-md'>
                            <FaPlaystation className='text-xl font-black' />
                            <div className='ml-3'>
                              <p className='text-xs'>Download on the</p>
                              <p className='text-sm'>Play store</p>
                            </div>
                          </a>
                      </div>
          </div>

        </div>

    </div>
  )
}

export default Downloads