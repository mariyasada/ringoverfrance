import { createContext, useContext, useState,useReducer, useEffect } from "react";
import { products } from "../Data/productData";
import { productReducer } from "./Reducer/productReducer";
import { functionList ,composeFunction} from "./Reducer/utils";


const ProductContext = createContext();


const initialState={
    cartList:[],
    sortByType:"",
    sortByColor:"",
    sortByTemplate:"",
    sortByCost:""
}

const ProductProvider = ({ children }) => {
const [productsData, setProductsData] = useState(products);
const [state, dispatch] = useReducer(productReducer, initialState);
const filteredData = composeFunction(state, functionList)([...products]);

useEffect(()=>{

},[productsData])
  
  return (
    <ProductContext.Provider value={{ productsData,filteredData,state,dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };