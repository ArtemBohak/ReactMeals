import React from 'react';

import styles from "./OrderButton.module.css"

export default function OrderButton(props) {
  return <button className={styles['order-button']}>Order</button>
}