import React, { Component } from 'react'
import Navbar from './Navbar/Navbar.js';
import List from './List/List.js';
import HomePage from '../Components/HomePage/HomePage'
import ProductListing from '../Components/ProductListing/ProductListing'
import Footer from './Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <List/>
      <ProductListing/>
      <Footer/>
      </>
    )
  }
}
