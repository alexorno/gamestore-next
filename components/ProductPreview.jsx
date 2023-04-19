import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/sanity'

const ProductPreview = ({product: {title, description, price, slug, image} , reverse} ) => {

  return (
    <div className={`product-recom ${reverse ? 'reverse' : ''}`}>
        <div className='recom-left'>
            <h5>{title}</h5>
            <p className='recom-price'> STARTING FROM <em>$ {price}</em></p>
            <p className='recom-description'>{description}</p>
            <Link href=''>
              <button className='btn'>BUY NOW</button>
            </Link>

        </div>
        <div className='recom-right'>
            <img src={ urlFor(image[0])} alt={slug.current} />
        </div>
    </div>
  )
}

export default ProductPreview