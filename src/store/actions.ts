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
