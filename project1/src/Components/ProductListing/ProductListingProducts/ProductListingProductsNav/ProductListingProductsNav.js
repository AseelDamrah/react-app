import React, { Component } from 'react'
import './style.css'

export default class ProductListingProductsNav extends Component {
  render() {
    return (
      <>
      <div className='ProductListingProductsNav'>
        <div className='ProductListingProductsNav-left'>
          <h2>Women</h2>
        </div>
        <div className='ProductListingProductsNav-right'>
          <h3>Sort by</h3>
          <div className='ProductListingProductsNav-select'>
          <select>
            <option>PRICE</option>
          </select>
        </div>
      </div>
      </div>
      </>
    )
  }
}
