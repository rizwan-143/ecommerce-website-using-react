import Categories from "../components/categories/Categories";
import ProductList from "../components/product/ProductList";
function Products() {
  return (
    <div>
      <Categories/>
      <h2 className="text-xl font-bold p-4">Products</h2>
      <ProductList />
    </div>
  );
}

export default Products;
