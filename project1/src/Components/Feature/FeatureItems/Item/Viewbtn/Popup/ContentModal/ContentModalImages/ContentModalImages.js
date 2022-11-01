
import './style.css'
import React, { useState } from 'react'

export default function ContentModalImages({contentModel}) {
    let {images}=contentModel;
    let [showimg,setShowimg]=useState({
        img0:true,
        img1:false,
        img2:false,
        img3:false,
        img4:false
    })

    function showFun0(){
setShowimg({...showimg,img0:true,img1:false,img3:false,img4:false,img2:false});
    }

    function showFun1(){
        setShowimg({...showimg,img1:true,img2:false,img3:false,img4:false,img0:false});
            }

            function showFun2(){
                setShowimg({...showimg,img2:true,img1:false,img3:false,img4:false,img0:false});
                    }

                    function showFun3(){
                        setShowimg({...showimg,img3:true,img1:false,img2:false,img4:false,img0:false});
                            }

                            function showFun4(){
                                setShowimg({...showimg,img4:true,img1:false,img3:false,img2:false,img0:false});
                                    }
  return (
    <>
    <div className='ContentModalImages-container'>
    <div className='ContentModalImages'>
      <button onClick={showFun0}><img src={images[0]}/></button> 
      <button onClick={showFun1}><img src={images[1]}/></button> 
      <button onClick={showFun2}><img src={images[2]}/></button> 
      <button onClick={showFun3}><img src={images[3]}/></button> 
      <button onClick={showFun4}><img src={images[4]}/></button> 
      </div>
      <div className='Mainimg'>
      { showimg.img0 && <img src={images[0]}/>}
      { showimg.img1 && <img src={images[1]}/>}
      { showimg.img2 && <img src={images[2]}/>}
      { showimg.img3 && <img src={images[3]}/>}
      { showimg.img4 && <img src={images[4]}/>}

      </div>
      </div>
    
    </>
  )
}
