import React, { useState, createContext, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';


const Context = createContext()

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [qty, setQty] = useState(1)

    const [products, setProducts] = useState([])

    useEffect(() => {
      if(showCart){
      document.querySelector("body").classList.add("no-scroll")
      }else{
        document.querySelector("body").classList.remove("no-scroll")
      }}, [showCart])
    

    const changeQtyInCart = (product, direction) => {
      const productNum = cartItems.findIndex((item) => item._id === product._id);
      const array = [...cartItems]

      if(direction === "inc" ){
        array[productNum].quantity = array[productNum].quantity + 1
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price)
        setCartItems(array)
      }
      else if(direction === "dec"){
        if(array[productNum].quantity > 1){
          array[productNum].quantity = array[productNum].quantity - 1
          setCartItems(array)
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
          setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price)
        }else{
          toast.error(`If you want to remove, please, use "remove"`)
        }
      }
    }

    const onAdd = (product, quantity) => {
      const productNum = cartItems.findIndex((item) => item._id === product._id )
      
      if(productNum > -1){
        // creating shallow copy to update quantity of product with specific id which was found by productNum()
        const array = [...cartItems];
        array[productNum].quantity = array[productNum].quantity + quantity
        // updating cartItems with updated quantity
        setCartItems(array)
      }else{
        product.quantity = quantity
        setCartItems([...cartItems, product])
      }

      setTotalPrice((prevTotalPrice) => prevTotalPrice + quantity * product.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
      toast.success(`${quantity} ${product.title} added to cart 😌`)
      setQty(1)
    }

    const onRemove = (product) => {
      const productNum = cartItems.findIndex((item) => item._id === product._id);
      const array = [...cartItems];
      // we are moving element which we want to delete to the end of array and then reducing array length (one of the efficient delete methods)
      array[productNum] = array[array.length - 1]
      array.length = array.length - 1
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - product.quantity)
      setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price*product.quantity)
      setCartItems(array)
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
    <Context.Provider value={{ setProducts, products, qty, setQty, incQty, decQty, onAdd, cartItems, showCart, setShowCart, totalPrice, totalQuantities, changeQtyInCart, onRemove}}>
        {children}
    </Context.Provider>     
  )
}

export const useStateContext = () => useContext(Context)
