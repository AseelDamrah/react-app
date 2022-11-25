import React, { Component } from 'react'
import './style.css'
export default class ProductListingHeader extends Component {
  render() {
    return (
     <>
     <div className='ProductListingHeader'>
      <div className='ProductListingHeader-content'>
        <div>
          <h1>Apparels</h1>
          <p>White Gold began gaining popularity in the early 1900’s as an alternative to platinum. </p>
     </div>
     </div>
     <div className='ProductListingHeader-img'>
      <img src='images/img6.png'/>
     </div>
     </div>
     </>
    )
  }
}
