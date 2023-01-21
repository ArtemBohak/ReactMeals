import React from "react";

import styles from "./Cart.module.css";

export default function Cart(props) {
  return (
    <div className={styles["cart"]}>
      <span className={`${styles["cart__icon"] + ' fa-solid fa-cart-shopping'}`}></span>
      <span className={styles["cart__quantity"]}>0</span>
    </div>
  );
}
