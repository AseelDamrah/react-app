import React, { useState } from 'react'
import './style.css'


export default function Quantity() {
  let [quantity,setQuantity]=useState(1);

  function incFun(){
    setQuantity(quantity+1);
  }
  function decFun(){
    setQuantity(quantity-1);
  }
  return (
    <>
    <div className='quantity'>
    <h6>Quantity</h6>
    <button className='plus' onClick={incFun}>+</button>
    <span className='qua-num'>{quantity}</span>
    <button className='sub' onClick={decFun}>-</button>
    <button className='quantity-btn'>Add to cart</button>
    <span className='quantity-qes'>?</span><span className='Add'>Add to wishlist</span>
    
    </div>
    </>
  )
}
