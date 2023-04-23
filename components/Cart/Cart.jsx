import React from 'react';
import { useStateContext } from '../../context/StateContext';
import CartItem from './CartItem';

const Cart = () => {

    const {cartItems, useCartItems, setShowCart, totalPrice} = useStateContext()


  return (

    <div className='cart-container'>
      <button className='close-icon' onClick={() => {setShowCart(false)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {cartItems.map((product) => 
        <CartItem product={product} key={product._id}/>
        )
      }
        
      <div className='cart-total'>
        <p>Total: ${totalPrice}</p>
        <a href=''> Go to checkout </a>
      </div>
    </div>

  )
}

export default Cart