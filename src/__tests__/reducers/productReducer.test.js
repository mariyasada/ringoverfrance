import { products } from "../../Data/productData";
import { initialState } from "../../context/Productcontext";
import { productReducer } from "../../context/Reducer/productReducer";
import { v4 as uuidv4 } from "uuid";

describe("test reducer functions", () => {
  test("should be filter by price", () => {
    const expectedState = {
      ...initialState,
      sortByCost: [
        { labelName: "Rs.1500-4000", minValue: 1500, maxValue: 4000 },
      ],
    };

    const state = productReducer(initialState, {
      type: "SET_PRICE",
      payload: { labelName: "Rs.1500-4000", minValue: 1500, maxValue: 4000 },
    });
    expect(state).toEqual(expectedState);
  });
  test("should be filter by template", () => {
    const expectedState = {
      ...initialState,
      sortByTemplate: [2],
    };

    const state = productReducer(initialState, {
      type: "SET_TEMPLATE",
      payload: 2,
    });
    expect(state).toEqual(expectedState);
  });
  test("unset type filter", () => {
    const newState = { ...initialState, sortByType: ["Loafers"] };
    const expectedState = {
      ...initialState,
      sortByType: [],
    };
    const state = productReducer(newState, {
      type: "UNSET_TYPE",
      payload: "Loafers",
    });
    expect(state).toEqual(expectedState);
  });
  test("unset templatetype filter", () => {
    const newState = { ...initialState, sortByTemplate: [3] };
    const expectedState = {
      ...initialState,
      sortByTemplate: [],
    };
    const state = productReducer(newState, {
      type: "UNSET_TEMPLATE",
      payload: 3,
    });
    expect(state).toEqual(expectedState);
  });
  test("unset PRICE filter", () => {
    const newState = {
      ...initialState,
      sortByCost: [
        {
          id: uuidv4(),
          labelName: "Rs.1500-4000",
          minValue: 1500,
          maxValue: 4000,
        },
      ],
    };
    const expectedState = {
      ...initialState,
      sortByCost: [],
    };
    const state = productReducer(newState, {
      type: "UNSET_PRICE",
      payload: {
        id: uuidv4(),
        labelName: "Rs.1500-4000",
        minValue: 1500,
        maxValue: 4000,
      },
    });
    expect(state).toEqual(expectedState);
  });
  test("Remove from cart", () => {
    const newState = { ...initialState, cartList: [products[0]] };
    const expectedState = {
      ...initialState,
      cartList: [],
    };
    const state = productReducer(newState, {
      type: "REMOVE_FROM_CART",
      payload: products[0],
    });
    expect(state).toEqual(expectedState);
  });
  test("increment a quantity", () => {
    const newState = {
      ...initialState,
      cartList: [{ ...products[0], qty: 1 }, products[1]],
    };
    const expectedState = {
      ...initialState,
      cartList: [{ ...products[0], qty: 2 }, products[1]],
    };
    const state = productReducer(newState, {
      type: "INCREMENT",
      payload: products[0],
    });
    expect(state).toEqual(expectedState);
  });
  test("should return initial state", () => {
    const expectedState = initialState;
    const state = productReducer(initialState, {
      type: "UNKNOWN",
    });
    expect(state).toEqual(expectedState);
  });
});
