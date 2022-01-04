import React,{useState} from 'react';
import Types from './Bakery-Data';

function CartBody() {
    const {product}=Types;
    const [cartItems,setCartItems]=useState([]);
    const handleAddProduct=(product)=>{
        const ProductExist=cartItems.find((item)=>item.id===product.id);
        if(ProductExist){
            setCartItems(cartItems.map((item)=>item.id===product.id?{
                ...ProductExist,quantity:ProductExist.quantity +1
            }:item));
        }
        else {
            setCartItems([...cartItems,{...product,quantity:1}]);
        }
    }

    const handleRemoveProduct=(product)=>{
        const ProductExist=cartItems.find((item)=>item.id===product.id);
        if(ProductExist.quantity===1){
            setCartItems(cartItems.filter((item)=>item.id===product.id));
    
        }else{
            setCartItems(cartItems.map((item)=>item.id===product.id?{
                ...ProductExist,quantity:ProductExist.quantity -1
            }:item));
        }

    return (
        <div>
         <Router>
         <Routes item={item} cartItems={cartItems} handleAddProduct={handleAddProduct(Types)} handleRemoveProduct={handleRemoveProduct}/>
         </Router>
            
        </div>
    )
}}

export default CartBody
