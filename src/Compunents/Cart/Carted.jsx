"use clinte"
import { Felipa } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const felipap  = Felipa({
    subsets:['latin'],
    weight:['400', ]

})


const Carted = () => {
    return (
        <section className=' bg-[#E5F4ED]  '>
                <div className="bg-[#050b7b]">
                    <div className=" container mx-auto py-5">
                        <nav className=' flex items-center justify-between mt-2 '>
                            <img className='' src="/home/web_logo.png" alt="logo" />

                            <ul className='flex items-center justify-between  w-[70%] rounded-full pl-5 bg-[#094477] text-white '>
                                <li><Link href={'/'} > Home </Link> </li>
                                <li><Link href={'/about'} > Fashion </Link> </li>
                                <li>Services</li>

                                <li>Blog</li>
                                <li>Contact</li>
                                <li className='text-2xl '><IoMdSearch /></li>
                                <li className='border bg-white text-black py-3 px-5 rounded-full'>
                                    <button>Get in Touch</button>
                                </li>
                            </ul>
                        </nav>

                    </div>

                </div>
            <div className="container mx-auto">
                <div className=" border flex justify-between items-center  ">

                    <div className="w-[45%] ">
                        <h2 className='flex justify-center text-4xl font-bold text-red-500 '>Cart_Page 🔰</h2>

                        <div className="flex justify-center py-10">
                            <h2 className='font-bold text-2xl border py-2 px-4 '>Home</h2>
                            <h2 className='font-bold text-2xl border py-2 px-4 '>Cart_Pageg</h2>
                        </div>

                    </div>

                    <div className="w-[45%] ">
                        <img className='w-[400px]  ' src="/cart/model.png" alt="" />
                    </div>

                </div>

                {/*  shopping itmes place */}
                <div className="flex justify-between pb-10 ">
                    {/* left */}
                    <div className="w-[68%] border ">
                        <h4 className={`${felipap.className}  pb-5 font-bold text-5xl bg-[#F56540] py-4 text-white px-4 `} > Shopping cart</h4>

                        <p className='font-bold mt-2'>Shopping cart</p>
                        <p>You have 3 items in your cart</p>
                        
                        {/* items */}
                        <div className=" mt-8 pb-10 ">
                            {/* item-1 */}
                            <div className="flex border-t pt-2  mt-2">
                                <div className="flex items-center w-[49%] gap-4 ">
                                    <img className='w-[100px] border  ' src="/cart/model.png" alt="" />
                                    <p className='font-bold'>Title</p>
                                </div>

                                <div className="flex justify-between items-center w-[50%] ">
                                    <div className="flex items-center gap-2">
                                        <p className='text-xl'>1</p>
                                        <div className="">
                                            <p className='cursor-pointer hover:text-[#F56540] '><IoMdArrowDropup /></p>
                                            <p className='cursor-pointer hover:text-[#F56540] '><IoMdArrowDropdown /></p>
                                        </div>
                                    </div>

                                    <p>$Price</p>

                                    <p className='text-xl cursor-pointer hover:text-[#F56540] '><RiDeleteBin6Line /></p>
                                </div>
                            </div>

                             {/* item-2 */}
                            <div className="flex border-t pt-2  mt-2">

                                <div className="flex items-center w-[49%] gap-4 ">
                                    <img className='w-[100px] border  ' src="/cart/model.png" alt="" />
                                    <p className='font-bold'>Title</p>
                                </div>

                                <div className="flex justify-between items-center w-[50%] ">
                                    <div className="flex items-center gap-2">
                                        <p className='text-xl'>1</p>
                                        <div className="">
                                            <p><IoMdArrowDropup /></p>
                                            <p><IoMdArrowDropdown /></p>
                                        </div>
                                    </div>

                                    <p>$Price</p>

                                    <p className='text-xl '><RiDeleteBin6Line /></p>
                                </div>
                           
                            </div>


                             {/* item-3 */}

                            <div className="flex border-t pt-2  mt-2">
                                <div className="flex items-center w-[49%] gap-4 ">
                                    <img className='w-[100px] border  ' src="/cart/model.png" alt="" />
                                    <p className='font-bold'>Title</p>
                                </div>

                                <div className="flex justify-between items-center w-[50%] ">
                                    <div className="flex items-center gap-2">
                                        <p className='text-xl'>1</p>
                                        <div className="">
                                            <p><IoMdArrowDropup /></p>
                                            <p><IoMdArrowDropdown /></p>
                                        </div>
                                    </div>

                                    <p>$Price</p>

                                    <p className='text-xl '><RiDeleteBin6Line /></p>
                                </div>
                            </div>


                            <div className="flex justify-between  py-4 px-10 mt-8 ">
                                <button className='font-bold border rounded-full py-2 px-8 text-2xl bg-[#F56540] text-white '>Update cart </button>
                                <button className='font-bold border rounded-full py-2 px-8 text-2xl flex items-center ' > <IoIosArrowRoundBack /> Continue shopping </button>
                            </div>


                        </div>
                    </div>
                    <div className="w-[30%] border ">
                        card details
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Carted
