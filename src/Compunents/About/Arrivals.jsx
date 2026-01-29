"use client"

import { ProductContext } from '@/app/Context/ProductProvider';
import { Playpen_Sans } from 'next/font/google';
import React, { useContext, useState } from 'react'
import { RiMenuFold2Fill  } from "react-icons/ri";
import { RiMenuFoldFill } from "react-icons/ri";

const playpen = Playpen_Sans({
    subsets : ["latin"],
    weight : ['400', "500", "700"]
})  
const Arrivals = () => {

    const {product} = useContext(ProductContext);
    console.log(product)
    // show items with icons click
    const [show, setShow] = useState(false);
    const showTitle = () => {
        setShow(!show);

    }

    // category show ui

    const [shwoCategory, setShowCategory] = useState(null);
    const handleCategory = ((category) => {
        setShowCategory(category);
    });

    const filterProduct = shwoCategory ? product.filter((item) => item.category === shwoCategory) : product;


    return (
        <section className='container mx-auto py-10 '>
            <div className="flex gap-3 items-center ">
                <h3 className='font-bold text-2xl '>New Arrivals</h3>
                <p className='text-[#9B9B9B] '>Best Seller</p>
                <p className='text-[#9B9B9B] '>Sale</p>
                <p title='Show-Category' onClick={showTitle} className='font-bold text-2xl cursor-pointer '> {show ? <RiMenuFoldFill /> : <RiMenuFold2Fill />}  </p>

            </div>
            {show && (
            <div className="snap-y  flex flex-wrap gap-2 p-4 ">
            {
                product.map((item) => (
                    <div className=" ">
                        <small onClick={() => handleCategory(item.category) } className={` ${playpen.className} border py-1 px-2 rounded-lg bg-[#F5F5F5] text-[#f5f] hover:bg-[#0bf0e0] hover:text-white cursor-pointer `} key={item.id} >{item.category}</small>
                    </div>
                ))
            }

            </div>

            ) }

            <div className="flex justify-between mt-5">
                {filterProduct.slice(0, 4).map((item) => (
                <div key={item.id} className="w-[23%]  text-center font-bold  ">
                    <img className='rounded-xl' src={item.thumbnail} alt={item.title} />
                    <h6 className='mt-4'>{item.title}</h6>
                    <p>${item.price}</p>
                </div>

                )) }

            </div>

        </section>
    )
}

export default Arrivals
