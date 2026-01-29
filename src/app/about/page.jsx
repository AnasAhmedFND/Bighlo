import About_hero from '@/Compunents/About/About_hero'
import Arrivals from '@/Compunents/About/Arrivals'
import Banner from '@/Compunents/About/Banner'
import Categories from '@/Compunents/About/Categories'
import React from 'react'

const page = () => {
  return (
    <>
       <About_hero pageName="About Company" title="About Company" /> 
       <Categories/>
       <Banner />
       <Arrivals />
      
    </>
  )
}

export default page
