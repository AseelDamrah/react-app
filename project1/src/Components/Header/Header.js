import React, { Component } from 'react'
import './style.css';

export default class Header extends Component {
  render() {
    return (
        <>
     <div className='header'style={{ backgroundImage: "url(images/img1.png)" }}>
        <div className='header-content'>
           <h1>Perfume Tips Tricks</h1>
           <button><a href='#'>Shop Now</a></button>
        </div>

     </div>
     </>
    )
  }
}
