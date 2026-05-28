"use client"
import { Felipa } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteItems, dicriment, increment } from '@/app/Redux/cartSlice';

const felipap = Felipa({
    subsets: ['latin'],
    weight: ['400',]

})

const Carted = () => {

    // addToCarts every items..............................................
    const cartData = useSelector((state) => state.cartItemSlice.cartItems );
    // console.log(buyData);

    // increment Plus..........................................................

    let dispatch = useDispatch() 

    let handleIncrementProduct =  (item) => { 
        dispatch(increment(item))
        
    };

    // dicriment Muinus..........................................................
    let handleDicrement = (item) => {
        dispatch(dicriment(item))
    }


    // Delete Product.......................................................
    let handleDeleteProduct = (item) => {
        dispatch(deleteItems(item))
    }


    // Clier Cart all items...................................................
    let handleCartAll = () => {
        dispatch(clearCart())
    }

    // Total price use reduce....................................................
    const totalPrice = cartData.reduce((total, item) => {
        return total + item.price * item.qty ;
    }, 0)
    



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
                <div className="  flex justify-between items-center  ">

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
                        <p>You have_ <span className='font-bold text-xl'> {cartData.length} </span> items in your cart</p>

                        {/* items-All */}
                        <div className=" mt-8 pb-10 ">
                           {cartData.map((item)=> (
                                <div className="flex border-t pt-2  mt-2">
                                    <div className="flex items-center w-[49%] gap-4 ">
                                        <img className='w-[100px] border  ' src={item.thumbnail} alt="" />
                                        <p className='font-bold'>{item.title}</p>
                                    </div>

                                    <div className="flex justify-between items-center w-[50%] ">
                                        <div className="flex items-center gap-2">
                                            <p className='text-xl'>{item.qty}</p>
                                            <div className="">
                                                <p onClick={() => handleIncrementProduct(index) } className='cursor-pointer hover:text-[#F56540] '><IoMdArrowDropup /></p>
                                                <p onClick={() => handleDicrement (index) } className='cursor-pointer hover:text-[#F56540] '><IoMdArrowDropdown /></p>
                                            </div>
                                        </div>

                                        <p>$ {item.price} </p>

                                        <p onClick={() => handleDeleteProduct(item) } className='text-xl cursor-pointer hover:text-[#F56540] '><RiDeleteBin6Line /></p>
                                    </div>
                                </div>

                           ))}
                          

                        </div>



                        {/* Bottm Buttons */}
                        <div className="flex justify-between  py-4 px-10 mt-8 ">
                            <button onClick={ handleCartAll } className='font-bold border rounded-full py-2 px-8 text-2xl bg-[#F56540] text-white cursor-pointer '>Update cart </button>
                            <Link href={'/about'} >
                            <button className='font-bold border rounded-full py-2 px-8 text-2xl flex items-center cursor-pointer ' > <IoIosArrowRoundBack /> Continue shopping </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right div//////////////// */}

                    <div className="w-[30%] border text-white " style={{ backgroundImage: "url('/cart/bg-cart.png')", }} >
                        <div className="z-20 px-4 text-center pt-5 bg-[#101141c6] h-full  ">

                            <h3 className='text-4xl text-center font-bold mt-5 '>PAYMENT INFO</h3>
                            <h5 className='font-semibold text-3xl mt-5 '>Discunt / Promo Code</h5>

                            <div className="flex border  rounded-full justify-between items-center mt-8 font-bold ">
                                <p className='pl-4'>Coupn code</p>
                                <button className='border px-10 bg-blue-500 rounded-full py-4 '>Apply</button>
                            </div>

                            <h3 className='mt-10 text-4xl'>Cart totals</h3>
                            <div className="flex gap-10 font-bold mt-14 border-b-2 pb-5">
                                <div className="text-end ">
                                    <p>Subtotal</p>
                                    <p className='mt-4'>Total</p>
                                </div>

                                <div className="">
                                    <p>$ {totalPrice.toFixed(2)+2 } </p>
                                    <p className='mt-4'>$ {totalPrice.toFixed(2)} </p>
                                </div>

                                <h6>Total Quantity : {cartData.length} </h6>

                            </div>



                            <div className="flex gap-4 mt-5">
                                <p>Shipment :</p>

                                <p> Pickup (Store Location): $2</p>


                            </div>


                        </div>



                    </div>
                </div>

            </div>
        </section>
    )
}

export default Carted
