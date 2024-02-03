import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Cart } from "../../components";
import { useProducts } from "../../context/Productcontext";
import "../ProductDetailPage/productpage.css";
import "../store/store.css";
import {
  IoIosArrowBack,
  AiOutlineStar,
  AiFillStar,
} from "../../components/Icons";
import { customizedData } from "../../components/constants";
import { toast } from "react-hot-toast";

export const ProductDetailPage = () => {
  const { filteredData, dispatch, state } = useProducts();
  const { productId } = useParams();
  const navigate = useNavigate();
  const { cartList } = state;

  const getProductDetails = (filteredData, productId) => {
    return filteredData.find((product) => product.id === productId);
  };

  let productToShow = getProductDetails(filteredData, productId);
  const [mainImg, setMainImg] = useState(productToShow?.image);

  useEffect(() => {
    setMainImg(productToShow?.image);
  }, [productToShow?.image]);

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
    <div className="product-store-container flex-center">
      {/* single product details  */}
      <div className="Single-product-container flex-center flex-column">
        <span>
          <IoIosArrowBack
            data-testid="backicon"
            className="arrow-icon"
            onClick={() => navigate("/")}
          />
          your design space
        </span>
        <div className="main-image-container flex-center ">
          <div className="image-with-rating flex-center flex-column">
            <img src={`${mainImg}`} data-testid="main-productimage" alt="" />
            <span className="rating flex-center">
              Rate product
              {[...new Array(5)].map((arr, index) => {
                return <AiOutlineStar key={index} className="rating-icon" />;
              })}
            </span>
          </div>
          <div className="three-image-container flex-center flex-column">
            <img
              data-testid="image-1"
              src={`${productToShow?.image1}`}
              onClick={() => setMainImg(productToShow?.image1)}
              alt={productToShow?.productName}
            />
            <img
              src={productToShow?.image2}
              onClick={() => setMainImg(productToShow?.image2)}
              alt={productToShow?.productName}
              data-testid="image-2"
            />
            <img
              src={productToShow?.image3}
              onClick={() => setMainImg(productToShow?.image3)}
              alt={productToShow?.productName}
              data-testid="image-3"
            />
          </div>
          <div className="customizable-property-container flex-center flex-column">
            <div className="name-with-tagline flex-center flex-column">
              <span className="title">{productToShow?.productName}</span>
              <span>{productToShow?.tagline}</span>
            </div>
            <div className="rating-with-reviews flex-center flex-column">
              <span className="rating-icon">
                {[...new Array(productToShow?.rating)].map((arr, index) => {
                  return <AiFillStar key={index} />;
                })}
              </span>
              <span>80 reviews</span>
            </div>
            <div className="price-with-discount flex-center flex-column">
              <span className="price">RS.{productToShow?.price} /-</span>
              <span className="discount-offer">
                Get an exclusive 20% off shopping with HDFC Bank
              </span>
            </div>
            <div className="front-data flex-center flex-column">
              {customizedData.map((item) => {
                return (
                  <div className="data-with-block flex-center" key={item}>
                    <span>{item.name}</span>
                    <div className="flex-center square gap-sm">
                      <span style={{ backgroundColor: "red" }}></span>
                      <span style={{ backgroundColor: "black" }}></span>
                      <span style={{ backgroundColor: "blue" }}></span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="size-chart flex-center">
              <div className="data-with-block flex-center">
                <span>Size</span>
                <div className="flex-center square gap-sm">
                  <span className="border-sm">7</span>
                  <span className="border-sm">8</span>
                  <span className="border-sm">9</span>
                  <span className="border-sm">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="buttons-container flex-center gap-sm"
          data-testid="buttonDiv"
        >
          <button>share design</button>
          <button onClick={() => addToCart(productToShow)}>add to cart</button>
        </div>
      </div>
      {/* Cart data container */}
      <Cart />
    </div>
  );
};
