import React from 'react'
import RestaurantCard from './RestaurantCard'


const cardData = [
    {  id: 1, name: 'Restaurant 1', image: '/images/r1.jpg', text: 'Pizza Hut Delicious Pizza'},
    {  id: 2, name: 'Restaurant 2', image: '/images/r2.jpg', text: 'Burger King Tasty Burger'},
    {  id: 3, name: 'Restaurant 3', image: '/images/r3.jpg', text: 'Subway Fresh Sandwiches'},
    {  id: 4, name: 'Restaurant 4', image: '/images/r4.jpg', text: 'KFC Crispy Chicken'},
    {  id: 5, name: 'Restaurant 5', image: '/images/r5.jpg', text: 'Shake Shack (3060 Fillmore Street)'},
    {  id: 6, name: 'Restaurant 6', image: '/images/r6.jpg', text: 'Chubby Noodle Chinese Takeout'},
];

const Restaurant = () => {
  return (
    <div className='pt-16 pb-16'>
        {/* section heading */}
        <div className='mx-auto text-center text-xl md:text-3xl font-bold mb-6'>
        Available in Restaurant Nearby Area
        </div>
        {/* cards section*/}
        <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                cardData.map((card) => (
                    <RestaurantCard
                    key={card.id}
                    src={card.image}
                     alt={card.name}
                     heading={card.name}
                     text={card.text}
                    />
                ))
            }
        </div>
        {/* Button */}
        <div className='mt-6 mx-auto text-center '>
            <button className='px-9 py-3 bg-blue-900 text-white rounded-full text-base font-bold dark:bg-cyan-300 dark:text-black'>
                    Discover More &rarr;
            </button>
        </div>
    </div>
  )
}

export default Restaurant