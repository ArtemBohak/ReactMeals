import React from "react";

import DecrementButton from "../UI/DecrementIncrementButton/DecrementButton";
import IncrementButton from "../UI/DecrementIncrementButton/IncrementButton";

import styles from "./ModalOrderItem.module.css";

export default function ModalOrderItem(props) {
  return (
    <React.Fragment>
      <li className={styles["modal-window-item"]}>
        <div className={styles["modal-window-item__data"]}>
          <h2>{props.meal}</h2>
          <div className={styles["modal-window-item__description"]}>
            <span>${props.price}</span>
            <span>x{props.quantity}</span>
          </div>
        </div>
        <div className={styles["modal-window-item__buttons"]}>
          <DecrementButton />
          <IncrementButton />
        </div>
      </li>
      <hr></hr>
    </React.Fragment>
  );
}
