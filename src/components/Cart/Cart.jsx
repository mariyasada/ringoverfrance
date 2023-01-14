import React from "react";
import "../../pages/store/store.css";
import {
  RiShoppingBasketFill,
  BiMap,
  SlCalender,
} from "../../components/Icons";
import { useProducts } from "../../context/Productcontext";
import { CartCard } from "../CartProduct/CartCard";

export const Cart = () => {
  const { filteredData, state } = useProducts();
  const { cartList } = state;
  return (
    <div className="cart-data-container">
      <div className="cart flex-center">
        <h2>CART</h2>
        <RiShoppingBasketFill />
      </div>
      <div className="data-container flex-center flex-column">
        {cartList.length === 0 ? (
          <span>what's stopping you, designer?</span>
        ) : (
          cartList.map((item) => {
            return <CartCard product={item} key={item.id} />;
          })
        )}
      </div>
      <div className="flex-center flex-column extra-details gap-sm">
        <div className="options flex-center gap-sm">
          <span className="flex-center gap-xsm">
            <BiMap />
            Home
          </span>
          <span className="flex-center gap-xsm ">
            <SlCalender />
            select Date
          </span>
        </div>
        <button className="order-now">Order Now</button>
      </div>
    </div>
  );
};
