import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import './RootLayOut.css'
import Footer from "../layout/Footer";
function RootLayOut(){
    return (
        <>
            <Navbar/>
        <div className="root-layout-container">
            <Outlet/>
        </div>
            <Footer/>

        </>
    )
}

export default RootLayOut;