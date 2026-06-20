"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Frequently = () => {

    const [tofic, setTofic] = useState(false);
    const [toficc, setToficc] = useState(false);
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);





    return (
        <section className='container mx-auto md:py-10  pb-5 md:px-0 px-2  '>
            <h2 className='text-center font-bold text-2xl '>Frequently Asked Questions</h2>
            <p className='text-center mt-2'> <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et <br />
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </small> </p>

            <div className=" md:flex md:flex-row md:justify-between md:mt-14 flex flex-col-reverse ">
                
                {/* left-div */}
                <div className=" md:w-[50%]">
                    {/* one */}
                    <div className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] ">
                        <h4 className='flex items-center justify-between font-bold'>What access do I have on the free plan?</h4>
                        <small>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                                tempor incididunt.</p>

                        </small>
                    </div>
                    {/* two */}
                    <div onClick={() => setShows(!shows)} className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] ">
                        <h4 className='flex items-center justify-between font-bold'>What access do I have on a free trial?   <IoIosArrowDown /></h4>
                    </div>

                    { shows && (

                        <div className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%]">
                            <p>On the free plan, you get access to our core AI features with some limitations.</p>

                            <h6 className='font-bold'>✔ Limited AI queries per day</h6>
                            <h6 className='font-bold'>✔ Access to basic AI models</h6>
                            <h6 className='font-bold'>✔ Community support</h6>
                            <h6 className='font-bold'>✖ No advanced customization</h6>

                           <p> This plan is perfect for individuals who want to explore our AI platform.</p>

                        </div>
                    )
                    }

                    {/* three */}
                    <div onClick={() => setShow(!show)} className="border py-4 px-2 rounded-xl mt-4 bg-[#F7F5FD] w-[95%] ">
                        <h4 className='flex items-center justify-between font-bold'>Does the price go up as my team gets larger? <IoIosArrowDown /></h4>
                    </div>

                    {show && (
                        <div className="border py-4 px-2 rounded-xl mt-1 bg-[#F7F5FD] w-[95%] ">
                            <p>The free trial gives you temporary access to premium features.</p><br />
                            <h6 className='font-bold'>✔ Full access to advanced AI models</h6>
                            <h6 className='font-bold'>✔ Higher request limits</h6>
                            <h6 className='font-bold'>✔ Priority response speed</h6>

                            <p>The trial lasts for 7 days and no credit card is required.</p>

                        </div>
                    )}


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
                <div className="  md:w-[50%] ">
                    <img className='md:w-[80%] ' src="/home/faq.png" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Frequently
