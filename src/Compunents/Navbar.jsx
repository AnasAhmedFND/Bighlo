"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {

  const [show, setShow] = useState(false);
  const [quarry, setQuarry] = useState('');

  const heandleSearch = (e) => {
    e.preventDefault();
    if (!quarry) return;

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(quarry)}`,
      "_blank"
    )
  }

  const searchItem = () => {
    setShow(!show)
  }

  return (
    <section className='container mx-auto relative top-5 '>
      
        <nav className='flex justify-between items-center ' >
          <img src="/home/web_logo.png" alt="logo" />
          <div className="container mx-auto flex justify-between items-center border w-[70%] rounded-2xl bg-[#03103D]   ">
            <ul className='flex gap-16 py-2 px-5 text-white   '>
                <li><Link href={'/'}>Home</Link> </li>
                <li><Link href={'/about'} > Shop..</Link> </li>
                <li>Services</li>
                <li>Works</li>
                <li>Blog</li>
            </ul>
            <form onSubmit={heandleSearch} className='flex justify-between items-center gap-2' action="">
            {show && (

              <input value={quarry} onChange={(e) => setQuarry(e.target.value)} className='border border-white rounded-xl  text-white px-2 ' type="search" placeholder='Search..' />
            )

            
            }
            <p onClick={searchItem} className='text-white w-[40px] h-[40px] border bg-[#0087FF] flex justify-center items-center text-2xl rounded-full cursor-pointer '><IoMdSearch /></p>

            </form>

          </div>
        </nav>
    </section>
  )
}

export default Navbar
