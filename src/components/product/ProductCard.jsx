import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function ProductCard({ product }) {
  const { addToCart, getProductDetails   , addToWishList , wishListItem} = useCart()
  console.log(product);

  return (
    <>
      <div className="px-3 mt-4">
        <div className="border rounded-lg p-4 flex flex-col items-center
                       bg-white relative
                       shadow hover:shadow-lg transition-shadow">
          <div className="absolute right-3">
            <ul>
              <li>
                <Link to="/productsDetails">
              <i className="fa-solid fa-eye text-gray-400"
                onClick={() => getProductDetails(product)}></i>
            </Link>
              </li>
              <li>
              <i className={`fa-solid fa-heart transition-all duration-500 
              ${wishListItem.some(item => item._id === product._id) ? 'text-red-600' : 'text-gray-300'}`}
                onClick={() => addToWishList(product)}></i>
              </li>
            </ul>
            </div>
          <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            onClick={() => {
              addToCart(product); console.log(product);
            }}  >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCard