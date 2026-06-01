import React from 'react'
import { RxBox } from "react-icons/rx";
import { BiMinus } from "react-icons/bi";
import { Jost } from 'next/font/google';
import { IoMdCheckmark } from "react-icons/io";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"]

})

const Technology = () => {

  return (
    <section className='container mx-auto  md:px-0 px-2 '>
      <div className="md:flex md:justify-center">
        {/* left div */}
        <div className=" md:w-[40%] ">
          <h5 className='text-[#783f78] font-bold '>TECNOLOGY</h5>
          <h3 className={`${jost.className} text-3xl font-bold mt-4  `} >Any enough advanced <br />
            technology is unclear <br />
            from magi </h3>

          <p className='flex items-center gap-2 mt-5'><RxBox className='rotate-45' /> <BiMinus /> <RxBox className='rotate-45' /></p>

          <p className='mt-5'>Must explain to you how all this mistaken idea of pleasure and <br />
            praising pain was born and will give you a complete account of <br />
            the system, and expound the actual teachings.</p>

          <div className="mt-5">
            <p className='flex items-center gap-5 ' ><IoMdCheckmark className='text-red-500' /> Idea of denouncing pleasure & praising </p>
            <p className='flex items-center gap-5 ' ><IoMdCheckmark className='text-red-500' /> Ever undertakes laborious physical </p>
            <p className='flex items-center gap-5 ' ><IoMdCheckmark className='text-red-500' /> Avoids a pain that produces no resultant </p>

          </div>

          <button className=' mt-5 px-5 py-2 rounded-full bg-linear-60 from-[#03103D] to-[#0D8DFF] text-white '>More Servics </button>



        </div>

        {/* Right div */}
        <div className="flex gap-4 md:w-[40%] md:mt-0 mt-2  ">
          {/* card-1 */}
          <div className=" md:w-[40%] h-[310px]  p-2 relative rounded-md  "  >
            <img src="/home/tac1.png" alt="ruboot" />
            <h5 className='font-bold  mt-4 '>Video Vision</h5>
            <p className='mt-4'>Simple easy distinguish when our power right.</p>
            <img className='absolute top-0 right-0 rounded-md  w-full h-[310px] bg-[#EDEDED] -z-20  ' src="/home/figer.png" alt="background" />
          </div>

          {/* card-2 */}
           <div className=" md:w-[40%] h-[310px]  p-2 relative rounded-md  "  >
            <img src="/home/tac2.png" alt="ruboot" />
            <h5 className='font-bold  mt-4 '>Computer Vision</h5>
            <p className='mt-4'>Simple easy distinguish when our power right.</p>
            <img className='absolute top-0 right-0  rounded-md w-full h-[310px] bg-[#EDEDED] -z-20  ' src="/home/figer.png" alt="background" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Technology
