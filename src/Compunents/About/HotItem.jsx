"use client"
import { ProductContext } from '@/app/Context/ProductProvider';
import React, { useContext, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";




const HotItem = () => {
    const { product } = useContext(ProductContext);
    const filterd = product.filter((item) => item.id <= 1);

    const [view, setView] = useState(false)

 

    return (
        <section className='container mx-auto py-10  '>
            <div className=" flex justify-between  items-center ">
                <h2 className='font-bold text-2xl '>Hot under $39</h2>
                <button onClick={()=> setView(!view) } className='font-bold border py-2 px-5 rounded-3xl flex gap-2 items-center cursor-pointer '>View All<FaLongArrowAltRight /> </button>
            </div>
            {view ? (

            <div className="flex justify-between mt-5 ">

                <div className="border rounded-t-2xl w-[23%] text-center ">
                    <img className='rounded-2xl' src="/about/benner/fashion (1).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                    {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>

                <div className="border rounded-t-xl w-[23%] text-center ">
                    <img src="/about/benner/fashion (2).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                    {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>

                <div className="border rounded-t-xl  w-[23%] text-center ">
                    <img src="/about/benner/fashion (3).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                    {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>

                <div className="border rounded-t-xl w-[23%] text-center ">
                    <img src="/about/benner/fashion (4).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                    {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>


            </div>
            )
             
            :
            (
            
            <div className="">
                <div className="flex  justify-between mt-2">
                    {/* left */}
                    <div className=" w-[48%] relative  ">
                        <img className='h-[320px] w-full ' src="/about/benner/Tablist.png" alt="banner" />
                        <div className="absolute top-[80px] pl-8  ">
                            <h6 className='font-bold text-4xl'>10% off your <br />first order 👉➡</h6>
                            <p className='mt-2'>Free and easy way to bring <br />your ideas to life</p>
                            <button className='font-bold mt-4 border rounded-2xl py-2 px-4 bg-[#e2c6e29e] '>Shop Now</button>

                        </div>
                       
                    </div>
                    {/* right */}
                    <div className=" w-[48%] relative ">
                        <img src="/about/benner/tshirt_br.png" alt="banner" />
                        <div className="absolute top-[80px] px-4 ">
                            <h6 className='font-bold text-4xl'>Create your <br /> unique style</h6>
                            <p className='mt-2'>Free and easy way to bring <br />your ideas to life</p>
                            <button className='border mt-4 py-2 px-5 bg-white rounded-2xl cursor-pointer '>Explore More</button>
                        </div>
                    </div>

                </div>

                <div className="flex justify-between mt-5 ">

                    <div className="border rounded-t-2xl w-[23%] text-center ">
                        <img className='rounded-2xl' src="/about/benner/main1 (1).png " alt="man" />
                        <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                        {
                            filterd.map((item) => (
                                <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                            ))
                        }
                        <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                    </div>

                    <div className="border rounded-t-xl w-[23%] text-center ">
                        <img className='w-full' src="/about/benner/main1 (2).png " alt="man" />
                        <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                        {
                            filterd.map((item) => (
                                <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                            ))
                        }
                        <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                    </div>

                    <div className="border rounded-t-xl  w-[23%] text-center ">
                        <img className='w-full' src="/about/benner/main1 (3).png " alt="man" />
                        <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                        {
                            filterd.map((item) => (
                                <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                            ))
                        }
                        <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                    </div>

                    <div className="border rounded-t-xl w-[23%] text-center ">
                        <img className='w-full rounded-t-xl' src="/about/benner/main1 (4).png " alt="man" />
                        <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                        {
                            filterd.map((item) => (
                                <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                            ))
                        }
                        <button title='For-Today' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                    </div>


                </div>

            </div>

            )


            }


        </section>
    )
}

export default HotItem
