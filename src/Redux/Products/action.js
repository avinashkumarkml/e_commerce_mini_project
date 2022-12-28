const storeData = (payload) => ({
  type: "STORE_DATA",
  payload,
});

const handleLoading = () => ({
  type: "IS_LOADING",
});

const handleError = () => ({
  type: "IS_ERROR",
});

const getData = () => (dispatch) =>{
  dispatch(handleLoading());
  fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    .catch(() => dispatch(handleError()));
};

const storeCurrentProductData = (payload) => ({
  type: "CURRENT_PRODUCT_SUCCES",
  payload,
});

const handleCurrentProductLoading = () => ({
  type: "CURRENT_PRODUCT_LOADING",
});

const handleCurrentProductError = () => ({
  type: "CURRENT_PRODUCT_ERROR",
});

const getCurrentProductData = (id) => (dispatch) =>{
  dispatch(handleCurrentProductLoading());
  fetch(`http://localhost:8000/products/${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(storeCurrentProductData(res)))
    .catch(() => dispatch(handleCurrentProductError()));
};

export {getData,getCurrentProductData};
