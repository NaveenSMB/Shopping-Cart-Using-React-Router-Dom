import { useState } from 'react'
import React from 'react'
import { Product } from "./Product"
import "./Home.css"
import data from '../assets/products.json'

export const Home = ({cart,setCart}) => {
  const [products] = useState(data);
  return (
    <>
        <div className='product-container'>
            {products.map((product)=>(
                <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
            ))}
        </div>
    </>
    
  )
}
