
import React, {useState} from 'react'
import  {useStateContext}  from '../../context/StateContext';
import { client, urlFor } from '../../lib/sanity';

const productPage = ({product}) => {

  const {price, image, description, title} = product[0];

  const { qty, incQty, decQty, onAdd } = useStateContext()

  return (
    <div className='product-page'>
      <div className='main-container'>
        <div className='main-product'>
          <div className='swiper'>
            <img src={urlFor(image[0])} alt='' />
          </div>
          <div className='data'>
            <h1>{title}</h1>
            <h6>PRICE: $ {price}</h6>
              <p>Order code: 69272 <br />
                Manufacturer: Hator <br />
                Color: Black 
              </p>
              <div className='qty'>
                <button onClick={decQty}>-</button>    
                <p>{qty}</p>
                <button onClick={incQty}>+</button>
              </div>  
            <button className='btnp' onClick={() => onAdd(product[0], qty)}>Add to cart</button>
          </div>
        </div>
        <div className='product-page-desc'>
          <h2>
            PRODUCT DESCRIPTION
          </h2>
          <p>
            {description}
          </p>
        </div>

      </div>
    </div>
  )
}



export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on products
  const productsQuery = `*[_type == "product"]`

  const products = await client.fetch(productsQuery);

  const paths = products.map(product => ({
    params: { slug: product.slug.current }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: 'blocking' };
};

// This function gets called at build time on server-side.

export const getStaticProps = async ({ params }) => {
  
  const singleProductQuery = `*[_type == 'product' && slug.current == $slug ]`

  const product = await client.fetch(singleProductQuery, { slug: params.slug });

  return { props: { product } };
};


export default productPage