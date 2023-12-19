import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../products";
import CartItem from "./cartitem";
import { useNavigate } from "react-router-dom";
import './cart.css'


export default function Cart(){

    const{cartItems,invoiceList,checkout,getTotalAmount}=useContext(ShopContext);
     const navigate=useNavigate();
     const amount =getTotalAmount();
     const invoice=invoiceList();
    return (
      <div className="cart">
        <div>
        <h1>Your cart </h1>
        </div>

        <div className="cart">
           {PRODUCTS.map((product)=>{
            if(cartItems[product.id]!==0){
                return <CartItem data={product}/>
            }
           })}    
        </div> 
        {amount>0 ?(
            <div className="checkout">
            <p>SubTotal:₹ {amount} </p>
            <button  onClick={() => navigate("/")} >continue Shopping</button>
            <button  onClick={()=>invoice}>{" "}invoice{" "}</button>
      </div>
        ):(<h2>Cart is Empty !!</h2>)}
        
      </div>
        )
}