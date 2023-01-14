const composeFunction = (state, functionList) => (products) => {
  return functionList.reduce((acc, currentFunction) => {
    return currentFunction(state, acc);
  }, products);
};

const sortProductByColor = (state, products) => {
  if(state.sortByColor){
    return products.filter((item)=>item.color === state.sortByColor);
  }
  else return products;
};

const sortProductByType = (state, products) => {
  let typeList = state.sortByType;
  return typeList.length === 0
    ? products
    : products.filter((item) =>
        typeList.some((type) => type === item.type)
      );
};

const sortProductByTemplate = (state, products) => {
  let templateList = state.sortByTemplate;
  return templateList.length === 0
    ? products
    : products.filter((item) =>
        templateList.some((size) => Number(size)>=4 ? Number(size)<=Number(item.size):size === item.size )
      );
};
const sortProductByCost = (state, products) => {
  let cost=state.sortByCost;
  let costList=cost.split("-");
  return costList.length === 0
    ? products
    : products.filter((item) =>
        costList.some((price) => price <= item.price || price>=item.price )
      );
};

const functionList = [
    sortProductByColor,
    sortProductByTemplate,
   sortProductByType  
];

export { composeFunction, functionList };