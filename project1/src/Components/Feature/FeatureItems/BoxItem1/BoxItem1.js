import React, { Component } from 'react'
import Item from '../Item/Item';
import './style.css';
export default class BoxItem1 extends Component {
    state={
        arr:[{img:"images/img5.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"},
        {img:"images/img3.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"},
        {img:"images/img4.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"},
        {img:"images/img5.png",desc:"Pueraria Mirifica And Study Phyto Estrogens",price:"$599.00"}
    ]
    }
  render() {
    let {arr}=this.state;
    return (
        <div className='container-Box'>
        {arr.map((item)=> <Item FeatureData={item}/>)}
       </div>
    )
  }
}
