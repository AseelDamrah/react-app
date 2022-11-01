import React, { Component } from 'react'
import './style.css'

export default class Item extends Component {
    render() {
        let {img,name}=this.props.RecommendedData;
        return (
          <>
          <div className='item-Recommended'>
            <div className='item-Recommended-desc'>
              <img src={img}/>
              <div className='play'><i class="fa-regular fa-circle-play"></i></div>
              </div>
            <p>{name}</p>
          </div>
          </>
        )
      }
}
