import React from "react";
import { createContext, useContext, useReducer } from "react";

// Create the context
const CartItemContext = createContext();

// Reducer function
function reducerFunction(cartItem, action) {
  switch (action.type) {
    case "ITEM-CART":
      return [...cartItem, { ...action.payload, quantity: 1 }];

    case "DECREASE_QTY":
      return cartItem.map((item) => {
        if (action.payload.id === item.id) {
          const updatedQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: updatedQuantity,
          };
        }
        return item; // Return unchanged item for non-matching IDs
      });

    case "INCREASE_QTY":
      return cartItem.map((item) => {
        if (action.payload.id === item.id) {
          const updatedQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: updatedQuantity,
          };
        }
        return item; // Return unchanged item for non-matching IDs
      });

    case "REMOVE_ITEM":
      return cartItem.filter((item) => item.id !== action.payload.id);

    default:
      return cartItem;
  }
}

// Initial state
const initialState = [];

// Context provider component
function CartItemContextProvider({ children }) {
  const [cartItem, dispatch] = useReducer(reducerFunction, initialState);
  console.log("cartItem: ", cartItem);

  return (
    <CartItemContext.Provider value={{ cartItem, dispatch }}>
      {children}
    </CartItemContext.Provider>
  );
}

// Custom hook to use the context
export function useCartItemContext() {
  return useContext(CartItemContext);
}

export default CartItemContextProvider;
