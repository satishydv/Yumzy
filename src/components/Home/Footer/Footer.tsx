import React from 'react'
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-800 dark:bg-gray-900'>
        <div className='w-[90%] md:w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
            {/* 1st */}
            <div>
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <MdDeliveryDining className='h-6 w-6 text-black'/>
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Foodie</h1>
                   
                </div>
                 <p className='mt-4 text-gray-200 font-medium'>
            Lorem ipsum dolor sit sunt provident in quo totam esse voluptatum accusantium magni earum impedit maiores quibusdam?
        </p>
        <div className='mt-4 space-x-4 flex items-center'>
            <div className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full bg-blue text-white cursor-pointer hover:bg-gray-600'>
                      <FaFacebook className='h-4 w-4'/>
            </div>
             <div className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full bg-blue text-white cursor-pointer hover:bg-gray-600'>
                      <FaInstagram className='h-4 w-4'/>
            </div>
             <div className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full bg-blue text-white cursor-pointer hover:bg-gray-600'>
                      <FaTwitch className='h-4 w-4'/>
            </div>
            <div className='flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full bg-blue text-white cursor-pointer hover:bg-gray-600'>
                      <FaYoutube className='h-4 w-4'/>
            </div>

        </div>
            </div>
            {/* 2nd part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold text-white'>Company</h1>
                <p className='footer_link'>About us</p>
                <p className='footer_link'>News and Press</p>
                <p className='footer_link'>Our Customers</p>
                <p className='footer_link'>Leadership</p>
                <p className='footer_link'>Carress</p>

            </div>
            {/* 3rd part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold text-white'>Resource</h1>
                <p className='footer_link'>About us</p>
                <p className='footer_link'>News and Press</p>
                <p className='footer_link'>Our Customers</p>
                <p className='footer_link'>Leadership</p>
                <p className='footer_link'>Carress</p>

            </div>
            {/*4th part  */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold text-white'>Contact us</h1>
                <div className='mt-6'>
                   <h1 className='text-lg font-bold text-white'>Our Mobile Number</h1>
                     <p className='text-yellow-300 font-medium'>+123 456 7890</p>
                </div>
                <div className='mt-6'>
                   <h1 className='text-lg font-bold text-white'>Our Email</h1>
                     <p className='text-yellow-300 font-medium'>example@gmail.com
                        </p>
                        </div>

        </div>
        </div>
        {/* Bottom part */}
        <div className='mt-8 w-[80%] md:w-[70%] mx-auto border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm'>
            <p className='text-center text-white md:text-left'>Copyright © 2025 Webdev. All rights reserved</p>
            <div className='flex items-center text-white space-x-4 mt-4 md:mt-0'>
                <span>Social :</span>
                <span className='text-white hover:text-gray-500'><FaFacebook/></span>
                <span className='text-white hover:text-gray-500'><FaTwitter/></span>
                <span className='text-white hover:text-gray-500'><FaInstagram/></span>
                <span className='text-white hover:text-gray-500'><FaYoutube/></span>
            </div>
        </div>
    </div>
    
  )
}

export default Footer