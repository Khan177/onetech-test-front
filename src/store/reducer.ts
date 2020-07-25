const initialState = {
  items: [],
  loadingOfItems: false,
  errorOfItems: null,
  categories: [],
  loadingOfCategories: false,
  errorOfCategories: null,
  tempItemId: 0,
  itemToAddEdit: { id: 0, category: "", name: "", buyPrice: 0, price: 0 },
  itemToDelete: { id: 0, category: "", name: "", buyPrice: 0, price: 0 },
  categoryToDelete: "",
  isItemAdding: false,
  isItemDeleting: false,
  isCategoryAdding: false,
  isCategoryDeleting: false,
  nextId: 0,
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
    case "TOGGLE_ADD_ITEM":
      return {
        ...state,
        isItemAdding: !state.isItemAdding,
      };
    case "TOGGLE_DELETE_ITEM":
      return {
        ...state,
        isItemDeleting: !state.isItemDeleting,
      };
    case "TOGGLE_ADD_CATEGORY":
      return {
        ...state,
        isCategoryAdding: !state.isCategoryAdding,
      };
    case "TOGGLE_DELETE_CATEGORY":
      return {
        ...state,
        isCategoryDeleting: !state.isCategoryDeleting,
      };
    case "RESET_ITEM_TO_EDIT":
      return {
        ...state,
        itemToAddEdit: {
          id: state.nextId,
          category: "",
          name: "",
          buyPrice: 0,
          price: 0,
        },
      };
    case "SET_NEXT_ID":
      return {
        ...state,
        nextId: action.payload,
        itemToAddEdit: { ...state.itemToAddEdit, id: action.payload },
      };
    case "SET_ITEM_TO_DELETE":
      return {
        ...state,
        itemToDelete: action.payload,
      };
    case "SET_CATEGORY_TO_DELETE":
      return {
        ...state,
        categoryToDelete: action.payload,
      };
    case "SET_ITEM_TO_EDIT":
      return {
        ...state,
        itemToAddEdit: action.payload,
      };
    default:
      return { ...state };
  }
};
