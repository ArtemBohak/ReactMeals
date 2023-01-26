import React from "react";

import styles from "./CloseButton.module.css";

export default function CloseButton(props) {
  return <button onClick={props.hideModal} className={styles["close-button"]}>Close</button>;
}
