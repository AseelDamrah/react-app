import React, { Component } from 'react'
import './style.css'
import BoxItem from './BoxItem/BoxItem.js';
export default class RecommendedItems extends Component {
  render() {
    return (
            <>
            <div className='container'>
              <div className='boxes'>
          <BoxItem/>
          </div>
          </div>
          </>
        
    )
  }
}
