import React from 'react';

import styles from './Header.module.css'

import Cart from './Cart';

export default function Header(props) {


  return (
    <section className={styles['wrapper-header']}>
      <div className={styles['header-container']}>
        <span className={styles['logo']}>ReactMeals</span>
        <Cart />
      </div>
    </section>
  )
}