import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
function Context(props) {
  function reducer(state, action) {
    const product = action.payload;
    switch (action.type) {
      case "ADD":
        const temp = state.find((val) => val.id === product.id);
        if (temp) {
          return state.map((val) =>
            val.id === product.id ? { ...val, quantity: val.quantity + 1 } : val
          );
        } else {
          return [...state, { ...product, quantity: 1 }];
        }
      case "INCRE":
        const temp1 = state.map((val) => {
          if (val.id === product.id) {
            return { ...val, quantity: val.quantity + 1 };
          } else {
            return val;
          }
        });
        return temp1;
      case "DECRE":
        const temp2 = state.find((val) => val.id === product.id);
        if (temp2.quantity === 1) {
          return state.filter((val) => val.id !== temp2.id);
        } else {
          return state.map((val) =>
            val.id === product.id ? { ...val, quantity: val.quantity - 1 } : val
          );
        }
    }
  }
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
}

export default Context;
