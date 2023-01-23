import React from "react";

import styles from "./Menu.module.css";

import Card from "../CardStyle/Card";
import MenuItem from "./MenuItem";

export default function Menu(props) {
  return (
    <Card className={styles["menu"]}>
      <ul>
        <li>
          <MenuItem meal='Sushi' ingridients="Finest fish and veggies" price="$22.99" />
        </li>
      </ul>
    </Card>
  );
}
