import { Item } from "../types/item.types";
import { ItemService, CategoryService } from "../service";

export const getItems = () => {
  const request = () => ({ type: "GET_ITEMS_REQUEST" });
  const success = (data: Item[]) => ({
    type: "GET_ITEMS_SUCCESS",
    payload: data,
  });
  const failure = (err: string) => ({ type: "GET_ITEMS_FAILURE", error: err });
  return (dispatch: CallableFunction) => {
    dispatch(request());
    ItemService.get()
      .then((res: any) => dispatch(success(res.data)))
      .catch((err: string) => dispatch(failure(err)));
  };
};

export const getCategories = () => {
  const request = () => ({ type: "GET_CATEGORIES_REQUEST" });
  const success = (data: string[]) => ({
    type: "GET_CATEGORIES_SUCCESS",
    payload: data,
  });
  const failure = (err: string) => ({
    type: "GET_CATEGORIES_FAILURE",
    error: err,
  });
  return (dispatch: CallableFunction) => {
    dispatch(request());
    CategoryService.get()
      .then((res: any) => dispatch(success(res.data)))
      .catch((err: string) => dispatch(failure(err)));
  };
};

export const toggleAddItem = () => {
  return {
    type: "TOGGLE_ADD_ITEM",
  };
};
export const toggleDeleteItem = () => {
  return {
    type: "TOGGLE_DELETE_ITEM",
  };
};
export const toggleDeleteCategory = () => {
  return {
    type: "TOGGLE_DELETE_CATEGORY",
  };
};
export const toggleAddCategory = () => {
  return {
    type: "TOGGLE_ADD_CATEGORY",
  };
};
export const setNextId = (id: number) => {
  return {
    type: "SET_NEXT_ID",
    payload: id,
  };
};
export const resetItemToEdit = () => {
  return {
    type: "RESET_ITEM_TO_EDIT",
  };
};
