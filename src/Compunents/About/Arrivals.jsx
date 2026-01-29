import React from 'react'

const Arrivals = () => {
    return (
        <section className='container mx-auto py-10 '>
            <div className="flex gap-3 items-center ">
                <h3 className='font-bold text-2xl '>New Arrivals</h3>
                <p className='text-[#9B9B9B] '>Best Seller</p>
                <p className='text-[#9B9B9B] '>Sale</p>

            </div>

            <div className="flex justify-between mt-5">
                <div className="w-[23%]  text-center font-bold  ">
                    <img className='rounded-xl' src="about/benner/fashion (1).png" alt="man" />
                    <h6 className='mt-4'>Zone Sweatshirt</h6>
                    <p>$19.95 – $159.95</p>
                </div>

                <div className="w-[23%]  text-center font-bold  ">
                    <img className='rounded-xl' src="about/benner/fashion (2).png" alt="man" />
                    <h6 className='mt-4'>Zone Sweatshirt</h6>
                    <p>$19.95 – $159.95</p>
                </div>

                <div className="w-[23%]  text-center font-bold  ">
                    <img className='rounded-xl' src="about/benner/fashion (3).png" alt="man" />
                    <h6 className='mt-4'>Zone Sweatshirt</h6>
                    <p>$19.95 – $159.95</p>
                </div>

                <div className="w-[23%]  text-center font-bold  ">
                    <img className='rounded-xl' src="about/benner/fashion (4).png" alt="man" />
                    <h6 className='mt-4'>Zone Sweatshirt</h6>
                    <p>$19.95 – $159.95</p>
                </div>

               
            </div>

        </section>
    )
}

export default Arrivals
