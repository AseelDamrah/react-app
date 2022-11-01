import React, { useState } from 'react'
import Modal from 'react-modal'
import HeaderModal from './HeaderModal/HeaderModal'
import ContentModal from './ContentModal/ContentModal'
import ButtonModal from './ButtonModal/ButtonModal'

export default function Popup({show}) {

  return (
  <Modal isOpen={show} style={{
    overlay:{
      backgroundColor:'#d0d0d0d0'
    },
    content:{
    width:"60%",
    margin:'auto',
    height:"90%"
  }}}>
   <div>
    <HeaderModal/>
    <ContentModal/>
    <ButtonModal/>
   </div>
  </Modal>
  )
}
