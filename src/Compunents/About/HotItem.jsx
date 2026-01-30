"use client"
import { ProductContext } from '@/app/Context/ProductProvider';
import React, { useContext } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";




const HotItem = () => {
    const { product } = useContext(ProductContext);
    const filterd = product.filter((item) => item.id <= 1);
    return (
        <section className='container mx-auto py-10 border '>
            <div className=" flex justify-between  items-center ">
                <h2 className='font-bold text-2xl '>Hot under $39</h2>
                <button className='font-bold border py-2 px-5 rounded-3xl flex gap-2 items-center '>View All<FaLongArrowAltRight /> </button>
            </div>

            <div className="flex justify-between mt-5 ">

                <div className="border rounded-t-2xl w-[23%] text-center ">
                    <img className='rounded-2xl' src="/about/benner/fashion (1).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                    {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='for-Rifa' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>

                <div className="border rounded-t-xl w-[23%] text-center ">
                    <img src="/about/benner/fashion (2).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                     {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='for-Rifa' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>

                <div className="border rounded-t-xl  w-[23%] text-center ">
                    <img src="/about/benner/fashion (3).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                    {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='for-Rifa' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>

                <div className="border rounded-t-xl w-[23%] text-center ">
                    <img src="/about/benner/fashion (4).png " alt="man" />
                    <h6 className='font-bold mt-4'>Zone Sweatshirt</h6>
                     {
                        filterd.map((item) => (
                            <p> ${item.price} - <span className='line-through text-red-500'>$23.56 </span> </p>

                        ))
                    }
                    <button title='for-Rifa' className='font-bold text-center py-2 bg-green-400 text-white w-full mt-2 cursor-pointer flex justify-center items-center gap-3'>Buy Now <RiShoppingCartLine className='font-bold text-2xl' /></button>
                </div>


            </div>
        </section>
    )
}

export default HotItem
