import React from "react";

import DecrementButton from "../UI/DecrementIncrementButton/DecrementButton";
import IncrementButton from "../UI/DecrementIncrementButton/IncrementButton";

import styles from "./ModalOrderItem.module.css";

export default function ModalOrderItem(props) {
  return (
    <li>
      <div>
        <h2>{props.meal}</h2>
        <div>
          <span>${props.price}</span>
          <span>x {props.quantity}</span>
        </div>
      </div>
      <div>
        <DecrementButton />
        <IncrementButton />
      </div>
      <hr></hr>
    </li>
  );
}
