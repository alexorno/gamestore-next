import React, { useRef, useEffect } from 'react';
import { useStateContext } from '../../context/StateContext';
import CartItem from './CartItem';
import { loadStripe } from '@stripe/stripe-js'
import {toast} from 'react-hot-toast'
import Stripe from 'stripe';




const Cart = () => {
  const cartContainer = useRef()
  const {cartItems, useCartItems, setShowCart, totalPrice} = useStateContext()
  
 useEffect(() => {
    cartContainer.current.classList.add('animate')
   setTimeout(() => {
    cartContainer.current.classList.remove('animate')
   }, 20);
 }, [setShowCart])

 const closeCart = () =>{
  cartContainer.current.classList.add('animate')
  setTimeout(() => {
    setShowCart(false)
  }, 800);
 }

// handling click outside cart element to close it
  const handleClickOutside = (e) => {
    if(cartContainer.current && !cartContainer.current.contains(e.target)){
      closeCart()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
   
  const handleCheckout = async () => {
      const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({cartItems})
      });

      if(response.code === 500){
        return
      }
      
      const data = await response.json()
      toast.loading('Loading...')
      stripePromise.redirectToCheckout({sessionId: data.id})
  }

  return (

    <div className='cart-container' ref={cartContainer} >
      <button className='close-icon' onClick={() => {closeCart()}}>
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