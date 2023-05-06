import React from 'react'
import Head from 'next/head';
import Footer from './Footer';
import Cart from './Cart/Cart';
import {Navbar} from './Navbar/Navbar';
import { useStateContext } from '../context/StateContext';



const Layout = ({children}) => {

  const {showCart} = useStateContext()

  return (
    <div>
        <Head>
          <title>Game Store Next step</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          { showCart && <Cart /> }
        </main>

        <Footer />


    </div>
  )
}


export default Layout