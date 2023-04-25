import React from 'react';
import { useStateContext } from '../../context/StateContext';
import CartItem from './CartItem';
import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe';




const Cart = () => {
  
  const {cartItems, useCartItems, setShowCart, totalPrice} = useStateContext()
  
  const handleCheckout = async () => {
      const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cartItems})
      });

      if(response.code === 500){
        return
      }else{}

      const data = await response.json()


      // toast.loading('loaddddd')

      stripePromise.redirectToCheckout({sessionId: data.id})
  }

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
        <a onClick={handleCheckout}> Go to checkout </a>
      </div>
    </div>

  )
}

export default Cart