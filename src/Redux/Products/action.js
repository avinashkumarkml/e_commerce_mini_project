import {
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_SUCCES,
  CURRENT_PRODUCT_LOADING,
  CURRENT_PRODUCT_ERROR,
  CURRENT_PRODUCT_SUCCES,
} from "./actionTypes";

const handleSuccess = (payload) => ({
  type: PRODUCT_SUCCES,
  payload,
});

const handleLoading = () => ({
  type: PRODUCT_LOADING,
});

const handleError = () => ({
  type: PRODUCT_ERROR,
});

const getData = () => (dispatch) => {
  dispatch(handleLoading());
  fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .then((res) => dispatch(handleSuccess(res)))
    .catch(() => dispatch(handleError()));
};

const handleCurrentProductSuccess = (payload) => ({
  type: CURRENT_PRODUCT_SUCCES,
  payload,
});

const handleCurrentProductLoading = () => ({
  type: CURRENT_PRODUCT_LOADING,
});

const handleCurrentProductError = () => ({
  type: CURRENT_PRODUCT_ERROR,
});

const getCurrentProductData = (id) => (dispatch) => {
  dispatch(handleCurrentProductLoading());
  fetch(`http://localhost:8000/products/${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(handleCurrentProductSuccess(res)))
    .catch(() => dispatch(handleCurrentProductError()));
};

export { getData, getCurrentProductData };
