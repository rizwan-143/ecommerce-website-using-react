import { useEffect } from "react"
import { useCart } from "../components/context/CartContext"
function WhishList(){
    const { wishListItem , removeItemFromWhistList} = useCart()


    return (
        <>

         <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-2">
        {wishListItem.map((item) => (
          <li
            key={item._id}
            className="border p-2 flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <img src={item.image} alt={item.title} className="w-10 h-10 object-cover mb-4" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => removeItemFromWhistList(item._id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {/* <button
        onClick={clearCart}
        className="mt-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Clear Cart
      </button> */}
    </div>
        
        </>
    )
}

export default WhishList