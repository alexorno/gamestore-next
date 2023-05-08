import React from 'react';
import { urlFor } from '../../lib/sanity';
import { useStateContext } from '../../context/StateContext';

const CartItem = ({product}) => {
    const {changeQtyInCart, onRemove} = useStateContext()
    const {image, title, price, quantity} = product

    const numberRound = (num) => {
        return Math.round(((num) + Number.EPSILON) * 100 ) / 100
      }

  return (
    <div className='cart-product'>
        <img src={urlFor(image[0])} alt={title} />

        <div className='product-right'>
            <div className='cart-top'>
                <p className='product-title'>{title}</p>
                <p className='product-price'>$ {numberRound(quantity*price)}</p>
            </div>

            <div className='cart-bottom'>
                <div className="qty">
                    <button onClick={() => changeQtyInCart(product, 'dec')}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => changeQtyInCart(product, "inc")}>+</button>
                </div>
                <button onClick={() => onRemove(product)}>remove</button>
            </div>
        </div>
        
            
    </div>
  )
}

export default CartItem