import React from 'react'
import Link from 'next/link'
import { MdLocalConvenienceStore } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { Caveat, Kablammo } from 'next/font/google';
const kablammo = Kablammo({
  subsets: [ 'latin'],
  weight: [ '400' ]
})
 const caveat = Caveat({
  subsets:['latin'],
  weight:["400", "500"]

})

const Payment = () => {
  return (
    <section className='container mx-auto   py-10 px-5   '>

      <div className="shadow-2xl py-10 px-5 flex">
      {/* left div.....................//////////////////////////// */}
      <div className="border-r-2 w-[60%] ">
        <h2 className='font-bold text-2xl flex items-center gap-4' > <Link href={'/cart'} > <FaArrowLeft /></Link>  Checkout</h2>

        {/* 1. Contact Information....................//////////////////// */}
        <div className="mt-8">
          <h5 className='font-bold '>1.Contact Information</h5>

          <div className="flex gap-5 mt-5">
            <div className="">
              <p className='text-[#7e8c8cec] '>FIRST NAME</p>
              <input className='border rounded-lg px-2' type="text" placeholder='First name..' />
            </div>
            <div className="">
              <p className='text-[#7e8c8cec] ' >LAST NAME</p>
              <input className='border rounded-lg px-2 ' type="text" placeholder='Last name..' />
            </div>

          </div>
          {/* Phone & E-mail .......................................*/}
          <div className="flex mt-5 gap-5">
            <div className="">
              <p className='text-[#7e8c8cec] '>PHONE</p>
              <input className='border rounded-lg mt-2 px-2 ' type="number" placeholder='xxxxx...xxxx' />

            </div>

            <div className="">
              <p className='text-[#7e8c8cec] '>E-MAIL</p>
              <input className='border rounded-lg mt-2 px-2 ' type="email" placeholder='Enter your e-mail..' />
            </div>

          </div>

        </div>

        {/* 2. Delivery method .............//////////////////////////// */}
        <div className="">
          <h4 className='font-bold mt-8'>2. Delivery method</h4>

          <div className="flex mt-5 gap-5">
            <p className='flex items-center gap-5 border rounded-lg py-2 px-4 bg-[#dbe1e256] '><span className='font-bold text-4xl '><MdLocalConvenienceStore /> </span>  Store</p>
            <p className='flex items-center gap-5  border-4 rounded-lg py-2 px-4  '> <span className='font-bold text-4xl text-blue-500 '><TbTruckDelivery /> </span>  Delivery</p>

          </div>

          <div className="flex mt-5 gap-5">
            <div className="">
              <p className='text-[#7e8c8cec] '>DELIVERY DATE</p>
              <input className='mt-2 border rounded-lg px-2 w-[250px]  ' type="date" />
            </div>
            <div className="">
              <p className='text-[#7e8c8cec] '>CONVENIENT TIME</p>
              <input className='mt-2 border rounded-lg px-2 w-[250px]  ' type="time" />
            </div>
          </div>
          {/* city & address.................................... */}
          <div className="flex mt-8 gap-4">
            <div className="">
              <p className='text-[#7e8c8cec] '>CITY</p>
              <input className='border mt-2 rounded-lg w-[200px] ' type="city" />
            </div>

            <div className="">
              <p className='text-[#7e8c8cec] '>ADDRESS</p>
              <input className='border mt-2 rounded-lg w-[200px] ' type="address" />
            </div>

            <div className="">
              <p className='text-[#7e8c8cec] '>ZIP CODE</p>
              <input className='border mt-2 rounded-lg w-[200px] ' type="number" />
            </div>


          </div>

        </div>

        {/* Payment method .........................//////////////////...*/}
        <h4 className='font-bold mt-8'>3.Payment method</h4>

        <div className="flex gap-5">
          <img className=' border rounded-lg w-[120px] h-[60px]  py-2 px-4 hover:border-2 cursor-pointer ' src="/Payment/mastercard.png" alt="payment_logo" />
          <img className=' border rounded-lg w-[120px] h-[60px]  py-2 px-4 hover:border-2 cursor-pointer ' src="/Payment/visa.png" alt="payment_logo" />
          <img className=' border rounded-lg w-[120px] h-[60px]  py-2 px-4 hover:border-2 cursor-pointer ' src="/Payment/bkash.png" alt="payment_logo" />
          <img className=' border rounded-lg w-[120px] h-[60px]  py-2 px-4 hover:border-2 cursor-pointer ' src="/Payment/rocket.png" alt="payment_logo" />
          <img className=' border rounded-lg w-[120px] h-[60px]  py-2 px-4 hover:border-2 cursor-pointer ' src="/Payment/upay.png" alt="payment_logo" />

        </div>

      </div>

      {/* Right div,...................................//////////// */}
      <div className="w-[40%] pl-2  ">
        <div className="flex relative border-b ">
        <img className=' w-full ' src="/cart/model.png" alt="person" />
        <h4 className={`${kablammo.className} font-bold text-4xl absolute bottom-[50px] left-0`} >WELCOME to <br />  <span className={`${caveat.className} `} >RIFANAS </span>  <br /> FASHONE </h4>
        
        </div>
        <img src="/payment/Heading 2.png" alt="" />
        
      </div>

      </div>





    </section>
  )
}

export default Payment
