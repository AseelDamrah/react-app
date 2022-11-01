import React, { Component } from 'react'
import './style.css'
export default class Item extends Component {
  render() {
    let {img,name}=this.props.ShopData;
    return (
      <>
   
      <div className='item2'>
        <a href='#'>
        <img src={img}/>
       <div className='name'><p>{name}</p></div>
       </a>
       <div className='shop-layer'><button>Shop Now</button></div>
       </div>
      </>
    )
  }
}
