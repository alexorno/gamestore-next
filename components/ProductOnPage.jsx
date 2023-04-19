import React from 'react'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'


export const ProductOnPageRow = ({product: {title, price, image, description, slug}}) => {

  return (
    <div className='product-page-preview'>
        <div className='main-container'>
            <h5>{title}</h5>
            <img src={urlFor(image[0])} alt={slug.current} />
            <p className='price' > STARTING FROM <em>$ {price} </em></p>
            <p className='desc' >{description}</p>
            <Link href=''>
                <button className='btn'>BUY NOW</button>
            </Link>
        </div>
    </div>
  )
}

export const ProductOnPageWidth = ({product: {title, price, image, description, slug}}) => {

    return (
      <div className='product-page-preview width' >
          <div className='main-container'>
            <div className='left'>
              <img src={urlFor(image[0])} alt={slug.current} />
            </div>

            <div className='right'>
              <h5>{title}</h5>
              <p className='price' > STARTING FROM <em>$ {price} </em></p>
              <p className='desc' >{description}</p>
              <Link href=''>
                  <button className='btn'>BUY NOW</button>
              </Link>
            </div>
            
          </div>
      </div>
    )
  }


