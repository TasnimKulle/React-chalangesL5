import React, { useContext } from 'react'
import CartContext from './CartContext'

export default function 
({itemId ,itemName,price}) {
   const {addToCart} = useContext(CartContext)
   const handleAddToCart=()=>{
    addToCart({
        id:itemId,
        name:itemName,
        price:price
    })
   }
  return (
    <div>
       
        <p>{itemName}</p>
        <p>Price:${price}</p>
        <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  )
}
