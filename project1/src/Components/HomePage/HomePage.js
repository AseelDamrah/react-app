import React, { Component } from 'react'
import Header from '../Header/Header'
import Feature from '../Feature/Feature'
import About from '../About/About'
import Explore from '../Explore/Explore'
import Shop from '../Shop/Shop'
import Recommended from '../Recommended/Recommended'
import Seen from '../Seen/Seen'

export default class HomePage extends Component {
  render() {
    return (
    <>
    <Header/>
      <Feature/>
      <About/>
      <Explore/>
      <Shop/>
      <Recommended/>
      <Seen/>
    </>
    )
  }
}
