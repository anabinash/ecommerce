import React, { createContext, useState } from "react"
import { PRODUCTS } from "../products";


 export const ShopContext=createContext(null);
   const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
 }
export default function ShopContextProvider(props){
     
    const[cartItems,setCartItems]=useState(getDefaultCart());
    
   const addTOCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})); 
         
   }

   const removeToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1})); 
   }

   const updateCartItemsCount=(newAmount,itemId)=>{
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
   }

   const checkout=()=>{
      setCartItems(getDefaultCart());
   }

   const getTotalAmount=()=>{
    let TotalAmount=0;
     
    for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=PRODUCTS.find((product)=>product.id===Number(item));
                TotalAmount+=cartItems[item]*iteminfo.productPrice;
            }
    }
    return TotalAmount;
   }
    const invoiceList=()=>{
        <h2>The amount with list is here</h2>
        return  getTotalAmount(); 
    }
   const contextValue={cartItems,addTOCart,removeToCart,updateCartItemsCount,checkout,getTotalAmount,invoiceList};
   console.log(cartItems);   
    return(
       <ShopContext.Provider value={contextValue}>
        {props.children}
       </ShopContext.Provider>
    );
}