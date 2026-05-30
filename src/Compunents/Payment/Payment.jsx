import React from 'react'
import { MdLocalConvenienceStore } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Payment = () => {
  return (
    <section>
        {/* left_ div..................................... */}
        <div className="">
        {/* 1. Contact Information....................//////////////////// */}
          <div className="">
            <h5>1.Contact Information</h5>
            <div className="flex">
                <input type="text" placeholder='First name..' />
                <input type="text" placeholder='Last name..' />
            </div>
            {/* Phone & E-mail .......................................*/}
            <div className="flex">
              <div className="">
                <p>PHONE</p>
                <input type="number" placeholder='Phone number..' />

              </div>

              <div className="">
                <p>E-MAIL</p>
                <input type="email" placeholder='Enter your e-mail..' />
              </div>
              
            </div>

          </div>

          {/* 2. Delivery method .............//////////////////////////// */}
          <div className="">
            <h4>2. Delivery method</h4>
            <div className="flex">
              <p className='flex items-center gap-5 '><MdLocalConvenienceStore /> Store</p>
              <p className='flex items-center gap-5 '><TbTruckDelivery /> Delivery</p>
            </div>

            <div className="flex">
              <div className="">
                <p>DELIVERY DATE</p>
                <input type="date"  />
              </div>
              <div className="">
                <p>CONVENIENT TIME</p>
                <input type="time"  />
              </div>
            </div>
            {/* city & address.................................... */}
            <div className="flex">
              <div className="">
                <p>CITY</p>
                <input type="city"  />
              </div>

              <div className="">
                <p>ADDRESS</p>
                <input type="address" />
              </div>

              <div className="">
                <p>ZIP CODE</p>
                <input type="number" />
              </div>


            </div>

            <h4>3.Payment method</h4>
            <div className="">
              
            </div>



          </div>
            
        </div>


    </section>
  )
}

export default Payment
