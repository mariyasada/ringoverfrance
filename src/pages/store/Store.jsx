import React from "react";
import { Cart, FilterBar } from "../../components/index";
import { ProductCard } from "../../components/index";
import "../store/store.css";
import { BsSearch } from "../../components/Icons";
import { useProducts } from "../../context/Productcontext";

export const Store = () => {
  const { filteredData } = useProducts();
  return (
    <div className="product-store-container flex-center">
      <div className="filterbar-container">
        <FilterBar />
      </div>
      <div className="product-with-title flex-center flex-column">
        <div className="shoes-with-search flex-center">
          <h2>SHOES</h2>
          <div className="flex-center gap-sm">
            <BsSearch />
            <button className="sort-by-button">sort by</button>
          </div>
        </div>

        <div className="product-data-container">
          {filteredData?.length === 0 ? (
            <p className="error-msg">Oops !! Don't have any products</p>
          ) : (
            filteredData?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          )}
        </div>
      </div>
      <Cart />
    </div>
  );
};
