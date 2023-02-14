import React from "react";

import styles from "./CloseButton.module.css";

export default function CloseButton(props) {
  return <button type={props.type} onClick={props.onClick} className={styles["close-button"]}>{props.children}</button>;
}
