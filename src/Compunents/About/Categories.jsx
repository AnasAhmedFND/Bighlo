"use client"
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaShopify } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/Redux/cartSlice';

const Categories = () => {

  const [products, setProducts] = useState([]);

  // console.log(products.length);
  

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=0");
      const data = await res.json();

      setProducts(data.products);
     
    };
    
    loadProducts();
  }, []);

  const filterProduct = products.slice(177, 183);
  
  
  

  

  // const find =data.products.filter((item) => item.id <= 10 )
  // console.log(find)

  const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 5000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  // Add  to cart...............................................
  let dispatch = useDispatch()

  let handleAddToCart = (product) => {
    dispatch(addToCart({...product, qty: 1}))
  }

  return (
    <section className='container  mx-auto  py-10 md:px-0 px-2  '>
      <h3 className='font-bold text-2xl '>Shopping by Categories </h3>
      {/* main_div_items's */}
      <div className="  mt-4 ">

        <div className="slider-container ">
          <Slider {...settings}>

            {filterProduct.map((item, index) => (
              <div key={item.id} className="md:flex  px-4 justify-between  ">
                <div className="border p-2 pb-4  rounded-t-xl w-[80%]  bg-[#F5F5F5] relative  ">
                  <img className=' ' src={item.thumbnail} alt={item.title} />
                  <div className="absolute md:top-5 top-2 md:left-5 left-2 flex flex-col gap-4 ">
                    <p onClick={() => handleAddToCart(item) } className='font-bold text-2xl cursor-pointer ' title='Add To Cart'  > <FaShopify /> </p>
                    <p className='font-bold text-2xl cursor-pointer '  ><BiSolidLike /></p>

                  </div>
                  <div className="flex justify-between px-4 py-2 border-t-2 ">
                    <p>ID: {item.id} </p>
                    
                    <small className='font-bold'>{item.title}</small>

                  </div>
                  <div className="border p-2 rounded-2xl flex justify-between items-center ">
                    <p className='flex items-center'><span className='md:font-bold text-red-500 md:text-2xl '>$ </span> - {item.price} </p>
                    <p ><span className='md:font-bold md:text-xl text-red-500 line-through'> 50%Off </span> <small> (For-Rifa) </small> </p>
                  </div>

                </div>

              </div>


            ))}


          </Slider>
        </div>


      </div>


    </section>
  )
}

export default Categories
