import React from 'react';

import styles from "./OrderButton.module.css"

export default function OrderButton(props) {
  return <button onClick={props.onClick} className={styles['order-button']}>{props.children}</button>
}