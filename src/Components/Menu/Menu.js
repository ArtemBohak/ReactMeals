import React, { useEffect } from "react";

import styles from "./Menu.module.css";

import Card from "../CardStyle/Card";
import MenuItem from "./MenuItem";

export default function Menu(props) {
  let meals = [
    { meal: "Sushi", ingridients: "Finest fish and veggies", price: "$22.99" },
    { meal: "Schnitzel", ingridients: "A german specialty!", price: "$16.50" },
    {
      meal: "Barbecue Burger",
      ingridients: "American, raw, meaty",
      price: "$12.99",
    },
    {
      meal: "Green Bowl",
      ingridients: "Healthy...and green...",
      price: "$18.99",
    },
  ];

  return (
    <Card className={styles["menu"]}>
      <ul>
        <li>
          {meals.map((item) => (
            <MenuItem
              meal={item.meal}
              ingridients={item.ingridients}
              price={item.price}
              key={Date.now() + Math.random()}
            />
          ))}
        </li>
      </ul>
    </Card>
  );
}
