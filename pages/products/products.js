
import React from 'react'
import {ProductOnPageRow, ProductOnPageWidth} from '../../components/ProductOnPage';

import { client } from '../../lib/sanity';

const products = ({products}) => {
    // console.log(products)

  return (
        <div className='products-page'>
            <div className='main-container'>
                <div className='products'>
                    {products?.map((product, i) => {
                        if( (i+1) % 3 !== 0){
                            return <ProductOnPageRow product={product} />
                        }else {
                            return <ProductOnPageWidth product={product} />
                        }

                    })
                    }
                </div>
            </div>
        </div>
  )
}


export const getServerSideProps = async () =>{
    // const query =  `*[_type == "Products"]`;
    // const products = await client.fetch(query);
    
    const productsQuery =  `*[_type == "product"]`;
    const products = await client.fetch(productsQuery);

    return{
      props: {products}
    }
};

export default products