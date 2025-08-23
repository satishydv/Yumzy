import Image from 'next/image'
import React from 'react'
type Props = {
    img: string,
    number: string,
    title: string,
    desc: string
}

const HowItWorkCard = ({img, number, title, desc} : Props) => {
  return (
    <div>
        {/* image and num */}
        <div className='relative'>
        <Image
        src={img}
        alt='work'
        width={250}
        height={250}
        className='object-contain mx-auto'
        />
        <div className='absolute top-0 left-0 bg-orange-500 text-white font-bold px-4 py-2 rounded-br-lg rounded-tl-lg'>
            {number}
        </div>
        <h1 className='text-center dark:text-white mt-4 text-3xl sm:text-xl font-extrabold'>
            {title}
        </h1>
        <p className='font-base text-center'>{desc}</p>
        <p className='mt-4 text-center mx-auto text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600'>
            Start Order &rarr;
        </p>

        </div>
        
    </div>
  )
}

export default HowItWorkCard