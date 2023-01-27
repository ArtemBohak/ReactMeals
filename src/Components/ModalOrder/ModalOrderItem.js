import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

import DecrementButton from "../UI/DecrementIncrementButton/DecrementButton";
import IncrementButton from "../UI/DecrementIncrementButton/IncrementButton";

import styles from "./ModalOrderItem.module.css";

export default function ModalOrderItem(props) {
  const ctx = useContext(GlobalContext);

  function clickDeletingHandler() {
    ctx.deleteOldOrder({meal: props.meal});
  }

  function clickAddingHandler() {
    ctx.addNewOrder({meal: props.meal, price: props.price, quantity: 1});
  }

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
          <DecrementButton onClick={clickDeletingHandler} />
          <IncrementButton onClick={clickAddingHandler} />
        </div>
      </li>
      <hr></hr>
    </React.Fragment>
  );
}
