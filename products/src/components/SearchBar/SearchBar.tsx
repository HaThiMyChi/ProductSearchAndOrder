import type { ChangeEvent } from "react";
import style from "./style.module.css";

interface Props {
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  categories?: string[];
  category?: string;
}

const SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  onSelectChange,
  categories = [],
  category,
}: Props) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style["search-input"]}
      />
      {categories.length && (
        <select
          value={category}
          onChange={onSelectChange}
          className={style["search-select"]}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default SearchBar;
