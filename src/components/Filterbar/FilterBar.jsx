import React from "react";
import { FiFilter } from "react-icons/fi";
import { useProducts } from "../../context/Productcontext";
import { costFilterData } from "../constants";
import "../Filterbar/filterbar.css";

export const FilterBar = () => {
  const { dispatch, state } = useProducts();

  const ClickHandler = (e) => {
    let alreadyChecked = e.target.checked;
    let checkedName = e.target.value;
    if (alreadyChecked) return { type: "SET_TYPE", payload: checkedName };
    else return { type: "UNSET_TYPE", payload: checkedName };
  };

  const templateClickHandler = (e) => {
    let checkedTemplate = e.target.checked;
    let templateSize = e.target.value;
    if (checkedTemplate) return { type: "SET_TEMPLATE", payload: templateSize };
    else return { type: "UNSET_TEMPLATE", payload: templateSize };
  };

  const costClickHandler = (e, price) => {
    let checkedCost = e.target.checked;
    if (checkedCost) return { type: "SET_PRICE", payload: price };
    else return { type: "UNSET_PRICE", payload: price };
  };

  return (
    <div className="filterbar-data flex-center flex-column gap-sm">
      <div className="filter-title flex-center">
        <h4>Filters</h4>
        <FiFilter className="icon" />
      </div>
      <div className="cost-data-container flex-center flex-column">
        <span className="cost-data f-bold">Cost</span>

        {costFilterData.map((price) => {
          return (
            <li key={price.id}>
              <label htmlFor={`${price.labelName}`}>
                <input
                  type="checkbox"
                  id={price.labelName}
                  value={price.labelName}
                  name={price.labelName}
                  checked={state.sortByCost.includes(price)}
                  onChange={(e) => dispatch(costClickHandler(e, price))}
                />
                {price.labelName}
              </label>
            </li>
          );
        })}
      </div>
      <div className="color-container flex-center flex-column">
        <span className="color-data f-bold">Color</span>
        <div className="flex-center gap-sm">
          {["red", "blue", "yellow", "green", "teal"].map((color) => {
            return (
              <span
                style={{ backgroundColor: color }}
                key={color}
                //checked={state.sortByColor.includes(color)}
                onClick={() =>
                  dispatch({ type: "SORT_BY_COLOR", payload: color })
                }
              ></span>
            );
          })}
        </div>
      </div>
      <div className="design-container flex-center flex-column">
        <span className="design-data f-bold">Design Template</span>

        {[2, 3, 4].map((size, index) => {
          return (
            <li key={size}>
              <label htmlFor={`${size}`}>
                <input
                  type="checkbox"
                  id={size}
                  value={index === 2 ? 4 : size}
                  name="design"
                  checked={state.sortByTemplate.includes(size.toString())}
                  onChange={(e) => dispatch(templateClickHandler(e))}
                />
                {index === 2 ? `${size}+` : size}
              </label>
            </li>
          );
        })}
      </div>
      <div className="product-type-container flex-center flex-column">
        <span className="product-type f-bold">Type</span>
        {["Loafers", "Sneakers"].map((type) => {
          return (
            <li key={type}>
              <label htmlFor={`${type}`}>
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  name={type}
                  onChange={(e) => dispatch(ClickHandler(e))}
                  checked={state.sortByType.includes(type)}
                />
                {type}
              </label>
            </li>
          );
        })}
      </div>
    </div>
  );
};
