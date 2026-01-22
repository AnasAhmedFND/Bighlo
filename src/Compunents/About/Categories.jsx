

import React from 'react'

const Categories = async () => {

  const data = await fetch('https://dummyjson.com/products?&limit=0')
  const  producted = await data.json()
  
  const filtered = producted.products.filter(
  (item) => item.category === "smartphones"
);

  
  return (
    <section className='container  mx-auto border py-10'>
        <h3 className='font-bold text-2xl '>Shopping by Categories </h3>
        {/* main_div_items's */}
        <div className="flex flex-wrap justify-between gap-4  mt-4 ">
          {filtered.map((item, index) =>(
            <div className="border p-2 rounded-t-xl w-[23%] ">
             <img src={item.thumbnail} alt={item.title} />
             <div className="flex justify-between px-4 py-2 ">
              <p>ID: {item.id} </p>
              <h2 className='font-bold'>{item.title} </h2>

             </div>
              <div className="border p-2 rounded-2xl flex justify-between items-center ">
                <p className='flex items-center'><span className='font-bold text-red-500 text-2xl '>$ </span> - {item.price} </p>
                <p ><span className='font-bold text-xl text-red-500 line-through'> 50%Off </span> <small> (For-Rifa) </small> </p>
              </div>

            </div>
            
          ))}

        </div>

     
    </section>
  )
}

export default Categories
