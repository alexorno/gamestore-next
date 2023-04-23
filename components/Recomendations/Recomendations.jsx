
import React from 'react'
import ProductPreview from './ProductPreview'

const Recomendations = ({data}) => {

  return (
    <div className='recomend-container'>
            <div className='main-container'>
                    <h4>The Store Recommends Viewing</h4>

                <div className='main-recom'>
                    {data?.map((product, i) => {
                        if(i % 2 === 0){
                          return <ProductPreview key={product._id} product={product} reverse={false}/>
                        }else{
                          return <ProductPreview key={product._id} product={product} reverse={true} />
                        }
                        
                        })}
                </div>
                
            </div>
    </div> 
  )
}



export default Recomendations