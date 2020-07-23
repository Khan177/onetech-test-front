import axios from "axios";
import { Item } from "./types/item.types";

const baseUrl = "https://localhost:3030";
export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ItemService = {
  get: () => instance.get("/"),
  getByCategory: (category: string) =>
    instance.get("/:category", { params: { category } }),
  post: (item: Item) => instance.post("/", item),
  put: (item: Item) => instance.put("/", item),
  delete: (id: number) => instance.put("/", { data: { id } }),
};

export const CategoryService = {
  get: () => instance.get("/categories"),
  post: (category: string) => instance.post("/categories", category),
  delete: (category: string) =>
    instance.delete("/categories", { data: { category } }),
};
