import { useState } from "react";

import styles from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = (props: Props) => {
  const [count, setCount] = useState(props.quantity || 0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section className={styles.itemRow}>
      <span
        className={styles.itemText}
        style={{ color: count === 1 ? "red" : "black" }}
      >
        {props.name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count || 0}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
