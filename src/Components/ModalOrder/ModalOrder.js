import React, { useContext } from "react";

import styles from "./ModalOrder.module.css";
import { GlobalContext } from "../Contexts/GlobalContext";

import ModalOrderItem from "./ModalOrderItem";
import Card from "../CardStyle/Card";
import CloseButton from "../UI/AddButton/CloseButton";

export default function ModalOrder(props) {
  function modalOrderClickHandler(event) {
    if (event.target == event.currentTarget) {
      props.hideModal();
    } else return;
  }

  if (props.cartQuantity) {
    return (
      <div
        onClick={modalOrderClickHandler}
        className={
          props.isShown
            ? `${styles["modal"]} ${styles["active"]}`
            : styles["modal"]
        }
      >
        <Card className={styles["modal-window"]}>
          <div className={styles["modal-window__total"]}>
            <span>Total Amount</span>
            <span>$00.00</span>
          </div>
          <div className={styles["modal-window__buttons"]}>
            <CloseButton hideModal={props.hideModal}/>
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div onClick={modalOrderClickHandler} className={styles["modal"]}>
        <Card className={styles["modal-window"]}>
          <div className={styles["modal-window__total"]}>
            <span>Total Amount</span>
            <span>$00.00</span>
          </div>
          <div className={styles["modal-window__buttons"]}>
            <CloseButton hideModal={props.hideModal} />
          </div>
        </Card>
      </div>
    );
  }
}
