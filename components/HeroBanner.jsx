import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div className='main-container'>
          <div className='hero-left'>
              <h3>The best devices at the best prices</h3>
              <p>
              We make every effort to create the best opportunity to make the right and informed choice. Сontinues in stores, where our priority is to give visitors the opportunity to personally evaluate the qualities of the products of interest and, accordingly, to make a purchase decision based not on the inscriptions on the packaging, but on personal experience.
              </p>
              <Link href='/products/products' >
                <button className='btnp'>
                    GO TO SHOP
                </button>
              </Link>
          </div>

      </div>
          
    </div>
  )
}

export default HeroBanner