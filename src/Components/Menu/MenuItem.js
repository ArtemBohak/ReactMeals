import React, { useContext, useState } from "react";

import styles from "./MenuItem.module.css";
import { GlobalContext } from "../Contexts/GlobalContext";

import AddButton from "../UI/AddButton/AddButton";

export default function MenuItem(props) {
  const [quantity, setQuantity] = useState(1);
  const ctx = useContext(GlobalContext);

  const changeInputHandler = (e) => {
    setQuantity(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    ctx.addCartQuantity(quantity);
    setQuantity(1);
  };

  return (
    <div>
      <div className={styles["menu-item"]}>
        <div>
          <h3>{props.meal}</h3>
          <h5>{props.ingridients}</h5>
          <h3 className={styles["menu-item__price"]}>{props.price}</h3>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                name="amount"
                type="number"
                onChange={changeInputHandler}
                value={quantity}
              ></input>
            </div>
            <AddButton />
          </form>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
