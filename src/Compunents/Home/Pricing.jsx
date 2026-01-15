import { Jost } from 'next/font/google';
import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const josts = Jost({
    subsets:['latin'],
    weight:['500', '700']
})

const Pricing = () => {
    return (
        <section className='container mx-auto  py-10 '>
            <h6 className={`${josts.className} text-center text-[#19198a] `} >PRICING PLAN</h6>
            <h2 className={`${josts.className} text-center font-bold text-4xl `} >Our affordable priing plans</h2>

            <div className=" mt-10 flex justify-between ">
                {/* Left-div  */}
                <div className=" w-[20%] flex-col justify-between ">
                    <div className=" rounded-2xl shadow-2xl border-4 border-[#2255] text-center p-4 mt-2 h-[150px] hover:bg-blue-500 flex flex-col justify-center items-center hover:text-white group  ">
                        <p className='text-blue-500 group-hover:text-white font-bold '>STARTER PLAN</p>
                        <h2 className={`${josts.className} font-bold text-3xl `} >$49.66</h2>
                    </div>

                    <div className=" rounded-2xl shadow-2xl border-4 border-[#2255] text-center p-4 mt-2 h-[150px] hover:bg-blue-500 flex flex-col justify-center items-center hover:text-white group ">
                        <p className='text-blue-500 group-hover:text-white font-bold '>BASIC PLAN</p>
                        <h2 className={`${josts.className} font-bold text-3xl `}>$69.66</h2>
                    </div>

                    <div className=" rounded-2xl shadow-2xl border-4 border-[#2255] text-center p-4 mt-2 h-[150px] hover:bg-blue-500 flex flex-col justify-center items-center hover:text-white group ">
                        <p className='text-blue-500 group-hover:text-white font-bold '>ADVANCED PLAN</p>
                        <h2 className={`${josts.className} font-bold text-3xl `}>$99.66</h2>
                    </div>
                </div>

                {/* Right-div */}

                <div className="border-4  border-[#2255] rounded-2xl flex justify-between p-5 w-[78%] ">
                    {/* Right-1 */}
                    <div className="border-r-4 w-[48%] ">
                        <h3 className= {`${josts.className} font-bold text-2xl text-[#03103D] `} >What’s Included in Plan:</h3>
                        <p className='flex items-center gap-3 mt-10'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Market sizing and share analysis</p>
                        <p className='flex items-center gap-3 mt-4'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Product value proposition analysis</p>
                        <p className='flex items-center gap-3 mt-4'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Identify strategic partnership</p>
                        <p className='flex items-center gap-3 mt-4'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Implementation milestone review</p>
                        <p className='flex items-center gap-3 mt-4'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Innovation opportunities</p>
                        <p className='flex items-center gap-3 mt-4'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Product value proposition analysis</p>
                        <p className='flex items-center gap-3 mt-4'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Distribution channel opportunities</p>
                        <p className='flex items-center gap-3 mt-4'> <IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' />
                            Market sizing & analysis</p>
                    </div>
                    {/* Right-2 */}
                    <div className=" w-1/2 ">
                        <h2 className={`${josts.className} font-bold text-2xl text-[#03103D] `} >Our Business Approach:</h2>

                        <p className='mt-10'>Our experts follow the business strategy to grow up <br />
                            your business and engage more customers to your <br />
                            door.</p>

                        <p className='mt-8 gap-2 flex  items-center'><IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' /> Getting to know your business vision its key <br />
                            strategic drivers.</p>
                        <p className='mt-4 gap-2 flex  items-center'><IoIosCheckmarkCircleOutline className='text-blue-500 text-2xl  ' /> Getting to know your business vision its key <br />
                            strategic drivers.</p>

                            <button className='border text-white bg-linear-60 from-[#0808bd] to-[#030933fb]  px-8 py-4 text-center rounded-full font-bold mt-5 '>Purchase Now</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Pricing
