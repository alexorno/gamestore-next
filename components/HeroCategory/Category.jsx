import React from 'react'
import { urlFor } from '../../lib/sanity'
import Link from 'next/link'

const Category = ({data}) => {


  return (
    <div className='category'>
        <div className='category-price'>
            <p>Starting From</p> 
            <p>$ {data.price}</p>
        </div>
            <div className='category-description'>
                <p>{data.description}</p>
            </div>
                <div className='category-btn'>
                    <Link href=''> 
                        <button className='btnp'>GO TO CATEGORY</button>
                    </Link>
                </div>
                    <div className='category-bg'> 
                        <p> {data.bgname} </p>
                        
                        <img src={urlFor(data.image)}/>
                    </div>
    </div>
  )
}

export default Category