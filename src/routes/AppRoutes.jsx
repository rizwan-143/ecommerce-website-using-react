import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import WhishList from "../pages/WhishList";
import RootLayOut from "../components/rootLayOut/RootLayOut";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route element= {<RootLayOut/>}>
        <Route path="/" element={<>  <Home />  </>} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsDetails" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whishList" element={<WhishList/>} />
        <Route path="*" element = {<NotFound/>} />
      </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
