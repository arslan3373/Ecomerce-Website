import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart'
const Homeproduct = () => {
  const firstitems =products.slice(0,8);
  return (
    <div>
         <div className='flex justify-center flex-wrap gap-6 p-12 ' >
         <div className="listing">
            {firstitems.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
            </div>
        </div>
    </div>
  )
}

export default Homeproduct