import React, { Component } from 'react'
import ProductList from './ProductList/ProductList'
import './style.css'
import axios from 'axios'

export default class ProductListingProductsContent extends Component {

  state={
    products:[]
  }

  getData=async()=>{
    const response= await axios.get("https://fakestoreapi.com/products");
    this.setState({ products: response.data})
  }
  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <>
      <div className='ProductListingProductsContent'>
      <ProductList products={this.state.products}/>
      </div>
      </>
    )
  }
}
