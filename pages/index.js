import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Recomendations from '../components/Recomendations'
import HeroCategory from '../components/HeroCategory/HeroCategory'

import {client} from '../lib/sanity'


const index = ({recomData, categoryData}) => {
  return (
    <>
      <HeroBanner />
      <Recomendations data={recomData}/>
      <HeroCategory data={categoryData}/>
      
    </>
  )
}

export const getServerSideProps = async () =>{
  // const query =  `*[_type == "Products"]`;
  // const products = await client.fetch(query);
  
  const recomQuery =  `*[_type == "recomendations"]`;
  const recomData = await client.fetch(recomQuery);
  
  const categoryQuery = `*[_type == "category"]`;
  const categoryData = await client.fetch(categoryQuery);

  return{
    props: {recomData, categoryData}
  }
  };

export default index

