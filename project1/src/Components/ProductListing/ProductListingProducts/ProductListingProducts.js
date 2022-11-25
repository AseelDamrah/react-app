 import React, { Component } from 'react'
 import ProductListingProductsNav from './ProductListingProductsNav/ProductListingProductsNav'
 import ProductListingProductsContent from './ProductListingProductsContent/ProductListingProductsContent'
 import './style.css';

 export default class ProductListingProducts extends Component {
   render() {
     return (
       <>
       <div className='ProductListingProducts'>
       
       <ProductListingProductsNav/>
       <ProductListingProductsContent/>
       
       </div>
       </>
     )
   }
 }
 