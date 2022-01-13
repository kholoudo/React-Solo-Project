import React from 'react';
import Booking from './Booking';
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Cart.css';
import Types from './Bakery-Data.js'
import {useState} from 'react'


const Cart=()=>{
    const [formGroup, setFormGroup] = useState();
    const [newPrice, setNewPrice] = useState("");
    const Change = (e) => {
      setFormGroup(e.target.value);
      console.log(formGroup);
    };
    const apply = (e) => {
      e.preventDefault();
  
      if (formGroup === "BAN") {
        setNewPrice(totalPrice*0.2);
      }
    };



   const navigate=useNavigate();
const lcl =JSON.parse(localStorage.getItem('cart'));
const [counter,setCounter]=useState(lcl);
    let index;
const handleIncrement=(id)=>{

for (let i=0; i<lcl.length;i++){
    console.log(lcl[i]);
    if(lcl[i].id==id){
       
    index=i;
    }
}
lcl[index].counter+=1;
console.log(lcl[index].counter);
localStorage.setItem('cart',JSON.stringify(lcl));
setCounter(JSON.parse(localStorage.getItem('cart')));

}

const handleDecrement=(id)=>{
    for (let i=0; i<lcl.length;i++){
        console.log(lcl[i].counter);
        if(lcl[i].id==id){
            
        index=i;
        }
        
    }
    lcl[index].counter-=1;
    console.log(lcl[index].counter);
    localStorage.setItem('cart',JSON.stringify(lcl));
    setCounter(JSON.parse(localStorage.getItem('cart')));
   
    
}
// const isLogged=()=>{
// if(!JSON.parse(localStorage.getItem('logged_user'))){
//     <Link to='/login'  />
//     alert("Kindly to login First");
    
// }
    
// else{
//    <Link to='/Booking'/>; 
    
    
// }}


const cartProducts=JSON.parse(localStorage.getItem('cart'));
    const totalPrice=cartProducts.reduce((price,item)=>price + item.counter * item.price, 0);
   
    return (
        <div className='cart-items'>
             <div className='cart-items-header'>Cart Items</div>
            {cartProducts.length===0 &&(<div className='cart-items-empty'>You Cart is Empty</div>)}

            <div>  
                {cartProducts.length!=0 &&
                counter.map((item)=>(
                    <di  className='cart-item-list'>
                        <img className='cart-item-image'src={item.src} alt={item.title}/>
                        <div className='cart-item-name'>{item.title}</div>
                        <div className='cart-item-function'>
                        
                            <button className='cart-item-add' onClick={()=>handleIncrement(item.id)}>+</button>
                            <p className='counter'>{item.counter}</p>
                            <button className='cart-item-remove'onClick={()=>handleDecrement(item.id)}>-</button>
                        </div>
                        <div className='cart-item-price'>JOD {item.price*item.counter}</div>
                    </di>
                    
                 ) )}
            </div>
           

<div className="input-code">
  <form onSubmit={apply}>
    <label htmlFor="code">Enter Coupon Code</label>
    <input type={"text"} name="code" onChange={Change} />{" "}
    <button type="submit" className='discountBtn'>apply</button>
  </form>
</div>
<div className="dnumber">
    <strong>{newPrice}JD</strong>
  </div>
            <div className='cart-item-total-price-name'>Total Price
            <div className='cart-item-total-price'> JOD {totalPrice-newPrice}</div>
            <Link to="/Booking"><button className="deliveryBooking" > Proceed</button></Link>
            </div>
        </div>

        
    );
};

export default Cart
