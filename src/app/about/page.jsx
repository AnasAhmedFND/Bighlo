import About_hero from '@/Compunents/About/About_hero'
import Banner from '@/Compunents/About/Banner'
import Categories from '@/Compunents/About/Categories'
import React from 'react'

const page = () => {
  return (
    <>
       <About_hero pageName="About Company" title="About Company" /> 
       <Categories/>
       <Banner />
      
    </>
  )
}

export default page
