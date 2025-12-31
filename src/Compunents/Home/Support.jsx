import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Support = () => {
  return (
    <>
        <section className='py-10  ' style={{backgroundImage:"url('/home/bgai.png') ",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            
         <div className="flex  justify-between">
        <div className=" text-white w-[35%]  ml-[590px] flex flex-col justify-center">
            <p className='font-bold' >CLIENT FAQ’S</p>
            <div className="flex  justify-between items-center">
            <h4 className='text-2xl font-bold '>Questions and answers for <br /> common ML queries</h4>
            <button className='border rounded-2xl bg-blue-500 text-white px-5 py-2 text-[14px] h-[40px] '>More Answer</button>

            </div>
            <div className="border bg-white text-black rounded-2xl px-4 mt-14 pb-5 ">
            <p className='text-[12px] flex justify-between py-2 rounded-full px-4 bg-blue-500 text-white mt-2'>  <small>    What is the difference between a Data Scientist, Data Analyst?  </small><RxCross2 className='cursor-pointer' /></p>
            <p className='text-[10px] mt-4 ' ><small> These cases are perfectly simple and easy to distinguish. In a free hour, when our power choice is <br />
            untrammelled and when nothing prevents our being able do what we like best, every pleasure is to <br />
            be welcomed and every pain avoided. </small></p>

            </div>


            <div className="flex border py-2 justify-between px-2 bg-white text-black rounded-full pl-6 mt-2">
                <p className=''> <small>Why focus on Data Science? </small> </p>
                <p className='border rounded-full bg-blue-500 w-[30px] h-[30px] flex items-center justify-center  text-white font-bold '><FiPlusCircle /></p>
            </div>

            <div className="flex border py-2 justify-between px-2 bg-white text-black rounded-full mt-2 pl-6">
                <p><small>Can i have multiple activities in single feature? </small> </p>
                <p className='border rounded-full bg-blue-500 w-[30px] h-[30px] flex items-center justify-center  text-white font-bold '><FiPlusCircle /></p>
            </div>

             <div className="flex border py-2 justify-between px-2 bg-white text-black rounded-full mt-2 pl-6">
                <p><small> Can i have multiple activities in single feature? </small></p>
                <p className='border rounded-full bg-blue-500 w-[30px] h-[30px] flex items-center justify-center  text-white font-bold '><FiPlusCircle /></p>
            </div>

            <div className="flex items-center mt-5 gap-10 ">
                <p className='text-4xl font-bold border w-[50px] h-[50px] rounded-full bg-blue-500 flex items-center justify-center '><FaPlayCircle /></p>
                <h3 className='font-bold text-black text-2xl'>PRODUCT MAINTENACE <br /> AND SUPPORT</h3>

            </div>

        </div>
         <div className="">
                <img className='flex justify-end h-[600px]' src="/home/side.png" alt="background" />
            </div>

        </div>  

      </section>
    </>
  )
}

export default Support
