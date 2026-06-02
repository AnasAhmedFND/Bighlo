"use client"
import { ProductContext } from '@/app/Context/ProductProvider';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


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

  const cartNumber = useSelector((state) => state.cartItemSlice.cartItems)

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <section className='container mx-auto relative md:top-5 '>

      <div  className="md:hidden border bg-blue-500 py-2 px-2 font-bold text-2xl flex items-center justify-between  ">
        <p className='text-xl '>RIFANAS..</p>
         <div className="flex relative ">
              <li className='font-bold md:text-2xl cursor-pointer ' title='Buy_Now'  > <Link href={'/cart'} > <MdOutlineShoppingCart />
              </Link> </li>

              <p className='w-[20px] h-[20px] bg-red-500 flex justify-center items-center text-white border rounded-full absolute t-0 left-4  text-lg' >{cartNumber.length}  </p>

            </div>
            
        <div onClick={handleMenu} className="">                   
        {menu === true ?
          <p><RxCross2 /></p>
          :
          <p><GiHamburgerMenu /></p>
        }

        </div>
      </div>

      <nav className='flex justify-between items-center ' >
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={ProductContext.name} />

        <img className='hidden md:block ' src="/home/web_logo.png" alt="logo" />

        <div className={`container mx-auto md:flex justify-between items-center border md:w-[50%] rounded-2xl bg-[#03103D]  ${menu ? " absolute top-[50px] left-0  bg-black/80 w-full duration-1000 ease-in-out z-40 h-screen  " : "md:static  absolute  -left-[800px] "} `} >
          <ul className='md:flex md:gap-16 lg:gap-10 py-2 px-5 text-white    '>
            <li className='md:border-b-none border-b md:pb-0 pb-2'><Link href={'/'}>Home</Link> </li>
            <li className='md:border-b-none border-b md:pb-0 pb-2'><Link href={'/about'} > Shop..</Link> </li>            
            <li className='md:border-b-none border-b md:pb-0 pb-2'>Blog</li>
            {/* cart length number................../////////////////////// */}
            <div className="hidden md:block ">
            <div className="flex relative   ">
              <li className='font-bold text-2xl cursor-pointer ' title='Buy_Now'  > <Link href={'/cart'} > <MdOutlineShoppingCart />
              </Link> </li>

              <p className='w-[20px] h-[20px] bg-red-500 flex justify-center items-center text-white border rounded-full absolute t-0 left-4 ' >{cartNumber.length}  </p>

            </div>

            </div>

          </ul>

            {/* search place...................../////////////////////////////////// */}

          <form onSubmit={heandleSearch} className='flex  items-center gap-2 md:pl-0 pl-4 ' action="">
            {show && (

              <input value={quarry} onChange={(e) => setQuarry(e.target.value)} className='border border-white rounded-xl md:w-[100px]  text-white px-2 ' type="search" placeholder='Search..' />
            )


            }
            <p onClick={searchItem} className='text-white w-[30px] h-[30px] border bg-[#0087FF] flex justify-center items-center text-2xl rounded-full cursor-pointer '><IoMdSearch /></p>

          </form>

        </div>
      </nav>
    </section>
  )
}

export default Navbar
