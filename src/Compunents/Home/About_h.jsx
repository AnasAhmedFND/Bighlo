import { Jost } from 'next/font/google'
import React from 'react'

const jost = Jost({
    subsets:["latin"],
    weight:["500", "700"]
})

const About_h = () => {
    return (
        <section className=' container mx-auto pt-20'>
            {/* container */}
            <div className="flex justify-between pb-5">
                <div className=" w-[48%] ">
                    <img src="/home/h-about.png" alt="robot" />
                </div>

                {/* right */}
                <div className=" w-[48%] ">
                    <p className='mt-14 text-blue-400 '>ABOUT COMPANY</p>
                    
                    <h3 className={`${jost.className} font-bold text-2xl mt-2 `}>Mission is to bring force of <br />
                        simulated intelligence to business</h3>

                    <p className='mt-10'>To take a trivial example, which of us ever undertakes laborious physical <br />
                        exercise, except to obtain some advantage from it but right to find fault <br />
                        with a man who chooses enjoy.for your business work.</p>

                    <p className='mt-5'>To take a trivial example, which of us ever undertakes laborious physical <br />
                        exercise, except to obtain some advantage from it but right to find fault <br />
                        with a man who chooses enjoy.for your business work.</p>
                    
                    <button className='border px-5 py-2 bg-linear-60 from-[#03103D] to-[#0D8DFF] text-white rounded-full mt-5 '>More About</button>

                </div>
            </div>

            {/* tocan items */}
            <div className="flex w-[60%] mx-auto border-t py-5 justify-between ">
                <div className="flex items-center gap-2">
                    <h4 className='font-bold text-4xl '>2.5k </h4>
                    <p>Completed <br /> Work</p>
                </div>

                <div className="flex items-center gap-2">
                    <h4 className='font-bold text-4xl '>1.7k </h4>
                    <p>Business <br /> Covered</p>
                </div>

                <div className="flex items-center gap-2">
                    <h4 className='font-bold text-4xl '>375 </h4>
                    <p>Expert <br /> Scientists</p>
                </div>

                <div className="flex items-center gap-2">
                    <h4 className='font-bold text-4xl '>3.5m </h4>
                    <p>Happy <br /> Customers</p>
                </div>
            </div>
        </section>
    )
}

export default About_h
