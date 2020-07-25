import axios from "axios";
import { Item } from "./types/item.types";

const baseUrl = "https://onetech-test-back.herokuapp.com";
export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ItemService = {
  get: () => instance.get("/"),
  getNextId: () => instance.get("/item"),
  getByCategory: (category: string) =>
    instance.get("/category", { params: { category } }),
  post: (item: Item) => instance.put("/items", item),
  put: (item: Item) => instance.put("/items", item),
  delete: (id: number) => instance.delete("/items", { data: { id } }),
};

export const CategoryService = {
  get: () => instance.get("/categories"),
  post: (category: string) =>
    instance.post("/categories", { category: category }),
  delete: (category: string) =>
    instance.delete("/categories", { data: { category } }),
};
