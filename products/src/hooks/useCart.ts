import { useCallback, useState } from "react";
import type { ICartItem, IProduct } from "../types";

export function useCart() {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const addToCart = useCallback((product: IProduct) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const newCart = [...prev];
        newCart[index] = {
          ...newCart[index],
          qty: Math.min(newCart[index].qty + 1, 99),
        };
        return newCart;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const updateCartItem = useCallback((cartItem: ICartItem) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === cartItem.id);
      if (index !== -1) {
        const newCart = [...prev];
        newCart[index] = { ...newCart[index], qty: Math.min(cartItem.qty, 99) };
        return newCart;
      }
      return prev;
    });
  }, []);

  return { cart, addToCart, updateCartItem };
}
