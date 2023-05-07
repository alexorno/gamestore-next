import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../lib/sanity'

const SearchComponent = ({product}) => {
    const {image, title, price, slug} = product

    return(
        <Link href={`/products/${slug.current}`} tabIndex='0' >
            <div className='search-product'>
                <img src={urlFor(image[0])} alt={title} />

                <div className='search-right'>
                    <p className='title'>{title}</p>
                    <p className='price'>${price}</p>
                </div>
            </div>
        </Link>

    )
}

export default SearchComponent