import React, { Component } from 'react'
import './style.css';
export default class List extends Component {


  render() {
    const arr=['Shop','FABRIC','Journal','About']
    return (
      <div className="listItem">
            <diV className="listItem-left">
               <div className='logo'><img src='images/logo.png' /></div>
                <div className='Items'>
                {arr.map((item)=>
                <select>
                    <option>{item}</option>
                </select>
                   )}
                </div>
            </diV>
            <div className="listItem-right">
                <div>LOGIN</div>
                <div><i class="fa fa-light fa-magnifying-glass"></i></div>
                <div><i class="fa-regular fa-heart"></i></div>
                <div><i class="fa fa-light fa-bag-shopping"></i></div>
            </div>
      </div>
    )
  }
}
