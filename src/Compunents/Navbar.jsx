"use client"
import { ProductContext } from '@/app/Context/ProductProvider';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

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

  const cartNumber = useSelector((state) => state.cartItemSlice.cartItems )
  
  


  return (
    <section className='container mx-auto relative top-5 '>
      
        <nav className='flex justify-between items-center ' >
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={ProductContext.name } />
          <img src="/home/web_logo.png" alt="logo" />
          <div className="container mx-auto flex justify-between items-center border w-[70%] rounded-2xl bg-[#03103D]   ">
            <ul className='flex gap-16 py-2 px-5 text-white   '>
                <li><Link href={'/'}>Home</Link> </li>
                <li><Link href={'/about'} > Shop..</Link> </li>
                <li>Services</li>
                <li>Works</li>
                <li>Blog</li>
                <div className="flex relative ">
                <li className='font-bold text-2xl cursor-pointer ' title='Buy_Now'  > <Link href={'/cart'} > <MdOutlineShoppingCart />
                </Link> </li>

                <p className='w-[20px] h-[20px] bg-red-500 flex justify-center items-center text-white border rounded-full absolute t-0 left-4 ' >{cartNumber.length}  </p>

                </div>
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
