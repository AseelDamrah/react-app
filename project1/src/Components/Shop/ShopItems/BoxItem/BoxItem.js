import React, { Component } from 'react'
import './style.css'
import Item from './Item/Item.js';

export default class BoxItem extends Component {
    state={
        arr:[
            {img:'images/img15.png',name:"Pants"},
            {img:'images/img16.png',name:"Jumpsuits"},
            {img:'images/img17.png',name:"Tops"},
            {img:'images/img18.png',name:"Accessories"}
        ]
    }
  render() {
    let {arr}=this.state;
    return (
        <>
        <div className='container-Box'>
        {arr.map((item)=> <Item ShopData={item}/>)}
       </div>
       </>
    )
  }
}
