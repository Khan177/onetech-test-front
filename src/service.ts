import axios from "axios";
import { Item } from "./types/item.types";

const baseUrl = "https://localhost:3030/";
const categoriesUrl = `${baseUrl}categories`;

export const ItemService = {
  get: () => axios.get(baseUrl),
  getByCategory: (category: string) =>
    axios.get(
      `${baseUrl}/:${category}
    `,
      { params: { category } }
    ),
  post: (item: Item) => axios.post(baseUrl, { item }),
  put: (item: Item) => axios.put(baseUrl, { item }),
  delete: (id: number) => axios.put(baseUrl, { data: { id } }),
};

export const CategoryService = {
  get: () => axios.get(categoriesUrl),
  post: (category: string) => axios.post(categoriesUrl, { category }),
  delete: (category: string) =>
    axios.delete(categoriesUrl, { data: { category } }),
};
