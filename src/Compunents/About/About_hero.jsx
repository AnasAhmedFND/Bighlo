"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import Link from 'next/link';
import { Macondo } from 'next/font/google';
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const macondo = Macondo({
    subsets: ['latin'],
    weight: ['400']

})
const About_hero = (props) => {
     const cartItemNumber = useSelector((state) => state.cartItemSlice.cartItems );
    
    

    return (
        <section className=''>
            {/* background img */}
            <div className="relative  ">
                <img className='w-full h-[500px] ' src="/about/ab3_bg.jpg" alt="background" />

            </div>
            {/* container about hero........................................... */}

            <div className="container mx-auto left-1/2 -translate-1/2 absolute top-[188px]  mt-8 md:px-0 px-2 ">
                {/* head text & icons .................................................. */}
                <div className=" flex justify-between text-[#f0f5f4] ">
                    <div className="flex gap-3 items-center ">
                        <p>Welcome to Bithlo for you analysis</p>
                        {/* cart lenth icon........................................  */}
                        <Link href={'/cart'}>
                            <div className="relative cursor-pointer  ">
                                <p className='border-2 font-bold p-1 rounded-full '><RiShoppingCartLine /></p>
                                <p className='border w-[20px] h-[20px] rounded-full bg-red-500 text-white absolute top-[1px] -right-[12px] flex justify-center items-center font-bold '> {cartItemNumber.length } </p>
                            </div>
                        </Link>
                        {/* Heart lenth icon.......................................................... */}
                        <div className="relative">
                            <p className='border-2 font-bold p-1 rounded-full  ml-3 '><FaRegHeart /></p>
                            <p className='border w-[20px] h-[20px] rounded-full bg-red-500 text-white absolute top-[1px] -right-[12px] flex justify-center items-center font-bold '>1</p>
                        </div>

                    </div>
                    <div className="hidden md:block ">
                    <div className="flex items-center gap-2    ">
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ' ><GrFacebookOption /></p>
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ' ><FaPinterestP /></p>
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ' ><RiTwitterFill /></p>
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ' ><TbWorld /></p>
                        <p title='+880 12345678' className='text-2xl cursor-pointer'><IoIosCall /> </p>
                        <small> Start your project +00 888 27 240</small>
                    </div>

                    </div>
                </div>
                {/* navbar */}

                <nav className=' flex items-center justify-between mt-2 '>
                    <img className='md:block hidden ' src="/home/web_logo.png" alt="logo" />

                    <ul className='flex items-center justify-between  w-[70%] rounded-full pl-5 bg-[#094477] text-white '>
                        <li><Link href={'/'} > Home </Link> </li>
                        <li><Link href={'/about'} > Fashion </Link> </li>
                        
                        <li>Blog</li>
                        
                        <li className='text-2xl '><IoMdSearch /></li>
                        <li className='border bg-white text-black py-3 px-5 rounded-full md:block hidden '>
                            <button>Get in Touch</button>
                        </li>
                    </ul>
                </nav>

                {/*  Page title  */}
                <div className="text-center flex  justify-center items-center text-white mt-4 ">
                    {/* Left */}

                    <div className="md:w-[40%]  md:h-[320px]  md:border-r-4  flex flex-col items-center  ">
                        <img className='border rounded-full' src="/about/link.png" alt="t-shart" />

                        <h2 className='font-bold text-3xl'>{props.title} </h2>
                        <div className=" flex justify-between  items-center  bg-blue-900 rounded-full  mt-6  border ">
                            <Link href={'/'} >
                                <p className='px-8 border-r bg-[#090c68] py-2 rounded-l-full text-red-500 '>  Home </p>
                            </Link>
                            <p className='px-4 '>{props.pageName} </p>
                        </div>

                    </div>
                    {/* Right */}
                    <div className="w-[55%] md:block hidden  ">
                    <div className=" flex justify-end   h-[320px] text-white items-center ">
                        <div className="">
                            <h2 className={`${macondo.className} text-4xl font-bold text-[#dff304] `}>RIFANAS FASHION </h2>
                            <h2 className='text-3xl font-bold'>Let's configure you own <br />
                                print product</h2>
                            <p className='mt-2'>The easiest way to get your print as you want</p>
                            <button className='border bg-[#7CD5AA] px-5 py-2 rounded-full text-white mt-2'>Print Your Own</button>

                        </div>
                        <img className='w-[300px] h-[300px] ' src="/about/hero/t-shart.png" alt="mans" />


                    </div>

                    </div>
                </div>


            </div>

        </section>
    )
}

export default About_hero
