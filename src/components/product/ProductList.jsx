import { useEffect, useState } from "react"
import { getProducts } from "../../api/Products"
import ProductCard from "./ProductCard"
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { searchItem } = useSearch()
    const {selectCategory} = useCart()

    useEffect(() => {
        async function fetchData() {
            const data = await getProducts()
            console.log(data);
            setProducts(data.data)
        }

        fetchData()
   }, [])

// useEffect(() => {
//     setCurrentPage(1);
// }, [searchItem, selectCategory]);


    // here goes search logic
    const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(searchItem.toLowerCase()))
                                      .filter((p) => selectCategory ? p.category === selectCategory : true)


    // here goes pagination logic
    let cardsPerPage = 8;
    const totalPages = Math.ceil(filteredProducts.length / cardsPerPage);
    const indexOfLast = currentPage * cardsPerPage;
    const indexOfFirst = indexOfLast - cardsPerPage;
    const currentCards = filteredProducts.slice(indexOfFirst, indexOfLast);


    return (
        <>
            {
                filteredProducts.length === 0 ? (<h3>no product found</h3>) : (
                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {currentCards.map((p) => (
                        <ProductCard key={p._id ?? p.id ?? p.title} product={p} />
                    ))}
                       </div>
                )
            }


            {/* here goes pagination btns */}
            <div className={`flex gap-1 lg:gap-2  mt-5 justify-center  ${filteredProducts.length === 0 ? 'hidden' : ''}`}>
                <button className={`px-2 py-1 rounded-md 
        ${currentPage === 1 ? "bg-blue-200 text-black cursor-not-allowed" : "bg-blue-600 text-white cursor-pointer"}`}
                    onClick={() => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)}>prev</button>
                {
                    [...Array(totalPages)].map((_, index) => (
                        <button className={`p-2 rounded-full w-7 h-7 flex justify-center items-center
                     ${currentPage === index + 1 ? "bg-blue-400" : "bg-white"}`}
                            onClick={() => setCurrentPage(index + 1)} key={index} >{index + 1}</button>
                    ))


                }

                <button className={`px-2 py-1 text-white rounded-md ${currentPage === totalPages ? "bg-blue-200 text-black cursor-not-allowed" : "bg-blue-600 text-white cursor-pointer"} `}
                    onClick={() => setCurrentPage(prev => prev < totalPages ? prev + 1 : prev)} >next</button>
            </div>
        </>
    )
}

export default ProductList