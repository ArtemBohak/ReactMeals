import React, { useState } from "react";

const GlobalContext = React.createContext({
  cartQuantity: 0,
  addNewOrder: () => {},
});

function updateOrders(newOrder) {
  let orders = localStorage.getItem("orders");

  if (orders) {
    orders = JSON.parse(orders);
  } else {
    orders = { 0: {} };
  }

  let dishes = Object.values(orders)[0];
  orders = Object.keys(orders)[0];
  orders = `${+orders + newOrder.quantity}`;

  if (newOrder.meal in dishes) {
    dishes[newOrder.meal][0] += newOrder.quantity;
    return { [orders]: dishes };
  }
  dishes[newOrder.meal] = [newOrder.quantity, +newOrder.price];
  return { [orders]: dishes };
}

export default function GlobalContextProvider(props) {
  const [order, setOrder] = useState(() => {
    let orders = localStorage.getItem("orders");
    if (orders) {
      return JSON.parse(orders);
    } else return { 0: [] };
  });

  function addNewOrder(newOrder) {
    let order = updateOrders(newOrder);
    localStorage.setItem("orders", JSON.stringify(order));
    setOrder(() => order);
  }

  return (
    <GlobalContext.Provider
      value={{
        addNewOrder: addNewOrder,
        cartQuantity: Object.keys(order)[0],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };
