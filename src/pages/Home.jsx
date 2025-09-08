import Hero from "../components/layout/Hero";
import Products from "./Products";

function Home() {
  return (
    <div className="p-4">
      <Hero/>
      <Products/>
    </div>
  );
}

export default Home;