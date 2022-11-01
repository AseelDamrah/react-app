import React from 'react'
import './style.css'
import Size from './Size/Size'
import Quantity from './Quantity/Quantity'

export default function ContentModalDesc({contentModel}) {
let {title,price,description,stock,brand,category}=contentModel;

  return (
    <>
    <div className='ContentModalDesc'>
    <h3>{title}</h3>
    <div className='price-star'>
    <p>SGD {price}</p>
    <div className='star5'>
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <span>4.8 of 5</span>
    </div>
    </div>
    <div className='pro-desc'>
      <h5>Description</h5>
      <p>{description}</p>
    </div>
    <div className='pro-info'>
       <div>
        <h5>Artisan Employment</h5><p>{stock} jobs</p>
       </div>
       <div>
        <h5>Partnership</h5><p>Randall Armstrong</p>
       </div>
       <div>
        <h5>In Collab</h5><p>Augusta Mendoza</p>
       </div>
    </div>
    <Size/>
    <Quantity/>
    </div>
    </>
  )
}
