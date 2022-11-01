import React, { Component } from 'react'
import Item from '../Item/Item';
import './style.css';
export default class BoxItem2 extends Component {
    state={
        arr:[{img:"images/img6.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"},
        {img:"images/img7.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"},
        {img:"images/img8.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"},
        {img:"images/img9.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"}
    ]
    }
  render() {
    let {arr}=this.state;
    return (
        <div className='container-Box2'>
        {arr.map((item)=> <Item FeatureData={item}/>)}
       </div>
    )
  }
}
