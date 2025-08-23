import Image from 'next/image';
import React from 'react'
type Props = {
    src: string;
    alt: string;
    heading: string;
    text: string;
}

const RestaurantCard = ({src,alt,heading,text}: Props) => {
  return (
    
        <div  className='border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                        <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={400}
                        className='w-full h-full object-cover rounded-t-lg'/>
                        <div className='p-4 text-center'>
                            <h2 className='text-lg font-semibold mb-2'>{heading}</h2>
                            <p className='text-gray-600'>{text}</p>
                        </div>
                    </div>
    
  )
}

export default RestaurantCard