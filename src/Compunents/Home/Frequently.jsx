"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Frequently = () => {

    const [tofic, setTofic] = useState(false);
    const [toficc, setToficc] = useState(false);
    const [tofic2, setTofic2] = useState(false);
    const [tofic3, setTofic3] = useState(false);





    return (
        <section className='container mx-auto  '>
            <h2 className='text-center font-bold text-2xl '>Frequently Asked Questions</h2>
            <p className='text-center mt-2'> <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et <br />
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </small> </p>

            <div className=" flex justify-between mt-14 ">
                {/* left-div */}
                <div className=" w-[50%]">
                    {/* one */}
                    <div className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] ">
                        <h4 className='flex items-center justify-between font-bold'>What access do I have on the free plan?</h4>
                        <small>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                                tempor incididunt.</p>

                        </small>
                    </div>
                    {/* two */}
                    <div className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] ">
                        <h4 className='flex items-center justify-between font-bold'>What access do I have on a free trial?   <IoIosArrowDown /></h4>
                    </div>
                    {/* three */}
                    <div className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] ">
                        <h4 className='flex items-center justify-between font-bold'>Does the price go up as my team gets larger? <IoIosArrowDown /></h4>
                    </div>

                    <div onClick={() => setToficc(!toficc)} className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] flex items-center justify-between ">
                        <h4 className=' font-bold'>How can I cancel my subscription?  </h4>
                        <p ><IoIosArrowDown /></p>
                    </div>
                    {toficc && (
                        <div className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%]">
                             <p>
                                You can cancel your subscription at any time.</p> <br />
                            <h6 className='font-bold '>✔ No long-term contracts</h6>
                            <br />
                            <h6 className='font-bold '>✔ Cancel directly from your account settings </h6>
                            <br />
                            <h6 className='font-bold '>✔ Access remains active until the billing cycle ends</h6>
                            <br />

                            <p> Need help? Our support team is always available. </p>


                        </div>
                    )
                    }

                    <div onClick={() => setTofic(!tofic)} className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] flex items-center justify-between ">
                        <h4 className=' font-bold'>Can I pay via an Invoice?  </h4>
                        <p>
                            <IoIosArrowDown />
                        </p>


                    </div>
                    {tofic && (

                        <div className="border py-4 px-2 rounded-xl mt-1 bg-[#F7F5FD] w-[95%] z-20 ">
                            <p>
                                You can cancel your subscription at any time.</p> <br />
                            <h6 className='font-bold '>✔ No long-term contracts</h6>
                            <br />
                            <h6 className='font-bold '>✔ Cancel directly from your account settings </h6>
                            <br />
                            <h6 className='font-bold '>✔ Access remains active until the billing cycle ends</h6>
                            <br />

                            <p> Need help? Our support team is always available. </p>


                        </div>

                    )}
                </div>

                {/* Right */}
                <div className="  w-[50%] ">
                    <img className='w-[80%] ' src="/home/faq.png" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Frequently
