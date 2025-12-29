import { PRODUCTS } from "../constants";
import { handleAsyncErrors } from "../lib/handleErrors";
import type { IProduct } from "../types";

export function fakeFetchProducts(searchTerm = "", category = "all") {
  return new Promise<IProduct[]>((resolve) => {
    setTimeout(() => {
      let items = PRODUCTS;
      if (category && category !== "all") {
        items = items.filter((item) => item.category === category);
      }
      if (searchTerm) {
        items = items.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      resolve(items);
    }, 1000);
  });
}

export async function fetchAvailableProducts(
  searchTerm = "",
  category = "all"
) {
  const [error, result] = await handleAsyncErrors(
    fakeFetchProducts(searchTerm, category)
  );
  if (error) {
    // TODO
  }
  const items = result || [];
  return items.filter((item) => item.isPrescription);
}
