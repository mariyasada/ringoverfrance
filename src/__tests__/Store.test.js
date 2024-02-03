import { BrowserRouter } from "react-router-dom";
import { ProductProvider, initialState } from "../context/Productcontext";
import { Store } from "../pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("test case for store page", () => {
  test("Should render 6 cards if no filter selected", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <Store />
        </ProductProvider>
      </BrowserRouter>
    );
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards.length).toBe(6);
  });

  test("Should have Store and sortby button", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <Store />
        </ProductProvider>
      </BrowserRouter>
    );
    const name = screen.getByText("SHOES");
    expect(name).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "sort by" });
    expect(button).toBeInTheDocument();
  });

  test("renders all products", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <Store />
        </ProductProvider>
      </BrowserRouter>
    );

    // Verify that the error message is rendered
    expect(screen.getByText("casual sneakers")).toBeInTheDocument();
    expect(screen.getByText("Green Loafers")).toBeInTheDocument();
  });

  test("displays error message when filteredData is empty", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <Store />
          </ProductProvider>
        </BrowserRouter>
      );
    });

    // Verify that the error message is rendered
    const tealColorDiv = screen.getByTestId("teal");
    fireEvent.click(tealColorDiv);
    expect(
      screen.getByText("Oops !! Don't have any products")
    ).toBeInTheDocument();
  });
});
