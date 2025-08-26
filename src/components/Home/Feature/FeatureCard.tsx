import Image from 'next/image';
import React from 'react'

type Props = {
    title: string;
    description: string;
    icon: string;
}

const FeatureCard = ({icon, title, description}: Props) => {
  return (
    <div>
        <Image src={icon} alt={title} width={100} height={100} className='mx-auto object-contain'/>
        <h1 className='mt-8 text-lg font-bold text-center'>{title}</h1>
        <p className='mt-8 text-center font-base text-gray-700 dark:text-gray-300'>{description}</p>
    </div>
  )
}

export default FeatureCard