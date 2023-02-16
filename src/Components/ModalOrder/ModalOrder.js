import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import Card from "../CardStyle/Card";
import styles from "./ModalOrder.module.css";

import { GlobalContext } from "../Contexts/GlobalContext";
import useMount from "../../hooks/useMount";

import ModalOrderItem from "./ModalOrderItem";
import CloseButton from "../UI/CloseButton/CloseButton";
import OrderButton from "../UI/OrderButton/OrderButton";
import Checkout from "../Checkout/Checkout";

const ANIMATION_TIME = 300;

function FetchOrders(requestBody) {
  async function fetchPost() {
    let response = await fetch(
      "https://learning-react-testing-default-rtdb.firebaseio.com/orders.json",
      { method: "POST", body: requestBody }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    return response;
  }

  fetchPost().catch((error) => {
    console.log("Something went wrong");
    console.log(error.message);
  });
}

export default function ModalOrder(props) {
  const ctx = useContext(GlobalContext);
  const [isCheckingOut, setisCheckingOut] = useState(false);
  const { isMounted } = useMount(props.isShown, ANIMATION_TIME);

  function modalOrderClickHandler(event) {
    if (event.target === event.currentTarget) {
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
    setisCheckingOut(true);
  }

  async function confirmOrder(userData) {
    const orderId = new Date().getTime();
    let orderBody = JSON.stringify({
      [orderId]: [userData, localStorage.getItem("orders")],
    });

    FetchOrders(orderBody);

    props.hideModal();
    setTimeout(() => {
      ctx.resetOrders();
    }, 500);
    setisCheckingOut(false);
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

  const modalWindowClassName = `${styles["modal"]} ${
    props.isShown ? styles["_active"] : ""
  }`;

  const modalLayout = isCheckingOut ? (
    <>
      <div className={styles["modal-window__total"]}>
        <span>Total Amount</span>
        <span>${evaluatePrice()}</span>
      </div>
      <Checkout confirmOrder={confirmOrder} goBack={goBack} />
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

  function ModalOrderContent(props) {
    if (!isMounted) {
      return null;
    }
    if (+ctx.cartQuantity) {
      return (
        <div onClick={modalOrderClickHandler} className={modalWindowClassName}>
          <Card className={styles["modal-window"]}>{modalLayout}</Card>
        </div>
      );
    } else {
      return (
        <div onClick={modalOrderClickHandler} className={modalWindowClassName}>
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

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOrderContent {...props} />,
        document.getElementById("modal-window")
      )}
    </React.Fragment>
  );
}
