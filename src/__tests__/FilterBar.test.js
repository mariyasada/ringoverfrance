import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FilterBar } from "../components";
import { ProductProvider, initialState } from "../context/Productcontext";
import { productReducer } from "../context/Reducer/productReducer";
import { Store } from "../pages";
import { BrowserRouter } from "react-router-dom";
import {
  ClickHandler,
  costClickHandler,
  templateClickHandler,
} from "../components/Filterbar/FilterBar";
import { act } from "react-dom/test-utils";

describe("filterbar should render or not", () => {
  test("should have filters title", () => {
    render(
      <ProductProvider>
        <FilterBar />
      </ProductProvider>
    );
    const title = screen.getByText("Filters");
    expect(title).toBeInTheDocument();
  });

  test("test clickhandler function", async () => {
    const dispatch = jest.fn();
    await act(async () => {
      render(
        <BrowserRouter>
          <ProductProvider>
            <Store />
          </ProductProvider>
        </BrowserRouter>
      );
    });
    // loafers

    const expectedState = {
      ...initialState,
      sortByType: ["Loafers"],
    };
    const state = productReducer(initialState, {
      type: "SET_TYPE",
      payload: "Loafers",
    });
    expect(state).toEqual(expectedState);

    // this is how we can test
    const shoesData = {
      target: {
        checked: true,
        value: "Loafers",
      },
    };
    const result = ClickHandler(shoesData);
    expect(result).toEqual({ type: "SET_TYPE", payload: "Loafers" });

    // unset type
    const unset_shoesData = {
      target: {
        checked: false,
        value: "Loafers",
      },
    };
    const unsetShoesType = ClickHandler(unset_shoesData);
    expect(unsetShoesType).toEqual({ type: "UNSET_TYPE", payload: "Loafers" });

    // test templateclickHandler
    const selectedTemplateData = {
      target: {
        checked: true,
        value: 2,
      },
    };
    const selectedTempState = templateClickHandler(selectedTemplateData);
    expect(selectedTempState).toEqual({ type: "SET_TEMPLATE", payload: 2 });

    const unselectedTemplateData = {
      target: {
        checked: false,
        value: 2,
      },
    };
    const unSelectedTempState = templateClickHandler(unselectedTemplateData);
    expect(unSelectedTempState).toEqual({
      type: "UNSET_TEMPLATE",
      payload: 2,
    });

    // test price click handler filter
    const selectedPrice = {
      target: { checked: true },
    };
    const priceValue = {
      labelName: "Rs.1500-4000",
      minValue: 1500,
      maxValue: 4000,
    };
    const selectedPriceState = costClickHandler(selectedPrice, priceValue);
    expect(selectedPriceState).toEqual({
      type: "SET_PRICE",
      payload: priceValue,
    });
    // unselecte the price checkbox
    const unselectedPrice = {
      target: { checked: false },
    };

    const unselectedPriceState = costClickHandler(unselectedPrice, priceValue);
    expect(unselectedPriceState).toEqual({
      type: "UNSET_PRICE",
      payload: priceValue,
    });

    //test clear filter function
    const clearFilterElem = screen.getByTestId("clear-filters");
    fireEvent.click(clearFilterElem);
    expect(screen.getAllByTestId("product-card").length).toBe(6);

    //check whether clicking on loafers should render all loafers or not
    const loafersinput = screen.getByTestId("shoes-Loafers");
    fireEvent.change(loafersinput, { target: { checked: true } });
    // expect(dispatch).toHaveBeenCalledWith(ClickHandler);
    // await waitFor(() => {
    //   expect(screen.getAllByTestId("product-card").length).toBe(3);
    // });
  });
});
