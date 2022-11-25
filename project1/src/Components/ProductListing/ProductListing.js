import React, { Component } from 'react'
import ProductListingHeader from './ProductListingHeader/ProductListingHeader'
import ProductListingProducts from './ProductListingProducts/ProductListingProducts'

export default class ProductListing extends Component {
  render() {
    return (
      <>
      <ProductListingHeader/>
      <ProductListingProducts/>
      </>
    )
  }
}
