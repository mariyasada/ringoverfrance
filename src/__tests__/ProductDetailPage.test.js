import { BrowserRouter } from "react-router-dom";
import { ProductProvider, initialState } from "../context/Productcontext";
import { ProductDetailPage, Store } from "../pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Toaster } from "react-hot-toast";

// if getbytext is not matches then it throws and error
// if queryByText is not present the it returns null means not throwing an error test case passed based on some condition

describe("test productdetails page", () => {
  it("should have title and two buttons", () => {
    render(
      <BrowserRouter>
        <ProductProvider>
          <ProductDetailPage />
        </ProductProvider>
      </BrowserRouter>
    );
    const name = screen.getByText("your design space");
    expect(name).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);
  });

  it("when clicking back button render store page", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <ProductDetailPage />
            <Store />
          </ProductProvider>
        </BrowserRouter>
      );
    });
    const title = screen.getByText("your design space");
    expect(title).toBeInTheDocument();

    const backIcon = screen.getByTestId("backicon");
    fireEvent.click(backIcon);

    expect(screen.getByText("SHOES")).toBeInTheDocument();
  });

  it("addtocart button should be clickable", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <ProductDetailPage />
            <Toaster />
          </ProductProvider>
        </BrowserRouter>
      );
    });

    const cartPlaceholderText = screen.getByText(
      "what's stopping you, designer?"
    );
    expect(cartPlaceholderText).toBeInTheDocument();
    const addtocartbutton = screen.getByRole("button", { name: "add to cart" });
    fireEvent.click(addtocartbutton);
    await waitFor(() => {
      expect(cartPlaceholderText).not.toBeInTheDocument();
    });
    // NOTE:ASK SOMEONE ABOUT THIS
    //clicking addtocart button for second time
    // fireEvent.click(addtocartbutton);
    // await waitFor(() => {
    //   expect(screen.getByTestId("toaster")).toBeInTheDocument();
    // });
  });
  test("clicking side product image should render on main image", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <ProductDetailPage />
          </ProductProvider>
        </BrowserRouter>
      );
    });
    // test if clicking one image render the src of that image
    const image1 = screen.getByTestId("image-1");
    fireEvent.click(image1);

    const mainProductImage = screen.getByTestId("main-productimage");
    expect(mainProductImage).toHaveAttribute("src");
    expect(mainProductImage.getAttribute("src")).not.toBeNull();

    const image2 = screen.getByTestId("image-2");
    fireEvent.click(image2);

    expect(mainProductImage).toHaveAttribute("src");
    expect(mainProductImage.getAttribute("src")).not.toBeNull();

    //image 3
    const image3 = screen.getByTestId("image-3");
    fireEvent.click(image3);

    expect(mainProductImage).toHaveAttribute("src");
    expect(mainProductImage.getAttribute("src")).not.toBeNull();
  });
});
