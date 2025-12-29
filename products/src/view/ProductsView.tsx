import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";

function ProductsView() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const { isFetching, products } = useProducts(search, category);

  return (
    <>
      <div className="app-container">
        <header className="search-header">
          <SearchBar />
        </header>
        <main className="grid-layout">
          <section className="product-section">
            <h2>Products</h2>
            {isFetching ? (
              "Loading..."
            ) : products.length ? (
              <ProductList items={products} />
            ) : (
              <div>There are no products to display</div>
            )}
          </section>
          <aside className="cart-section">
            <h2>testttt</h2>
          </aside>
        </main>
      </div>
    </>
  );
}

export default ProductsView;
