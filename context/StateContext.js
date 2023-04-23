import React, { useState, createContext, useContext } from 'react';
import { client } from '../lib/sanity';
import toast from 'react-hot-toast';

const Context = createContext()

export const StateContext = ({children}) => {

    const [showCart, setShowCart] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [qty, setQty] = useState(1)
    
    const onAdd = (product, quantity) => {
      const productIsInCart = cartItems.findIndex((item) => item._id === product._id )

      if(productIsInCart > -1){
        // creating shallow copy to update quantity of product with specific id which was found by productIsInCart()
        const array = [...cartItems];
        array[productIsInCart].quantity = array[productIsInCart].quantity + quantity
        // updating cartItems with updated quantity
        setCartItems(array)
      }else{
        product.quantity = quantity
        setCartItems([...cartItems, product])
      }


      setTotalPrice((prevTotalPrice) => +((prevTotalPrice + (quantity * product.price)).toFixed(2)) )
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
      setQty(1)
      toast.success(`${quantity} ${product.title} added to cart 😌`)

    }

    const incQty = () => {
      setQty(prevQty => (prevQty + 1))
    }

    const decQty = () => {
      setQty((prevQty) => {
        if(prevQty > 1){
          return (prevQty - 1)
        }else{
          return 1
        }
        
      })
    }

  return (
    <Context.Provider value={{ qty, setQty, incQty, decQty, onAdd, cartItems, showCart, setShowCart, totalPrice, totalQuantities}}>
        {children}
    </Context.Provider>     
  )
}

export const useStateContext = () => useContext(Context)

export const getServerSideProps = async () =>{
  // const query =  `*[_type == "Products"]`;
  // const products = await client.fetch(query);
  
  const productsQuery =  `*[_type == "product"]`;
  const products = await client.fetch(productsQuery);

  return{
    props: {products}
  }
};