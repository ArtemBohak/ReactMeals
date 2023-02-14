import React, { useState, useContext } from "react";

import Card from "../CardStyle/Card";
import styles from "./ModalOrder.module.css";

import { GlobalContext } from "../Contexts/GlobalContext";

import ModalOrderItem from "./ModalOrderItem";
import CloseButton from "../UI/CloseButton/CloseButton";
import OrderButton from "../UI/OrderButton/OrderButton";
import Checkout from "../Checkout/Checkout";

export default function ModalOrder(props) {
  const ctx = useContext(GlobalContext);
  const [isCheckingOut, setisCheckingOut] = useState(false);

  function modalOrderClickHandler(event) {
    if (event.target == event.currentTarget) {
      props.hideModal();
      setTimeout(() => setisCheckingOut(false), 300);
    }
  }

  let orderList = Object.entries(Object.entries(ctx.order)[0][1]);

  function evaluatePrice() {
    let price = 0;
    orderList.forEach((item) => {
      price += +item[1][1] * +item[1][0];
    });
    return price.toFixed(2);
  }

  function makeOrder() {
    // props.hideModal();
    // setTimeout(() => {
    //   ctx.resetOrders();
    // }, 500);
    setisCheckingOut(true);
  }

  function goBack() {
    setisCheckingOut(false);
  }

  let ModalOrderList = orderList.map((item) => (
    <ModalOrderItem
      meal={item[0]}
      price={item[1][1]}
      quantity={item[1][0]}
      key={item[0]}
    />
  ));

  const modalWindowClassName = props.isShown
    ? `${styles["modal"]} ${styles["_active"]}`
    : styles["modal"];

  // const modalWindowListClassName = isCheckingOut
  //   ? `${styles["modal-window__list"]} ${styles[["_is-checking-out"]]}`
  //   : styles["modal-window__list"];

  // const modalWindowButtonsClassName = isCheckingOut
  //   ? `${styles["modal-window__buttons"]} ${styles["_is-checking-out"]}`
  //   : styles["modal-window__buttons"];

  const modalLayout = isCheckingOut ? (
    <>
      <div className={styles["modal-window__total"]}>
        <span>Total Amount</span>
        <span>${evaluatePrice()}</span>
      </div>
      <Checkout goBack={goBack} isCheckingOut={isCheckingOut} />
    </>
  ) : (
    <div className={isCheckingOut ? styles["_is-checking-out"] : ""}>
      <div className={styles["modal-window__list"]}>
        <ul>{ModalOrderList}</ul>
      </div>
      <div className={styles["modal-window__total"]}>
        <span>Total Amount</span>
        <span>${evaluatePrice()}</span>
      </div>
      <div className={styles["modal-window__buttons"]}>
        <CloseButton onClick={props.hideModal}>Close</CloseButton>
        <OrderButton onClick={makeOrder}>Order</OrderButton>
      </div>
    </div>
  );

  if (+ctx.cartQuantity) {
    return (
      <div onClick={modalOrderClickHandler} className={modalWindowClassName}>
        <Card className={styles["modal-window"]}>{modalLayout}</Card>
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
            <CloseButton onClick={props.hideModal}>Close</CloseButton>
          </div>
        </Card>
      </div>
    );
  }
}
