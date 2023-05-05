import React, { useState, useEffect, useRef } from 'react';
import { useStateContext } from '../context/StateContext';
// import { client } from '../../lib/sanity';
// import {productsArr} from '../../pages/index'
import  CartItem   from './Cart/CartItem'


const Search = ({products}) => {
    
    const [searchedProducts, setSearchedProducts] = useState([])
    const [searchQuote, setSearchQuote] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showSearch, setShowSearch] = useState(false)
    const [resultLoad, setResultLoad] = useState(false)
    const searchresult = useRef(null)


    useEffect(() => {
      
      setResultLoad(true)
      const interval = setTimeout(() => {
        if(searchQuote.length > 0){
          setSearchQuote(searchQuote.toLowerCase())
          const searched = products.filter((item) => {
              if(item.title.toLowerCase().includes(searchQuote)) {
                  return item
              }
          })

          setSearchResult(searched)
        }else{
          setSearchResult([])
        }
        setResultLoad(false)
      }, 600);

      // setResultLoad(false)
      return () => clearTimeout(interval)

    }, [searchQuote])


  return (
    <div className='search' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 search-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <div className='search-result-container'>
            <input className='search-space' onFocus={() => setShowSearch(true)}  onBlur={() => setShowSearch(false)} placeholder='Search all products...' onChange={e => setSearchQuote(e.target.value)}/>
                <div className='search-result' ref={searchresult} >
                  {resultLoad ? <img className='mx-auto my-2  h-16 w-32' src='/loading.gif' /> : ''}

                  { //check if input in Focus to show result and check that results are existing
                  searchResult.length != 0 && showSearch && !resultLoad ? 
                  searchResult.map((item) => 
                  <CartItem product={item} key={item._id}/>) 
                  : 
                  showSearch && !resultLoad && <p className='p-2'>No result, can you try again?</p>
                  }
                </div>
        </div>
    </div>
  )
};

export default Search;