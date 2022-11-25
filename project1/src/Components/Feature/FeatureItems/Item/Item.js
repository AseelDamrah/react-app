import React, { Component } from 'react'
import './style.css';
import Viewbtn from './Viewbtn/Viewbtn'

export default class Item extends Component {
  render() {
    let {image,title,price}=this.props.FeatureData;
    return (
      <>
      <div className='item'>
       <a href='#'>
        <div className='img-item'>
          <img src={image}/>
          <Viewbtn/>
          </div>
        <p>{title}</p>
        <span>{price}</span>
        </a> 
        <div className='new'>NEW</div>
       
      </div>

      </>
    )
  }
}
