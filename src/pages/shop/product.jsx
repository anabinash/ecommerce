import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';
import './shop.css';


export default function Product(props) {

    const{id,productName,productPrice,productImage}=props.data;
     const{ addTOCart,cartItems}=useContext(ShopContext) ;  
     const cartItemAmount=cartItems[id];
   
  return (
    <div className='product'>
            
        <img src={productImage} />
           <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${productPrice}</p>
          </div>  
      <button  className='addToCartBttn' onClick={()=>addTOCart(id)}>AddtoCart {cartItemAmount>0 && <>{cartItemAmount}</>}</button>
    </div>
  )
}
