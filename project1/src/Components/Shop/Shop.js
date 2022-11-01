import React, { Component } from 'react'
import './style.css'
import ShopItems from './ShopItems/ShopItems.js';

export default class Shop extends Component {
  render() {
    return (
        <>
        <div className='shop'>
        <div className='shop-title'>
          <h2>Shop</h2>
        </div>
        <ShopItems/>
       </div>
        </>
    )
  }
}
