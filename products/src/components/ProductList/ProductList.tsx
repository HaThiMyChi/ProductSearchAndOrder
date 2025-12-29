import { memo } from "react";
import type { IProduct } from "../../types";
import style from "./style.module.css";
import ProductCard from "./ProductCard";

interface Props {
  items: IProduct[];
}
const ProductList = memo(({ items }: Props) => {
  return (
    <>
      <div className={style["product-grid"]}>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
});

export default ProductList;
