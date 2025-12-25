import React from 'react'

const Team = () => {
  return (
    <>
    <section className=' container mx-auto  mt-10 py-10'>        
      <p className='text-red-500  '><small> TEAM MEMBERS </small></p>
      <h3 className='text-2xl font-bold '>Our best team person</h3>
      {/* mother div team */}
      <div className=' flex justify-between mt-5'>
        {/* team-1 */}
        <div className=''>
          <img src="/home/teme1 (1).png" alt="man" />
          <p className='font-bold '>Cameron Williamson</p>
          <p><small>Founder & CEO </small> </p>
        </div>
        {/* two */}
        <div className="">
          <img src="/home/teme1 (2).png" alt="man" />
          <p className='font-bold '>Jacob Jones</p>
          <p><small>Product Manager </small> </p>

        </div>
        {/* three */}
        <div className="">
          <img src="/home/teme1 (3).png" alt="man" />
          <p className='font-bold '>Esther Howards</p>
          <p><small>Marketing Head </small> </p>

        </div>
        {/* four */}
        <div className="">
          <img src="/home/teme1 (4).png" alt="man" />
          <p className='font-bold '>Robert Fox</p>
          <p><small>Team Head </small> </p>

        </div>


      </div>
        
    </section>
      
    </>
  )
}

export default Team
