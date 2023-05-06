
import React, {useState} from 'react'
import  {useStateContext}  from '../../context/StateContext';
import { client, urlFor } from '../../lib/sanity';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, onAutoplayTimeLeft, progressCircle, progressContent,Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {ArrowUturnLeftIcon} from '@heroicons/react/24/outline';
import Router from 'next/router';




const productPage = ({product}) => {

  const {price, image, description, title} = product[0];

  const { qty, incQty, decQty, onAdd } = useStateContext()

  return (
    <div className='product-page'>
      <div className='main-container'>
        <button className='btn-back flex justify-between' onClick={() => Router.back()}>
          <ArrowUturnLeftIcon className="h-4 w-4 my-auto" />
          <p >Back</p>
          </button>
        <div className='main-product'>
          <div className='swiper-outer-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
              {image.map((img) => { 
                return (<SwiperSlide key={img._key}>
                <img src={urlFor(img)} alt='' />
              </SwiperSlide>
              )}
              )}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
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