import React, { useState } from "react";

const GlobalContext = React.createContext({
  cartQuantity: 0,
  addNewOrder: () => {},
  order: { 0: {} },
  deleteOldOrder: () => {},
  updateOrders: () => {},
  resetOrders: () => {},
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
    } else return { 0: {} };
  });

  function resetOrders() {
    localStorage.removeItem('orders');
    setOrder({0:{}});
  }

  function deleteOldOrder(deletedOrder) {
    setOrder((prevState) => {
      let { ...orders } = prevState;
      let dishes = Object.values(orders)[0];
      orders = Object.keys(orders)[0];
      if (+orders === 1) {
        localStorage.removeItem("orders");
        return { 0: {} };
      }

      if (dishes[deletedOrder.meal][0] === 1) {
        delete dishes[deletedOrder.meal];
        orders = `${+orders - 1}`;
        orders = { [orders]: dishes };
        localStorage.setItem("orders", JSON.stringify(orders));
        return orders;
      }

      orders = `${+orders - 1}`;
      dishes[deletedOrder.meal][0] = +dishes[deletedOrder.meal][0] - 1;
      orders = { [orders]: dishes };
      localStorage.setItem("orders", JSON.stringify(orders));
      return orders;
    });
  }

  function addNewOrder(newOrder) {
    let order = updateOrders(newOrder);
    localStorage.setItem("orders", JSON.stringify(order));
    setOrder(order);
  }

  return (
    <GlobalContext.Provider
      value={{
        addNewOrder: addNewOrder,
        order: order,
        cartQuantity: Object.keys(order)[0],
        deleteOldOrder: deleteOldOrder,
        resetOrders: resetOrders
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };
