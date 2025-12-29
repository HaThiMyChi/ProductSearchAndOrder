import { memo, type ChangeEvent } from "react";
import type { ICartItem } from "../../types";
import style from "./style.module.css";
import { formatVND } from "../../utils/money";

interface Props {
  item: ICartItem;
  updateCartItem: (item: ICartItem) => void;
}

const CartItem = memo(({ item, updateCartItem }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, item: ICartItem) => {
    const value = parseInt(e.target.value);
    if (typeof value === "number" && !Number.isNaN(value) && value >= 0) {
      updateCartItem({ ...item, qty: value });
    }
  };
  return (
    <li className={style["cart-item"]}>
      <span className={style["item-name"]}>{item.name}</span>
      <input
        type="number"
        min="0"
        max="99"
        value={item.qty}
        onChange={(e) => handleChange(e, item)}
      />
      <span className={style["item-price"]}>
        {formatVND(item.price * item.qty)}
      </span>
    </li>
  );
});

export default CartItem;
