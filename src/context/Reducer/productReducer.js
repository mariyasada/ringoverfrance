export const productReducer = (state, action) => {
  console.log(action);
  switch (action.type) {

    case "SET_TYPE":
      return { ...state, sortByType: [...state.sortByType, action.payload] };

    case "UNSET_TYPE":
      return {
        ...state,
        sortByType: state.sortByType.filter(
          (type) => type !== action.payload
        )
      };

      case "SORT_BY_COLOR":
        return {...state,sortByColor:action.payload}
        
     case "SET_TEMPLATE":
      return { ...state, sortByTemplate: [...state.sortByTemplate, action.payload] };

    case "UNSET_TEMPLATE":
      return {
        ...state,
        sortByTemplate: state.sortByTemplate.filter(
          (type) => type !== action.payload
        )
      };
      case "SET_PRICE":
      return { ...state, sortByCost:action.payload};

    case "UNSET_PRICE":
      return {
        ...state,
        sortByCost: state.sortByCost.filter(
          (cost) => cost !== action.payload
        )
      };

      case "ADD_TO_CART":
        return {...state,cartList:[...state.cartList,{...action.payload,qty:1}]};

     

        case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: [
          ...state.cartList.filter((item) => item.id !== action.payload)
        ]
      };


    default:
      return state;
  }
};