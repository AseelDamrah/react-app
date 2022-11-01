import React, { Component } from 'react'
import './style.css';
import FeatureItems from'./FeatureItems/FeatureItems.js';
export default class Feature extends Component {
  render() {
    return (
        <>
      <div className='feature-title'>
        <h2>Featured</h2>
      </div>
      <FeatureItems/>
      </>
    )
  }
}
