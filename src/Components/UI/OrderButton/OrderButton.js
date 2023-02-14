import React from 'react';

import styles from "./OrderButton.module.css"

export default function OrderButton({children, onClick, ...props}) {
  return <button {...props} onClick={onClick} className={styles['order-button']}>{children}</button>
}