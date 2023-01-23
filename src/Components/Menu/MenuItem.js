import React from "react";

import styles from "./MenuItem.module.css";

import AddButton from "../UI/AddButton/AddButton";

export default function MenuItem(props) {
  const submitHandler = (event) => {
    event.preventDefault();
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
                defaultValue="1"
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
