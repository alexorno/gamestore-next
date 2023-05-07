import React, {useState} from 'react'
import Link from 'next/link';
import { client, urlFor } from '../lib/sanity';
import { ProductOnPageRow, ProductOnPageWidth } from '../components/ProductOnPage';
import Search from '../components/Search/Search';

const category = ({products, brands}) => {

    const [brandChecked, setBrandChecked] = useState(new Array(brands.length).fill(false)) 
    const [filteredProducts, setFilteredProducts] = useState(products)

    
    const filterBrands = (brandChecked) => {
        if(!brandChecked.includes(true)){
            return setFilteredProducts(products)
        }

        const checkedBrandsId = new Set()

        brands.map((brand, index) => {
            if(brandChecked[index] === true){
                checkedBrandsId.add(brand._id)
            }
        })

        const temp = products.filter((item) => { 
            if(`brandChoose` in item){
                return checkedBrandsId.has(item.brandChoose._ref)
            }
        })

        setFilteredProducts(temp)
    }
    
    const handleCheckboxChange = async (index) => {
        const arr = [...brandChecked]
        arr[index] = !arr[index]
        setBrandChecked(arr)
        
        filterBrands(arr)
    }


  return (
    <div className='products-page'>
    <div className='main-container'>
            
        <Search products={products}/>
        
        <div className='filters'>

            <div className='brands'>
                {
                    brands.map((brand, index) => {
                        return (
                            <div className={brandChecked[index] == true ? 'brand checked' : 'brand'} key={brand._id} >
                                <input type='checkbox' 
                                
                                id={`brand-checked-${index}`} 
                                checked={brandChecked[index]} 
                                onChange={() => handleCheckboxChange(index)}

                                />
                            
                                <img src={urlFor(brand.image)} alt={brand.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className='products'>
            {/* map throught array with products(and every third item use horizontal component) and if there are no products return string */}
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product, i) => {
                    if( (i+1) % 3 !== 0){
                        return <ProductOnPageRow key={product._id} product={product} />
                    }else{
                        return <ProductOnPageWidth key={product._id} product={product} />
                    }
                })) 
                : 
                (<div className='m-auto '>
                    <p>Sorry, but we don't have such items</p>
                    <Link href='/' className='flex justify-center' >
                        <button className='btn'>Return to homepage</button>
                    </Link>
                </div>)
            }
        </div>
    </div>
</div>
)
}



// change names!!!!!!!!!!
export const getStaticPaths = async () => {
    // Get the paths we want to pre-render based on products
    const categoryQuery = `*[_type == "category"]`
  
    const categorys = await client.fetch(categoryQuery);
  
    const paths = categorys.map(category => ({
      params: { id: category._id }
    }));
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' };
  };
  
  // This function gets called at build time on server-side.
  
  export const getStaticProps = async ({ params }) => {
    
    const singleProductQuery = `*[_type == 'product' && categoryChoose._ref == $id ]`
  
    const products = await client.fetch(singleProductQuery, { id: params.id });
    
    const brandsQuery =  `*[_type == "brands"]`;
    const brands = await client.fetch(brandsQuery);

    return { props: { products, brands } };
  };
  

export default category