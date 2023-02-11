import React, { useRef, useEffect, useState, useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import ModalOrder from "../ModalOrder/ModalOrder";

import styles from "./Cart.module.css";
import CartIcon from "./CartIcon";

export default function Cart(props) {
  const ctx = useContext(GlobalContext);
  const [cartClassName, setCartClassName] = useState(styles["cart"]);
  const [isShown, setIsShown] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      setCartClassName(`${styles["cart"]} ${styles["_new-order"]}`);
      setTimeout(() => {
        setCartClassName(styles["cart"]);
      }, 500);
    } else {
      firstRender.current = false;
    }
  }, [ctx.cartQuantity]);

  function showModal() {
    document.body.classList.toggle('_unscrollable')
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
      <ModalOrder hideModal={showModal} isShown={isShown} />
    </React.Fragment>
  );
}
