import React, { Component } from 'react'
import ExplorItem1 from './ExplorItem1/ExplorItem1.js';
import ExploreItem2 from './ExploreItem2/ExploreItem2.js';
import ExploreItem3 from './ExploreItem3/ExploreItem3.js'
import './style.css'

export default class ExplorItems extends Component {
  render() {
    return (
        <div className='container'>
        <div className='boxes2'>
          <div className='box-item'>
        <ExplorItem1/>
        <ExploreItem2/>
        <ExploreItem3/>
        </div>
    </div>
    </div>
    )
  }
}
