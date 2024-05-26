import React from "react";
import { useState, createContext } from "react";
import { goods } from "../Main/pictures";

export const ItemsContex = createContext(null);

const getDefaltCart = () => {
  let cart = {};
  for (let i = 1; i < goods.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ItemContexProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaltCart());

  const addToChart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const remomeChart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToChart, remomeChart };

  console.log(cartItems);
  return (
    <ItemsContex.Provider value={contextValue}>
      {props.children}
    </ItemsContex.Provider>
  );
};
