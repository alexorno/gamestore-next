import React from 'react'
import { urlFor } from '../../lib/sanity'

const CartItem = ({product}) => {
    
    const {image, title, description, price, quantity} = product

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
                    <button>-</button>
                    <p>{quantity}</p>
                    <button>+</button>
                </div>

                <p>remove</p>
            </div>
        </div>
        
            
    </div>
  )
}

export default CartItem