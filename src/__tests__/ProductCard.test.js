import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Cart, CartCard, ProductCard } from "../components";
import { products } from "../Data/productData";
import "@testing-library/jest-dom";
import { ProductProvider } from "../context/Productcontext";
import { BrowserRouter } from "react-router-dom";
import { ProductDetailPage } from "../pages";
import { act } from "react-dom/test-utils";

describe("test productCard", () => {
  test("Product card should render correct data", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <ProductCard product={products[0]} />
        </ProductProvider>
      </BrowserRouter>
    );
    const name = screen.getByText("Ferrari Neo Cat Sneakers");
    expect(name).toBeInTheDocument();
  });
  test("when clicking on productcard it should render productdetailpage", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <ProductCard product={products[0]} />
          <ProductDetailPage />
        </ProductProvider>
      </BrowserRouter>
    );
    const productCard = screen.getByTestId("product-card");
    fireEvent.click(productCard);

    const cartbutton = screen.getByRole("button", { name: "add to cart" });
    expect(cartbutton).toBeInTheDocument();
  });
  test("when clicking productCard's name div,the product should added to the cart component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <ProductCard product={products[0]} />
            <Cart />
          </ProductProvider>
        </BrowserRouter>
      );
    });
    const cartPlaceholderText = screen.getByText(
      "what's stopping you, designer?"
    );
    expect(cartPlaceholderText).toBeInTheDocument();

    const clickableDiv = screen.getByTestId("addtocart-div");
    fireEvent.click(clickableDiv);
    expect(cartPlaceholderText).not.toBeInTheDocument();

    fireEvent.click(clickableDiv);

    await waitFor(() => {
      expect(screen.getAllByTestId("cart-item").length).toBe(1);
    });
  });

  test("test cartCard", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <CartCard product={products[0]} />
            <Cart />
          </ProductProvider>
        </BrowserRouter>
      );
    });
    const deleteIcon = screen.getByTestId("deleteIcon");
    fireEvent.click(deleteIcon);

    expect(
      screen.getByText("what's stopping you, designer?")
    ).toBeInTheDocument();
  });
});
