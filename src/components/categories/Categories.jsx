import { useState } from "react";
import { useCart } from "../context/CartContext"
import { categoryImg } from "../../categoryImgs/CategoryImages";
import allProducts from '../../categoryImgs/allProducts.jpg'
function Categories() {
  const { category  ,  setSelectCategory } = useCart(); 
  console.log("categories from context:", category);
  const [showCategories , setShowCategories] = useState(true)

  if (!category || category.length === 0) {
    return <p>No categories found.</p>;
  }

  console.log(categoryImg);

  
  return (

    <>

   <div className="w-full px-2 bg-white p-4 mt-5 flex flex-col gap-3 items-center">
     <h1 className="text-3xl uppercase font-bold">categories</h1>
     <div className="flex items-center gap-3 lg:hidden">
      <h2>choose a category</h2>
      <i className={`fa-solid ${showCategories ? 'fa-bars' : 'fa-xmark'}`} onClick={() => setShowCategories(!showCategories)}></i>
     </div>
    <ul className={`flex flex-col lg:flex-row gap-4 w-fit rounded-lg justify-evenly 
    mt-5 absolute left-0 bg-slate-300 p-2  z-20
     lg:static lg:w-full lg:bg-transparent lg:translate-x-0 lg:transition-none
      ${showCategories ? '-translate-x-full transition-all duration-700' :
       'translate-x-0 transition-all duration-700'} `}>
      <li className=" flex flex-col items-center cursor-pointer "
        onClick={() => {setSelectCategory('') ; setShowCategories(!showCategories)}} >
          <img src={allProducts} className="w-16 h-16 lg:w-32 lg:h-32 
           rounded-full hover:shadow-lg hover:shadow-gray-400
            transition-all duration-300 " alt="" />
          <span className="font-bold text-[15px] lg:text-lg">all products</span>
        </li>
      {category.map((cat) => {
        return (
        <li key={cat} className=" flex flex-col items-center cursor-pointer "
        onClick={() => {setSelectCategory(cat) ; setShowCategories(!showCategories)}} >
          <img src={categoryImg[cat]} className="w-16 h-16 lg:w-32 lg:h-32 
           rounded-full hover:shadow-lg hover:shadow-gray-400
            transition-all duration-300 " alt="" />
          <span className="font-bold">{cat}</span>
        </li>
      )})}
    </ul>
   </div>

    </>

    
  );
}

export default Categories;
