"use client"
import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import Link from 'next/link';

const About_hero = (props) => {
    return (
        <section className='border'>
            {/* background img */}
            <div className="relative ">
                <img className='w-full h-[500px] ' src="/about/ab3_bg.jpg" alt="background" />

            </div>
            {/* container about hero */}
            <div className="container mx-auto left-1/2 -translate-1/2 absolute top-[188px] ">
                {/* head text */}
                <div className=" flex justify-between text-[#f0f5f4] ">
                    <p>Welcome to Bithlo for you analysis</p>
                    <div className="flex items-center gap-2">
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center ' ><GrFacebookOption /></p>
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center ' ><FaPinterestP /></p>
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center ' ><RiTwitterFill /></p>
                        <p className='border w-[30px] h-[30px] rounded-full flex justify-center items-center ' ><TbWorld /></p>
                        <p className='text-2xl'><IoIosCall /> </p>
                        <small> Start your project +00 888 27 240</small>
                    </div>
                </div>
                {/* navbar */}

                <nav className=' flex items-center justify-between mt-2 '>
                    <img className='' src="/home/web_logo.png" alt="logo" />

                    <ul className='flex items-center justify-between  w-[70%] rounded-full pl-5 bg-[#094477] text-white '>
                        <li><Link href={'/'} > Home </Link> </li>
                        <li><Link href={'/about'} > Company </Link> </li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li className='text-2xl '><IoMdSearch /></li>
                        <li className='border bg-white text-black py-3 px-5 rounded-full'>
                            <button>Get in Touch</button>
                        </li>
                    </ul>
                </nav>

                {/*  Page title  */}
                <div className="text-center flex flex-col justify-center items-center text-white mt-44 ">
                    <h2 className='font-bold text-3xl'>{props.title} </h2>
                    <div className=" flex justify-between  items-center  bg-blue-900 rounded-full  mt-6 w-[20%] ">
                        <Link href={'/'} >
                        <p className='px-8 border-r bg-[#090c68] py-2 rounded-l-full text-red-500 '>  Home </p>
                        </Link>
                        <p className='px-4'>{props.pageName} </p>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default About_hero
