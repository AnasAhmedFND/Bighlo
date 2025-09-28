"use client"
import Link from 'next/link'
import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <section className='container mx-auto relative top-5 '>
      
        <nav className='flex justify-between items-center ' >
          <img src="/home/web_logo.png" alt="logo" />
          <div className="container mx-auto flex justify-between items-center border w-[70%] rounded-2xl bg-[#03103D]   ">
            <ul className='flex gap-16 py-2 px-5 text-white   '>
                <li><Link href={'/'}>Home</Link> </li>
                <li><Link href={'/about'} > Company</Link> </li>
                <li>Services</li>
                <li>Works</li>
                <li>Blog</li>
            </ul>
            <p className='text-white w-[40px] h-[40px] border bg-[#0087FF] flex justify-center items-center text-2xl rounded-full '><IoMdSearch /></p>

          </div>
        </nav>
    </section>
  )
}

export default Navbar
