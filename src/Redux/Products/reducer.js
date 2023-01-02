import {
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_SUCCES,
  CURRENT_PRODUCT_LOADING,
  CURRENT_PRODUCT_ERROR,
  CURRENT_PRODUCT_SUCCES,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  products: [],
  currentProduct: {},
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };

    case PRODUCT_ERROR:
      return { ...state, loading: false, error: true };

    case PRODUCT_SUCCES:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };

    case CURRENT_PRODUCT_LOADING:
      return { ...state, loading: true };

    case CURRENT_PRODUCT_ERROR:
      return { ...state, loading: false, error: true };

    case CURRENT_PRODUCT_SUCCES:
      return {
        ...state,
        loading: false,
        error: false,
        currentProduct: action.payload,
      };

    default:
      return state;
  }
};

// export {productRenderer}
