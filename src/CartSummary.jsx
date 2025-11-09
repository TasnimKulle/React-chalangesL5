import React, { useContext } from 'react'
import CartContext from './CartContext'

export const CartSummary = () => {
    const{ cartItems,removeCart}=useContext(CartContext)
  return (
    <div>
        <h3>CartSummary</h3>
        <p>Total Items : {cartItems.length}</p>
        <ul>
            {
             
                 cartItems.map((item) =>
                 (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={()=>removeCart(item.id)}>Remove</button>
                    </li>
                   
                     
                ))
            
            }
        </ul>
    </div>
  )
}
