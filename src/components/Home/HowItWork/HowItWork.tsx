import React from 'react'
import HowItWorkCard from './HowItWorkCard'

const work = [
    {
        id: 1,
        number: '01',
        title: 'Choose a restaurant',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
        img: '/images/w1.png'
    },
    {
        id: 2,
        number: '02',
        title: 'Choose a meal',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
        img: '/images/w2.png'
    },
    {
        id: 3,
        number: '03',
        title: 'Fast delivery',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
        img: '/images/w3.png'
    }
]

const HowItWork = () => {
  return (
    <div className='pt-16 pb-16 w-[90%] md:w-[80%] mx-auto'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
            </div>
        {/* card */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
            {work.map((item) => (
                <HowItWorkCard key={item.id} img={item.img} number={item.number} title={item.title} desc={item.desc}
                
                />
            ))}
        </div>

    </div>
  )
}

export default HowItWork