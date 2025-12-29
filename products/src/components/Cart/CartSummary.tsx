import { memo } from "react";
import type { ICartItem } from "../../types";
import style from "./style.module.css";
import CartItem from "./CartItem";
import { formatVND } from "../../utils/money";

interface Props {
  items: ICartItem[];
  updateCartItem: (item: ICartItem) => void;
}

const CartSummary = memo(({ items, updateCartItem = () => void 0 }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div className={style["cart-summary"]}>
      <h2>Cart Summary</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} updateCartItem={updateCartItem} />
        ))}
      </ul>
      <hr />
      <div className={style["cart-total"]}>
        <strong>Total:</strong> <span>{formatVND(total)}</span>
      </div>
    </div>
  );
});

export default CartSummary;
