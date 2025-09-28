"use client"
import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Jost } from 'next/font/google';
const jost = Jost({
    subsets:["latin"],
    weight:["100", "200","300","400", "500", "700"]
})
const Hero = () => {
    return (
        <section className=' relative bottom-[50px] -z-20' >
            <div className="relative">
                <img className='bg-linear-60 from-[#00AAA5] to-[#006F7E] ' src="/hero_bg.png" alt="ai_img" />
            </div>
            {/* container */}
           
            <div className="container left-1/2 -translate-x-1/2 absolute top-[210px] flex  items-center   ">
                    {/* left-text */}
                    <div className=" w-[70%] md:pl-32  ">
                        <h1 className={`${jost.className} text-5xl font-bold text-white  `} >Revolutionizing <br /> Artificial Intelligence <br /> (AI) with Transparency</h1>
                        <p className='text-white mt-6'><small> With the current trends in technology and the growing incorporation of Artificial <br />
                            Intelligence and Machine Learning </small></p>
                        <div className="flex gap-8 mt-6 ">
                            <button className='border py-2 px-5 rounded-2xl text-black bg-white'>More Details</button>
                            <button className='border py-2 px-5 rounded-2xl text-white bg-[#0087FF]'>Get Started</button>

                        </div>
                    </div>
                    {/* socila icons */}
                    <div className=" w-[30%] text-white text-2xl flex flex-col items-baseline-last gap-5  ">
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center ' ><GrFacebookOption /></p>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center ' ><FaPinterestP /></p>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center ' ><RiTwitterFill /></p>
                        <p className='border w-[40px] h-[40px] rounded-full flex justify-center items-center ' ><TbWorld /></p>

                    </div>

            </div>

            

        </section>
    )
}

export default Hero
