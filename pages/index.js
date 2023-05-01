import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Recomendations from '../components/Recomendations/Recomendations'
import HeroCategory from '../components/HeroCategory/HeroCategory'

import {client} from '../lib/sanity'
import { useStateContext } from '../context/StateContext'



const index = ({recomData, categoryData, products}) => {

 const {setProducts} = useStateContext()
setProducts(products)

  return (
    <>
      <HeroBanner />
      <Recomendations data={recomData}/>
      <HeroCategory data={categoryData}/>
    </>
  )
}


// export const productsArr = (products) =>  {
// console.log(products)

// const res = JSON.stringify(products)
//   return (
//     res
//   )
// }

export const getServerSideProps = async () =>{
  // const query =  `*[_type == "Products"]`;
  // const products = await client.fetch(query);
  
  const recomQuery =  `*[_type == "recomendations"]`;
  const recomData = await client.fetch(recomQuery);
  
  const categoryQuery = `*[_type == "category"]`;
  const categoryData = await client.fetch(categoryQuery);

  const productsQuery =  `*[_type == "product"]`;
  const products = await client.fetch(productsQuery);


  return{
    props: {recomData, categoryData, products}
    
  }
  };


export default index

