

import React from 'react'
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


// import  {Cart}   from './'

const Navbar = () => {

  return (
  <div className='main-container'>

    <nav className='navbar-container h-10'>
      <p className='logo flex items-center'>
        <Link href='/' className='flex h-full'>
            <img src='/logowithtxt.svg' alt="Game Store" />
        </Link>
      </p>
      
      <button type='button' className='cart-icon flex items-center' >
        <ShoppingCartIcon className='h-7 text-slate-100'/>
        <span className='cart-item-qty text-slate-100'>1</span>
      </button>
    
    {/* { showCart && <Cart /> } */}

    </nav>
  </div>
  )
}

export default Navbar