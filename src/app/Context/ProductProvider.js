"use client"
import React, {  createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [product, setProduct] = useState([]);

    useEffect (() => {
        const lodeContext = async () => {
            const res = await fetch("https://dummyjson.com/products?limit=0");
            const data = await res.json();
            setProduct(data.products);
        };

        lodeContext();

    } , []);

  return (
    
    <ProductContext.Provider value={{product}}>
        {children}
    </ProductContext.Provider>


  )
}

export default ProductProvider
