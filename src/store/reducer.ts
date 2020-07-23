const initialState = {
  items: [],
  loadingOfItems: false,
  errorOfItems: null,
  categories: [],
  loadingOfCategories: false,
  errorOfCategories: null,
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_ITEMS_REQUEST":
      return {
        ...state,
        loadingOfItems: true,
        errorOfItems: null,
      };
    case "GET_ITEMS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loadingOfItems: false,
        errorOfItems: null,
      };
    case "GET_ITEMS_FAILURE":
      return {
        ...state,
        items: [],
        loadingOfItems: false,
        errorOfItems: action.error,
      };
    case "GET_CATEGORIES_REQUEST":
      return {
        ...state,
        loadingOfCategories: true,
        errorOfCategories: null,
      };
    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
        loadingOfCategories: false,
        errorOfCategories: null,
      };
    case "GET_CATEGORIES_FAILURE":
      return {
        ...state,
        categories: [],
        loadingOfCategories: false,
        errorOfCategories: action.error,
      };
    default:
      return { ...state };
  }
};
