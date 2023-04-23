import React from 'react'
import Head from 'next/head';
// import Footer from './Footer';
import Navbar from './Navbar';
import { useStateContext } from '../context/StateContext';
import Cart from './Cart/Cart';


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

        {/* <footer>
          <Footer />
        </footer> */}

    </div>
  )
}

export default Layout