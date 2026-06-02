import React from 'react'

const Banner = () => {
  return (
    <section className='container mx-auto py-10 md:px-0 px-2 '>
        <div className="md:flex  justify-between">
            <div className="md:w-[48%] ">
                <img src="/about/benner/banner2.png" alt="banner" />
            </div>

            <div className="md:w-[48%] relative mt-2 md:mt-0 ">
                <img className='md:h-auto h-[300px] ' src="about/benner/banner.png" alt="banner" />
                <div className="absolute top-20 ml-4  ">
                    <h4 className='font-bold text-3xl'>Create your <br /> unique style</h4>
                    <p  className='text-[#7E7E7E]  mt-2 '>Free and easy way to create <br /> your ideas to life</p>
                    <button className='border py-2 px-8 mt-4 bg-[#2EBB77] text-white rounded-2xl font-bold cursor-pointer  '>Shop Now</button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Banner
