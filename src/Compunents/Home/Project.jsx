import { Jost } from 'next/font/google'
import React from 'react'
const jonst = Jost({
    subsets:['latin'],
    weight:["500", "700"]
})
const Project = () => {
    return (
        <div className='bg-[#F5F5F5] md:px-0 px-2   '>
        <section className='container mx-auto text-center  py-10 '>
            <p className='text-blue-400 '>CASE STUDIES</p>
            <h3 className={`${jonst.className} font-bold mt-2 text-3xl `}>Our successful project</h3>
            {/* cards */}
            <div className="md:flex md:gap-5 mt-10 justify-center">
                {/* one */}
                <article className=' md:w-[25%]   relative '>
                    <img className='' src="/home/pro1 (1).png" alt="project" />

                    <div className="h-[200px] px-2 shadow-2xl rounded-b-lg ">
                        <img className='absolute md:top-[315px] top-[355px] left-1/2 -translate-1/2 ' src="/home/pro1 (4).png" alt="" />
                        <h6 className='pt-10 font-bold'>Artificial Intelligence</h6>
                        <p className='mt-2'>Lorem ipsum amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt labore et
                            dolore magna aliqua.</p>

                            <a href="https://ai.csrhub.blog/?gad_source=1&gad_campaignid=23160988984&gbraid=0AAAAAqLvV6Gl5EXRLfCAMTIhR7o_6CwVr&gclid=CjwKCAiAvaLLBhBFEiwAYCNTf4zmq9gSyzTqqKOp7c__YoMkpUFJg-QjHbrmRfV6XbMHmUrR7C9NPRoCsA4QAvD_BwE">
                            <button className='border px-5 py-2 bg-linear-60 from-[#03103D] to-[#0D8DFF] text-white rounded-full mt-4 relative top-[16px] cursor-pointer '>Read More</button>
                            </a>
                    </div>
                </article>

                 {/* two */}
                <article className=' md:w-[25%] md:mt-0 mt-6  relative'>
                    <img src="/home/pro1 (2).png" alt="project" />

                     <div className="h-[200px] px-2 shadow-2xl rounded-b-lg ">
                        <img className='absolute md:top-[315px] top-[355px] left-1/2 -translate-1/2 ' src="/home/pro1 (4).png" alt="" />
                        <h6 className='pt-10 font-bold'>Rebot Technology View</h6>
                        <p className='mt-2'>Lorem ipsum amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt labore et
                            dolore magna aliqua.</p>
                            
                            <a href="https://ai.csrhub.blog/?gad_source=1&gad_campaignid=23160988984&gbraid=0AAAAAqLvV6Gl5EXRLfCAMTIhR7o_6CwVr&gclid=CjwKCAiAvaLLBhBFEiwAYCNTf4zmq9gSyzTqqKOp7c__YoMkpUFJg-QjHbrmRfV6XbMHmUrR7C9NPRoCsA4QAvD_BwE">
                            <button className='border px-5 py-2 bg-linear-60 from-[#03103D] to-[#0D8DFF] text-white rounded-full mt-4 relative top-[16px] cursor-pointer '>Read More</button>
                            </a>
                    </div>
                </article>

                 {/* three */}
                <article className=' md:w-[25%] md:mt-0 mt-6  relative'>
                    <img src="/home/pro1 (3).png" alt="project" />

                    <div className="h-[200px] px-2 shadow-2xl rounded-b-lg ">
                        <img className='absolute md:top-[315px] top-[355px] left-1/2 -translate-1/2 ' src="/home/pro1 (4).png" alt="" />
                        <h6 className='pt-10 font-bold'>Data Scientest Code</h6>
                        <p className='mt-2'>Lorem ipsum amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt labore et
                            dolore magna aliqua.</p>
                            <a href="https://ai.csrhub.blog/?gad_source=1&gad_campaignid=23160988984&gbraid=0AAAAAqLvV6Gl5EXRLfCAMTIhR7o_6CwVr&gclid=CjwKCAiAvaLLBhBFEiwAYCNTf4zmq9gSyzTqqKOp7c__YoMkpUFJg-QjHbrmRfV6XbMHmUrR7C9NPRoCsA4QAvD_BwE">
                            <button className='border px-5 py-2 bg-linear-60 from-[#03103D] to-[#0D8DFF] text-white rounded-full mt-4 relative top-[16px] cursor-pointer '>Read More</button>
                            </a>
                    </div>
                </article>
            </div>

        </section>

        </div>
    )
}

export default Project
