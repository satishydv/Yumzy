"use client";
import Logo from '@/components/Helper/Logo'
import ThemeToggle from '@/components/Helper/ThemeToggle';
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {

  const [navBg, setNavBg] = useState(false);

useEffect(() => {
  const handler = () => {
    if (window.scrollY > 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener('scroll', handler);
  return () => {
    window.removeEventListener('scroll', handler);
  };
}, []);

  return (
    <div className={`${navBg ?'bg-white dark:bg-gray-900 shadow-md':'fixed'} h-[12vh] z-100 fixed w-full transition-all duration-200`}>
      <div className='flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto'>
        <Logo/>
        {/* NAVLINKS */}
        <div className='hidden md:flex items-center space-x-6'>
        {
          navLinks.map((link) => {
            return (
              <Link
              href={link.url}
              key={link.id}
              className='text-gray-800 hover:text-orange-500 dark:text-white font-semibold transition-all duration-200'
              >
              {link.label}
              </Link>
            )
          })
        }
        </div>
        {/* Button */}
        <div className='flex items-center space-x-4'>
          <button className='bg-blue-950 px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer'>
          Join Now
          </button>
          {/* Theme */}
          <ThemeToggle/>
          {/* Burger Menu */}
          <HiBars3BottomRight
          onClick={openNav}
          className='w-8 h-8 cursor-pointer text-blue-950 md:hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default Nav