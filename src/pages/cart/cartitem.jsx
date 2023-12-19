import React, { useContext, useState } from "react"
import Alert from "../../components/alert";
import { ShopContext } from "../../context/shopContext"
import Product from "../shop/product";
import "./cart.css"

export default function CartItem(props){
     const{cartItems,addTOCart,removeToCart,updateCartItemsCount,checkout}= useContext(ShopContext);  
     const{id,productName,productPrice,productImage}=props.data; 
    const[alert,setAlert]=useState(null);   

    const showAlert=(message,type)=>{
                         
       setAlert(
        {
            msg:message,
            typ:type
        }
       )
    }   

      function itemAdding(idd){
          addTOCart(idd);
         showAlert(" Adding items","successfully")
           setTimeout(()=>{setAlert(null)},2000)
      }


    return(
       <div className="cartItem">
         <div>
            <Alert   alert={alert}/>
         </div>
         
            <img src={productImage}/>
            <div className="description"> 
                <p>
                    <b>{productName}</b>
                </p>
                <p>Price: ₹{productPrice}</p>
                <div className="countHandler">
                    <button onClick={()=>removeToCart(id)}>-</button>
                    <input  value={cartItems[id]}
                      onChange={(e)=>updateCartItemsCount(Number(e.target.value),id)}
                    /> 
                    <button onClick={()=>itemAdding(id)}>+</button>
                </div>
            </div>
       </div>
    )
}