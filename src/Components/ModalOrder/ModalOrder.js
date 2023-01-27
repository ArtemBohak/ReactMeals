import React, { useContext } from "react";

import Card from "../CardStyle/Card";
import styles from "./ModalOrder.module.css";

import { GlobalContext } from "../Contexts/GlobalContext";

import ModalOrderItem from "./ModalOrderItem";
import CloseButton from "../UI/CloseButton/CloseButton";
import OrderButton from "../UI/OrderButton/OrderButton";

export default function ModalOrder(props) {
  const ctx = useContext(GlobalContext);

  function modalOrderClickHandler(event) {
    if (event.target == event.currentTarget) {
      props.hideModal();
    }
  }

  let orderList = Object.entries(Object.entries(ctx.order)[0][1]);

  function evaluatePrice() {
    let price = 0;
    orderList.forEach((item) => {
      price += +item[1][1] * +item[1][0]
    })
    return price.toFixed(2);
  }

  let ModalOrderList = orderList.map((item) => (
    <ModalOrderItem
      meal={item[0]}
      price={item[1][1]}
      quantity={item[1][0]}
      key={item[0]}
    />
  ));

  if (+ctx.cartQuantity) {
    return (
      <div
        onClick={modalOrderClickHandler}
        className={
          props.isShown
            ? `${styles["modal"]} ${styles["_active"]}`
            : styles["modal"]
        }
      >
        <Card className={styles["modal-window"]}>
          <div className={"modal-window__list"}>
            <ul>{ModalOrderList}</ul>
          </div>
          <div className={styles["modal-window__total"]}>
            <span>Total Amount</span>
            <span>${evaluatePrice()}</span>
          </div>
          <div className={styles["modal-window__buttons"]}>
            <CloseButton hideModal={props.hideModal} />
            <OrderButton />
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div
        onClick={modalOrderClickHandler}
        className={
          props.isShown
            ? `${styles["modal"]} ${styles["_active"]}`
            : styles["modal"]
        }
      >
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
