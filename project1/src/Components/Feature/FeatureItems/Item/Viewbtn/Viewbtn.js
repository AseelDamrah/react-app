
import React, { useState } from 'react'
import Popup from './Popup/Popup'

export default function Viewbtn() {
    let [show,setShow]=useState(false);
    let [close,setClose]=useState(true)

    function fun(){
        setShow(!show)
        console.log(show)
    }
  return (
    <>
      <div className='view'><button onClick={fun}>QUICK VIEW</button></div>
     <Popup show={show}/>
      </>
  )
}

