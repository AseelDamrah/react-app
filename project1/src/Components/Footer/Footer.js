import React, { Component } from 'react'
import './style.css'
export default class Footer extends Component {
  render() {
    return (
      <>
      <div className='Footer-copy'>
      <div className='Footer'>
        <div>
            <h4>Categories</h4>
            <ul>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Testimonials</a></li>
                <li><a href='#'>Contact </a></li>
                <li><a href='#'>Journal</a></li>
                <li><a href='#'>Privacy Policy </a></li>
            </ul>
        </div>
        <div>
            <h4>Partners </h4>
            <ul>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Shipping & Returns</a></li>
                <li><a href='#'>Size Guide</a></li>
                <li><a href='#'>Product Care</a></li>
            </ul>
        </div>
        <div>
            <h4>Contact us</h4>
            <ul className='contact-list'>
                <li><a href='#'>26A Pagoda St, TANGS,<br/>
                    Singapore, 058187</a></li>
                <li><a href='#'>+65 6221 5462</a></li>     
            </ul>
        </div>
        <div>
            <h4>Subscribe to newsletter</h4>
            <form>
                <input type="email" className='email' placeholder='Enter your email'/> <input type="submit" className='submit2' value="Subscribe"/>
            </form>
            <div className='face-twi'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
      </div>
      <div className='copy-right'>
         <p>© Copyright Matter PTE LTD  2017</p>
      </div>
      </div>
      </>
    )
  }
}
