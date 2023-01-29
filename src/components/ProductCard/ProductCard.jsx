import React from "react";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/Productcontext";
import "../ProductCard/productcard.css";

export const ProductCard = ({ product }) => {
  const { productName, price, rating, image } = product;
  const { dispatch, state } = useProducts();
  const { cartList } = state;

  const addToCart = (productToShow) => {
    const newItem = cartList.find((item) => item.id === productToShow.id);
    if (newItem) {
      dispatch({ type: "INCREMENT", payload: productToShow });
      toast("item quantity incremented", { icon: "✔" });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: productToShow });
    }
  };

  return (
    <div className="card-container flex-center flex-column">
      <Link to={`/product/${product.id}`}>
        <div className="product-image-container">
          <img src={image} alt={productName} />
        </div>
      </Link>
      <div
        className="card-details-container flex-center flex-column"
        onClick={() => addToCart(product)}
      >
        <p className="product-name">{productName}</p>
        <div className="price-and-rating flex-center">
          <span>RS.{price} /-</span>
          <span className="color-rating">
            {[...new Array(rating)].map((arr, index) => {
              return <AiFillStar key={index} />;
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
