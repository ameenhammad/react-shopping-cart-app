import React from "react";
import { createContext, useContext, useState } from "react";

const CartDialogContext = createContext();

function CartContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <CartDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </CartDialogContext.Provider>
  );
}

export function useCartDialog(){
  return useContext(CartDialogContext);
}

export default CartContextProvider;
