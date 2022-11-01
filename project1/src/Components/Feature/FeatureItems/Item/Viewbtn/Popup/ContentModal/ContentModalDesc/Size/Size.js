import React, { Component } from 'react'
import Square from '../Square/Square'
import './style.css'

export default class Size extends Component {
  render() {
    return (
      <>
     <div className='Size'>
       <h6>Size</h6>
       <div className='size-num'>
       <Square  text='1'/>
      <Square  text='2'/>
     <Square  text='3'/>
      <Square  text='4'/>
      <p className='SizeGuidelines'>Size Guidelines</p>
       </div>
       <p className='SizeDesc'>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</p>
     </div>
      </>
    )
  }
}
