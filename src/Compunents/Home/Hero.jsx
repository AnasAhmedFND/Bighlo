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
        <section className=' relative md:bottom-[50px] -z-20' >
            <div className="relative">
                <img className='bg-linear-60 from-[#00AAA5] to-[#006F7E] ' src="/hero_bg.png" alt="ai_img" />
            </div>
            {/* container */}
           
            <div className="container md:left-1/2 md:-translate-x-1/2 absolute md:top-[210px] top-5  flex md:justify-normal justify-between items-center md:px-0 px-2  ">
                    {/* left-text */}
                    <div className=" md:w-[70%] md:pl-32   ">
                        <h1 className={`${jost.className} md:text-5xl font-bold text-white  `} >Revolutionizing <br /> Artificial Intelligence <br /> (AI) with Transparency</h1>
                        <p className='text-white md:mt-6 hidden md:block '><small> With the current trends in technology and the growing incorporation of Artificial <br />
                            Intelligence and Machine Learning </small></p>
                        <div className="flex md:gap-8 gap-2 mt-6  ">
                            <button className='border py-2 md:px-5 px-2 rounded-2xl text-black bg-white'>More Details</button>
                            <button className='border py-2 md:px-5 px-2 rounded-2xl text-white bg-[#0087FF]'>Get Started</button>

                        </div>
                    </div>
                    {/* socila icons */}
                    
                    <div className="   md:w-[30%] text-white text-2xl flex flex-col items-baseline-last md:gap-5 gap-1  ">
                        <p className='border md:w-[40px] w-[20px] md:h-[40px] h-[20px] rounded-full flex justify-center items-center ' ><GrFacebookOption /></p>
                        <p className='border md:w-[40px] w-[20px] md:h-[40px] h-[20px] rounded-full flex justify-center items-center ' ><FaPinterestP /></p>
                        <p className='border md:w-[40px] w-[20px] md:h-[40px] h-[20px] rounded-full flex justify-center items-center ' ><RiTwitterFill /></p>
                        <p className='border md:w-[40px] w-[20px] md:h-[40px] h-[20px] rounded-full flex justify-center items-center ' ><TbWorld /></p>

                    </div>

                    

            </div>

            

        </section>
    )
}

export default Hero
