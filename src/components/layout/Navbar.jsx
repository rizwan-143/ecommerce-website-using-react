import { useState } from "react"
import { useSearch } from "../context/SearchContext"
import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    const {searchItem , setSearchItem} = useSearch()
    const [mobileScreen , setMobileScreen] = useState(false)
    return (
        <>
        <div className="navbar px-0 bg-gray-400 p-2 flex justify-evenly items-center" style={{height : '70px'}}>
            {/* here goes my logo */}
            <div className="">
                <h2 className="font-bold text-white text-sm lg:text-3xl">ecommerce website</h2>
            </div>

            {/* here goes humberger */}
            <div className="order-1 lg:hidden" onClick={() => setMobileScreen(!mobileScreen)}>
                <i className={`fa-solid ${mobileScreen ? "fa-xmark" : "fa-bars "}`}></i>
            </div>

            <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-start gap-5 
               absolute left-0 top-0 pt-5  h-screen  p-2
               lg:static lg:translate-x-0 lg:h-auto lg:bg-transparent lg:transition-none
               ${mobileScreen ? 'translate-x-0 w-auto z-20 p-2 bg-gray-300 transition-all duration-700 ' : '-translate-x-full' }
            `}>
                {/* here goes search bar */}
            <div className="">
                <input
                value={searchItem} onChange={(e) => setSearchItem(e.target.value)}
                 type="search" placeholder="search here"
                 className="border border-gray-300 p-1 rounded-md"
                   />
            </div>

            {/* here goes navbar menu */}
            <div className="">
                <ul className="flex flex-col lg:flex-row gap-5 items-center">
                    <li onClick={() => setMobileScreen(!mobileScreen)}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li onClick={() => setMobileScreen(!mobileScreen)}>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li onClick={() => setMobileScreen(!mobileScreen)}>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li onClick={() => setMobileScreen(!mobileScreen)}>
                        <NavLink to='/categories'>categories</NavLink>
                    </li>
                    <li onClick={() => setMobileScreen(!mobileScreen)}>
                        <NavLink to='/contact'>
                            contact us
                        </NavLink>
                    </li>
                </ul>
            </div>

            </div>


            <div className="flex gap-5 ">
                {/* here goes cart */}
            <div className="relative flex justify-center items-center">
                <NavLink to='/Cart'>
                <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
                <div className=" flex justify-center items-center
                absolute bg-black p-1 -top-3 -right-3 rounded-full">
                    <span className="text-white text-[10px]">0</span>
                </div>
            </div>
             {/* here goes whishlist */}
            <div className="relative flex justify-center items-center">
                <NavLink to= '/whishList'><i className="fa-solid fa-heart"></i></NavLink>
                <div className=" flex justify-center items-center
                absolute bg-black p-1 -top-3 -right-3 rounded-full">
                    <span className="text-white text-[10px]">0</span>
                </div>
            </div>

            
             {/* here goes login */}
            <div className="relative flex justify-center items-center">
                <i className="fa-solid fa-user"></i>
                
            </div>
            </div>            
        </div>
        </>
    )
}

export default Navbar