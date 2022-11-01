import React, { Component } from 'react'
import "./styles.css";


export default class Navbar extends Component {
  render() {
    return (
     <div className='navBar'>
      <div className='navBarComp'>
        <p>Be the first to get best offers by Matterprints</p>
        <div className='emailInput'><input type="email" name="email" className="email" placeholder='Enter your email'/></div>
        <div className='submitInput'><input type="submit" value="Subscribe" className='submit'/></div>
     </div>
     </div>
    )
  }
}
