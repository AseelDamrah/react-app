import React, { Component } from 'react'
import './style.css'
import Item from './Item/Item.js';

export default class BoxItem extends Component {
    state={
        arr:[
            {img:'images/img19.png',name:"Jamdani"},
            {img:'images/img20.png',name:"Lorem ipsum dolor sit amet"},
            {img:'images/img21.png',name:"Lorem ipsum dolor sit amet"}
        ]
    }
  render() {
    let {arr}=this.state;
    return (
        <>
        <div className='container-Box'>
        {arr.map((item)=> <Item RecommendedData={item}/>)}
       </div>
       </>
    )
  }
}
