import { useCallback, useEffect, useState } from "react";
import type { IProduct } from "../types";
import { fetchAvailableProducts } from "../api/ProductApi";
import { debounce } from "../lib/debounce";

export function useProducts(searchTerm = "", category = "all") {
  const [isFetching, setFetching] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchListProducts = useCallback(
    async (search: string, categoryParams: string) => {
      setFetching(true);
      try {
        const items = await fetchAvailableProducts(search, categoryParams);
        setProducts(items);
      } finally {
        setFetching(false);
      }
    },
    []
  );

  const debouncedFetchProducts = useCallback(debounce(fetchListProducts, 400), [
    fetchListProducts,
  ]);

  useEffect(() => {
    debouncedFetchProducts(searchTerm, category);
  }, [searchTerm, category]);

  return { isFetching, products };
}
