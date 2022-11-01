import React, { Component } from 'react'
import './style.css';
import ExplorItems from './ExplorItems/ExplorItems.js'
import ExploreBtn  from './ExploreBtn/ExploreBtn.js'

export default class Explore extends Component {
  render() {
    return (
    <>
    <div className='explore-title'>
        <h2>Explore</h2>
    </div>
    <ExplorItems/>
    <ExploreBtn/> 
    </>
    )
  }
}
