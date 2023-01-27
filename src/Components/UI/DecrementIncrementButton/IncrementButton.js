import React from "react";

import styles from "./DecreIncrementButtons.module.css";

export default function IncrementButton(props) {
  return <button onClick={props.onClick} className={styles["decre-increment-button"]}>+</button>;
}
