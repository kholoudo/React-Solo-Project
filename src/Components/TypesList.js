import React from 'react'
import'../styles/types.css'
import Types from './Bakery-Data'
import {useState} from 'react'


function TypesList({ title, price,src ,id}) {
  const [cartItems,setCartItems]=useState([]);
  const product=Types[id];
  const handleAddProduct=()=>{
   if(!localStorage.getItem("cart")){
localStorage.setItem('cart',JSON.stringify([]));
   }
   let data=JSON.parse(localStorage.getItem('cart'));
   data.push(product);
   localStorage.setItem('cart',JSON.stringify(data) );
   alert("item added to cart");
}



    return (
        <div className='bakery-section'>
          
       <section className="types">
        <div className="Types-body">
          <div className="Types-item">
            <img src={src} />
          </div>
          <div className="Types-info">
          <h6>{title}</h6>
            <p className='price'>{price}</p>
            <button className='bakery-btn' onClick={()=>handleAddProduct()}>Add to Cart</button>
            
    </div>  </div>
    </section>
        </div>
       
    )
}

export default TypesList
