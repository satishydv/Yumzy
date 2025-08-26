import React from 'react'
import FeatureCard from './FeatureCard'

const features = [
    {
        id: 1,
        title: "Easy to Order",
        description: "Our user-friendly website and mobile app make ordering food a breeze. With just a few clicks, you can explore a wide range of restaurants and cuisines, customize your order, and have it delivered to your doorstep.",
        icon: "/images/f1.svg"
    },
    {
        id: 2,
        title: "Fast Delivery",
        description: "We understand the importance of timely delivery when it comes to food. Our dedicated team of delivery drivers ensures that your order arrives quickly and in perfect condition, so you can enjoy your meal without any delays.",
        icon: "/images/f2.svg"
    },
    {
        id: 3,
        title: "Best Quality",
        description: "We prioritize quality in every aspect of our service. From partnering with top-rated restaurants to using fresh ingredients, we strive to provide you with the best dining experience possible. Your satisfaction is our top priority.",
        icon: "/images/f3.svg"
    },
    {
        id: 4,
        title: "24/7 Support",
        description: "Our customer support team is available around the clock to assist you with any questions or concerns you may have. Whether you need help placing an order or have feedback to share, we're here to ensure your experience is smooth and enjoyable.",
        icon: "/images/f4.svg"
    },
    {
        id: 5,
        title: "Live Order Tracking",
        description: "Stay informed about the status of your order with our live tracking feature. From the moment you place your order to its delivery at your doorstep, you can monitor its progress in real-time, giving you peace of mind and anticipation for your meal.",
        icon: "/images/f5.svg"
    },
    {
        id: 6,
        title: "Multiple Payment Options",
        description: "We offer a variety of payment options to suit your preferences. Whether you prefer to pay with credit/debit cards, digital wallets, or cash on delivery, we make it easy and convenient for you to complete your transaction securely.",
        icon: "/images/f6.svg"
    }
]

const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center font-extrabold text-xl sm:text-2xl'>Meet our Quality Features</h1>
        <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
            {features.map((feature) => (
                <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                />
            ))}
        </div>
    </div>
  )
}

export default Feature