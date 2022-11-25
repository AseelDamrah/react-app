import './style.css'

import React, { useState } from 'react'
import Item from '../../../../Feature/FeatureItems/Item/Item';

export default function ProductList({products}) {
  let [showlist,setShowlist]=useState(false);
  let [typepro,setTypepro]=useState("");
  let [All,setAll]=useState(true);
  let [some,setSome]=useState(false);

  function fun(){
      setShowlist(!showlist);
      console.log(products);

  }

  function women(){
    setTypepro("women's clothing");
    setAll(false);
    setSome(true);
  }
  function men(){
    setTypepro("men's clothing");
    setAll(false);
    setSome(true);
  }
  function elec(){
    setTypepro("electronics");
    setAll(false);
    setSome(true);
  }
  function jew(){
    setTypepro("jewelery");
    setAll(false);
    setSome(true);
  }

  function clickAll(){
    setAll(true);
  }
  return (
    <>
    <div className='ProductList'>
      <div className='ProductList-left'>
      <div className='filter-reset'>
      <div className='Filters'><h4>Filters</h4></div>
      <div className='Reset'><button>Reset</button></div>
      </div>
      <div className='ProductListItemBtn'>
    <div className='Apparels'><button onClick={fun}>Apparels</button></div>
    <div><i class="fa fa-duotone fa-chevron-down"></i></div>
   </div>
   { showlist && <div className='button-list'>
        <button onClick={clickAll}>all</button>
        <button onClick={women}>women's clothing</button>
        <button onClick={men}>men's clothing</button>
        <button onClick={elec}>electronics</button>
        <button onClick={jew}>jewelery</button>
        </div>}
    </div>

    <div className='ProductList-right'>
      <div className='ProductList-right-item'>
 {All && products.map((item)=> <Item FeatureData={item} />) }
 {some && products.filter(item=> item.category===typepro).map(item=><Item FeatureData={item} />) }
</div>
     
    </div>
    </div>
   
    </>
  )
}
