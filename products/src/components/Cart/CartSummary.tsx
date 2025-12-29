import { memo } from "react";
import type { ICartItem } from "../../types";

interface Props {
  items: ICartItem[];
  updateCartItem: (item: ICartItem) => void;
}

const CartSummary = memo(({ items, updateCartItem = () => void 0 }: Props) => {
  return (
    <div>
      <h2>Cart Summary</h2>
      <ul>
        {items.map((item) => (
          <div>
            <li>{item.name}</li>
            <span>{item.qty}</span>
          </div>
        ))}
      </ul>
    </div>
  );
});

export default CartSummary;
