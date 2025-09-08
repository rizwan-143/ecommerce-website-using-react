// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../../api/Products";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart , setCart] = useState([]);
  const [category , setCategory] = useState([])
  const [selectCategory , setSelectCategory] = useState('')
  const [productDetails , setProductDetails] = useState({});
  const [wishListItem , setWishListItem] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p._id === product._id);
      if (exists) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p._id !== id));

  const clearCart = () => setCart([]);

  useEffect(() => {
    async function getCategory(){
        const data = await getProducts()
        console.log('fetching categories' , data);
        
        const products = data.data;
        const uniqueCategories =  [
          ...new Set(products.map((p) => p.category))
        ];
         setCategory(uniqueCategories);
    }
    getCategory()
  } , [])

  function getProductDetails(product){
    setProductDetails(product)
  }


  // here goes whihlist logic

 const addToWishList = (product) => {
  // setWishListItem(prev => [...prev , product]) // this logic will allow duplicate items
    setWishListItem((prev) => { // this logic will eliminate duplication
      const exists = prev.find((p) => p._id === product._id);
      if(exists){
        return prev.filter((p) => p._id !== product._id)
      }
      return [...prev , product];
    });
  };

  const removeItemFromWhistList = (id) => {setWishListItem((prev) => prev.filter((p) => p._id !== id))}

  return (
    <CartContext.Provider value={{ cart , addToCart, removeFromCart, clearCart , category , 
    selectCategory  ,  setSelectCategory , productDetails ,
     getProductDetails , addToWishList  , wishListItem , removeItemFromWhistList }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
