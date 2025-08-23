import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'

const Logo = () => {
  return (
    <div className='flex items-center space-x-2'>
        <div className='w-10 h-10 bg-blue-950 dark:bg-white rounded-full flex items-center justify-center'>
            <MdDeliveryDining className='w-7 h-7 text-white dark:text-black'/>
        </div>
        <h1 className='text-xl hidden sm:block md:text-2xl font-semibold text-black dark:text-white'>
            Yumzy
        </h1>
    </div>
  )
}

export default Logo