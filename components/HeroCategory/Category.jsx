import React from 'react'
import { urlFor } from '../../lib/sanity'
import Link from 'next/link'

const Category = ({data}) => {
    const linkOnTopPage = async () => {
        window.scrollTo(0, 0);
        window.location.href=`${data._id}`;
    }

  return (
        <div className='category'>
            <div className='category-price'>
                <p>Starting From</p> 
                <p>$ {data.price}</p>
            </div>

            <div className='category-description'>
                <p>{data.description}</p>
            </div>

            <div className='category-btn' onClick={() => linkOnTopPage()}>
                    <button className='btnp'>GO TO CATEGORY</button>
            </div>
            
            <div className='category-bg'> 
                <p> {data.bgname} </p>
                
                <img src={urlFor(data.image)}/>
            </div>
        </div>
  )
}

export default Category