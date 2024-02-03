import { BrowserRouter } from "react-router-dom";
import { Home, Store } from "../pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ProductProvider } from "../context/Productcontext";

describe("test homepage", () => {
  test("homepage should have explore button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Let's Explore");
  });

  test("homepage should have one image component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const productImage = screen.getByRole("img");
    expect(productImage.alt).toContain("hero-section");
  });
  test("clicking explore button renders store page", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <Home />
            <Store />
          </ProductProvider>
        </BrowserRouter>
      );
    });
    const button = screen.getByText("Let's Explore");
    fireEvent.click(button);

    const expectedText = screen.getByText("Ferrari Neo Cat Sneakers");
    expect(expectedText).toBeInTheDocument();
  });
});
