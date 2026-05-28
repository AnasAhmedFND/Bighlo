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

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      const filtered = data.products.filter((item) => item.category === "beauty")
      setProducts(filtered);
    };

    loadProducts();
  }, []);

  // const find =data.products.filter((item) => item.id <= 10 )
  // console.log(find)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  // Add  to cart...............................................
  let dispatch = useDispatch()

  let handleAddToCart = (product) => {
    dispatch(addToCart({...product, qty: 1}))
  }

  return (
    <section className='container  mx-auto border py-10'>
      <h3 className='font-bold text-2xl '>Shopping by Categories </h3>
      {/* main_div_items's */}
      <div className="  mt-4 ">

        <div className="slider-container  ">
          <Slider {...settings}>

            {products.map((item, index) => (
              <div className="flex px-4 justify-between ">
                <div className="border p-2 pb-4  rounded-t-xl w-[80%] bg-[#F5F5F5] relative  ">
                  <img className=' ' src={item.thumbnail} alt={item.title} />
                  <div className="absolute top-5 left-5 flex flex-col gap-4 ">
                    <p onClick={() => handleAddToCart(item) } className='font-bold text-2xl cursor-pointer ' title='Add To Cart'  ><FaShopify /></p>
                    <p className='font-bold text-2xl cursor-pointer '  ><BiSolidLike /></p>

                  </div>
                  <div className="flex justify-between px-4 py-2 border-t-2 ">
                    <p>ID: {item.id} </p>
                    <h2 className='font-bold'>{item.title} </h2>

                  </div>
                  <div className="border p-2 rounded-2xl flex justify-between items-center ">
                    <p className='flex items-center'><span className='font-bold text-red-500 text-2xl '>$ </span> - {item.price} </p>
                    <p ><span className='font-bold text-xl text-red-500 line-through'> 50%Off </span> <small> (For-Rifa) </small> </p>
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
