import React, { useState } from "react";

const GlobalContext = React.createContext({
  cartQuantity: 0,
  addCartQuantity: () => {},
});

export default function GlobalContextProvider(props) {
  const [cartQuantity, setCartQuantity] = useState(() => {
    if (localStorage.getItem("cartQuantity")) {
      return +localStorage.getItem("cartQuantity");
    } else return 0;
  });

  function addCartQuantity(quantity) {
    localStorage.setItem("cartQuantity", cartQuantity + +quantity);
    console.log(localStorage.getItem("cartQuantity"));

    setCartQuantity((prevState) => prevState + +quantity);
  }

  return (
    <GlobalContext.Provider
      value={{ addCartQuantity: addCartQuantity, cartQuantity: cartQuantity }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };
