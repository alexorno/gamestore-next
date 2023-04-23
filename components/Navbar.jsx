import React from 'react'
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Cart from './Cart/Cart';
import { useStateContext } from '../context/StateContext';


const Navbar = () => {

  const {setShowCart, totalQuantities} = useStateContext();

  return (
  <div className='main-container'>
    <nav className='navbar-container h-10'>

      <p className='logo flex items-center'>
        <Link href='/' className='flex h-full'>
            <img src='/logowithtxt.svg' alt="Game Store" />
        </Link>
      </p>
      
      <button type='button' className='cart-icon flex items-center p-6' onClick={() => setShowCart(true)} >
        <ShoppingCartIcon className='h-7 text-slate-100'/>
        <span className='cart-item-qty text-slate-100'>{totalQuantities}</span>
      </button>
    
    {/* <Cart /> */}

    </nav>
  </div>
  )
}

export default Navbar