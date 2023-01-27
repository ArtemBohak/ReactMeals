import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import ModalOrder from "../ModalOrder/ModalOrder";

import styles from "./Cart.module.css";
import CartIcon from "./CartIcon";

export default function Cart(props) {
  const ctx = useContext(GlobalContext);
  const [cartClassName, setCartClassName] = useState(styles["cart"]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setCartClassName(`${styles["cart"]} ${styles["_new-order"]}`);
    setTimeout(() => {
      setCartClassName(styles["cart"]);
    }, 500);
  }, [ctx.cartQuantity]);

  function showModal() {
    setIsShown((prevState) => !prevState);
  }

  return (
    <React.Fragment>
      <div onClick={showModal} className={cartClassName}>
        <span className={styles["cart__icon"]}>
          <CartIcon />
        </span>
        <span className={styles["cart__quantity"]}>{ctx.cartQuantity}</span>
      </div>
      <ModalOrder
        hideModal={showModal}
        isShown={isShown}
      />
    </React.Fragment>
  );
}
