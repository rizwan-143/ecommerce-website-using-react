import { useCart } from "../components/context/CartContext";
import {getProducts} from '../api/Products.js'
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../components/product/ProductCard'
// import  ProductCard  from "../components/product/ProductCard";
function ProductDetail() {
  const {productDetails} = useCart()
  const [relatedProducts , setRelatedProducts] = useState([])

  useEffect(() => {
    async function relatedProducts() {
      const data = await getProducts()
      const products = data.data
      setRelatedProducts(products)
    }
    relatedProducts()
  }, [])

 // related prodcuts logic

 const curretnRelatedProducts = relatedProducts.filter(item => item.category === productDetails.category)

  return (
    <div className="p-4">
      {
        productDetails ? (
           <div className="grid sm:grid-cols-2 lg:grid gap-4">
          <div className="flex justify-center items-center">
            <img src={productDetails.image} className = '' alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h2> brand : {productDetails.brand}</h2>
            <h2> category : {productDetails.category}</h2>
            <h2> price : ${productDetails.price}</h2>
            <h4 className ='text-[12px] text-red-500'> old price : <del>${productDetails.oldPrice}</del></h4>
            <h2> title : {productDetails.title}</h2>
            <h2> condition : {productDetails.isNew === true ? 'new' : 'old'}</h2>
            <h2 className = 'text-[12px]'>Description : <br /> {productDetails.des} </h2>
          </div>
      </div>
        ) : (
          <h2>select product to see details</h2>
        )
      }
     

      {/* here goes related products */}
        {/* {
          relatedProducts.map((p , index) => {
            return (
              <li>{p.title}</li>
            )
          })
        } */}
        {/* <ProductCard/> */}
         {/* Related products */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {curretnRelatedProducts.map((p, index) => (
            <ProductCard key={index} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
