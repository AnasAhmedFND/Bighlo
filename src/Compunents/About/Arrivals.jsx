"use client"

import { ProductContext } from '@/app/Context/ProductProvider';
import { addToCart } from '@/app/Redux/cartSlice';


import { Playpen_Sans } from 'next/font/google';
import React, { useContext, useState } from 'react'
import { RiMenuFold2Fill } from "react-icons/ri";
import { RiMenuFoldFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';



const playpen = Playpen_Sans({
    subsets: ["latin"],
    weight: ['400', "500", "700"]
})
const Arrivals = () => {

    const { product } = useContext(ProductContext);
   
    console.log(product.length);
    

    // show items with icons click
    const [show, setShow] = useState(false);
    const showCategoryItems = () => {
        setShow(!show);

    }
   

    const uniqueCategories = [
        ...new Set(product.map((item) => item.category))
    ];

    // category show ui

    const [shwoCategory, setShowCategory] = useState(null);
    const handleCategory = ((category) => {
        setShowCategory(category);
    });

    const filterProduct = shwoCategory ? product.filter((item) => item.category === shwoCategory) : product;


    // add to cart product/////////////////////////////////////////////////
    let dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, qty: 1 }))
    }




    return (
        <section className='container mx-auto py-10 md:px-0 px-2 '>
            <div className="flex gap-3 items-center ">
                <h3 className='font-bold text-2xl '>New Arrivals</h3>
                <p className='text-[#9B9B9B] '>Best Seller</p>
                <p className='text-[#9B9B9B] '>Sale</p>
                {/* show Category Items ........................///////////////////////*/}
                <p title='Show-Category' onClick={showCategoryItems} className='font-bold text-2xl cursor-pointer '> {show ? <RiMenuFoldFill /> : <RiMenuFold2Fill />}  </p>

            </div>
            {show && (
                <div className="snap-y  flex flex-wrap gap-2 p-4 ">
                    {
                        uniqueCategories.map((category) => (
                            <div key={category} className=" ">
                                <small onClick={() => handleCategory(category)} className={` ${playpen.className} border py-1 px-2 rounded-lg bg-[#F5F5F5] text-[#f5f] hover:bg-[#0bf0e0] hover:text-white cursor-pointer `}  >{category}</small>
                            </div>
                        ))
                    }

                </div>

            )}

            <div className="flex justify-between mt-5 overflow-x-auto">
                {filterProduct.slice(0, 4).map((item) => (
                    <div key={item.id} className="w-[23%]  text-center font-bold border-t  rounded-2xl overflow-x-auto ">

                        <img className='rounded-xl' src={item.thumbnail} alt={item.title} />
                        <h6 className='mt-4'>{item.title}</h6>
                        <p>${item.price}</p>
                        <p>id:{item.id} </p>
                        <button onClick={() => handleAddToCart(item)} className='mt-2 bg-green-400 text-white font-bold text-xl w-full py-2 cursor-pointer '>Add To Cart</button>
                    </div>

                ))}

            </div>

        </section>
    )
}

export default Arrivals
