import React from 'react'

const categories = [
    {name: 'mexican'},
    {name: 'italian'},
    {name: 'chinese'},
    {name: 'indian'},
    {name: 'thai'}, 
    {name: 'american'},
    {name: 'japanese'},
    {name: 'mediterranean'},
    {name: 'french'},
    {name: 'breakfast'},
    {name: 'seafood'},
    {name: 'bbq'},
    {name: 'vegetarian'},
    {name: 'vegan'},
    {name: 'desserts'},
    {name: 'bakeries'},
    {name: 'coffee'}
]

const Category = () => {
  return (
   <div className="min-h-screen w-full bg-white relative">
 {/* White Sphere Grid Background */}
 <div
   className="absolute inset-0 z-0"
   style={{
     background: "white",
     backgroundImage: `
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     `,
     backgroundSize: "32px 32px, 32px 32px, 100% 100%",
   }}
 />
    {/* Your Content/Components */}
    <div className='pt-16 pb-16 absolute'>
        {/* Section Heading */}
        <div className='mx-auto text-center font-bold text-xl md:text-3xl mb-16'>
            Popular categories by food
        </div>
        {/* Category section */}
        <div className='w-[80%] md:w-[80%] mx-auto items-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {
                categories.map((category,index) => (
                    <div key={index} className='rounded-full p-4 bg-gray-300 hover:bg-orange-300 sm:px-9 md:px-19 py-2.5 mb-6'>
                        <h1 className='sm:text-sm md:text-lg font-semibold capitalize'>
                            {category.name}</h1>
                    </div>
                ))
            }
        </div>

    </div>
</div>
  )
}

export default Category