import React, { Component } from 'react'
import Navbar from './Navbar/Navbar.js';
import List from './List/List.js';
import Header from './Header/Header.js';
import Feature from './Feature/Feature.js';
import About from './About/About.js';
import Explore from './Explore/Explore.js';
import Shop from './Shop/Shop.js';
import Recommended from './Recommended/Recommended.js'
import Seen from './Seen/Seen'
import Footer from './Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <List/>
      <Header/>
      <Feature/>
      <About/>
      <Explore/>
      <Shop/>
      <Recommended/>
      <Seen/>
      <Footer/>
      </>
    )
  }
}
