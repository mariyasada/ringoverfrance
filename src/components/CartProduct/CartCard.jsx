import React from "react";
import "../CartProduct/cartcard.css";
import { GiCancel } from "react-icons/gi";
import { useProducts } from "../../context/Productcontext";

export const CartCard = ({ product }) => {
  const { image, productName, price, tagline } = product;
  const { dispatch } = useProducts();
  return (
    <div className="cart-card-container flex-center">
      <div className="img-container">
        <img src={image} alt={productName} />
      </div>
      <div className="card-details flex-center flex-column">
        <div className="name-and-title flex-center flex-column">
          <h4>{productName}</h4>
          <span>{tagline}</span>
        </div>
        <span>RS.{price} /-</span>
      </div>
      <span
        className="cancel-button"
        onClick={() =>
          dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
        }
      >
        <GiCancel />
      </span>
    </div>
  );
};
