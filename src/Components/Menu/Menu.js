import React, { useState, useEffect } from "react";
import useFetchMeals from "../../hooks/useFetchMeals";

import styles from "./Menu.module.css";

import Card from "../CardStyle/Card";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [menuStyle, setMenuStyle] = useState(styles["menu"]);

  let meals;

  meals = useFetchMeals(
    "https://learning-react-testing-default-rtdb.firebaseio.com/meals.json"
  );
    
  useEffect(() => {
    setMenuStyle(`${styles["menu"]} ${styles["_loaded"]}`);
  }, []);


  return (
    <Card className={menuStyle}>
      <ul>
        <li>
          {meals.map((item) => (
            <MenuItem
              meal={item.meal}
              ingridients={item.ingridients}
              price={item.price}
              key={item.meal}
            />
          ))}
        </li>
      </ul>
    </Card>
  );
}
