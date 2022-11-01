import React, { Component } from 'react'
import './style.css'
import SeenImg from './SeenImg/SeenImg'

export default class seen extends Component {
  render() {
    return (
    <>
    <div className='seen'>
    <div className='seen-title'>
          <h2>As Seen On</h2>
        </div>
        <SeenImg/>
    </div>
    </>
    )
  }
}
