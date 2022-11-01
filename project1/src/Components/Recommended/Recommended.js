import React, { Component } from 'react'
import './style.css'
import RecommendedItems from './RecommendedItems/RecommendedItems.js';
import RecommendedBTN from './RecommendedBTN/RecommendedBTN.js'

export default class Recommended extends Component {
  render() {
    return (
        <>
        <div className='recommended'>
        <div className='recommended-title'>
          <h2>Recommended Videos</h2>
        </div>
        <RecommendedItems/>
        <RecommendedBTN/>
       </div>
        </>
    )
  }
}
