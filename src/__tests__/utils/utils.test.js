import { products } from "../../Data/productData";
import { initialState } from "../../context/Productcontext";
import {
  sortProductByType,
  sortProductByTemplate,
  sortProductByCost,
} from "../../context/Reducer/utils";
import { v4 as uuidv4 } from "uuid";

sortProductByType;
describe("utils function's test case", () => {
  it("sortbytype dunction test", () => {
    const newState = {
      ...initialState,
      sortByType: ["Loafers"],
    };
    const result = sortProductByType(newState, products);
    expect(result.length).toBe(3);
  });

  it("sortbytype function test", () => {
    const newState = {
      ...initialState,
      sortByTemplate: ["2", "3"],
    };
    const result = sortProductByTemplate(newState, products);
    expect(result.length).toBe(4);

    //if template size is >4
    const newStateforTemplate = {
      ...initialState,
      sortByTemplate: ["4", "3"],
    };
    const result1 = sortProductByTemplate(newStateforTemplate, products);
    expect(result1.length).toBe(4);
  });

  it("sortbycost function test", () => {
    const newState = {
      ...initialState,
      sortByCost: [
        {
          id: uuidv4(),
          labelName: "Rs.1500-4000",
          minValue: 1500,
          maxValue: 4000,
        },

        {
          id: uuidv4(),
          labelName: "Rs.7001+",
          minValue: 7001,
          maxValue: Infinity,
        },
      ],
    };
    const result = sortProductByCost(newState, products);
    expect(result.length).toBe(4);
  });
});
