 import React from 'react'
 import Category from './Category'
 
 const HeroCategory = ({data}) => {
   return (
     <div className='hero-category-container'>
        <div className='main-container'>
            <h5>Choose A Product By Category</h5>

            <div className='category-container'>
                {data.map((block, ind) => 
                    <Category data={data[ind]} key={block._id}/>
                )}

                {/* <Category data={data}/>
                <Category data={data}/>
                <Category data={data}/>
                <Category data={data}/> */}

            </div>
        </div>
     </div>
   )
 }
 
 export default HeroCategory