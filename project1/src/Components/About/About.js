import React, { Component } from 'react'
import './style.css';
import AboutImg from './AboutImg/AboutImg.js';
import AboutDesc from './AboutDesc/AboutDesc.js';

export default class About extends Component {
  render() {
    return (
        <>
        <div className='about'>
        <div className='about-title'>
        <h2>About Matter</h2>
      </div>
      <div className='container'>
        <div className='boxes'>
            <div className='boxes-content'>
          <AboutImg/>
          <AboutDesc/>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }
}
