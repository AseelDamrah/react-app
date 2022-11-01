import React, { Component } from 'react'
import './style.css';
import BoxItem1 from './BoxItem1/BoxItem1.js';
import BoxItem2 from './BoxItem2/BoxItem2.js';

export default class FeatureItems extends Component {
   
  render() {
    
    return (
        <>
        <div className='container'>
          <div className='boxes'>
      <BoxItem1/>
      <BoxItem2/>
      </div>
      </div>
      </>
    )
  }
}
