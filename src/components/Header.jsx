import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../index.css"; // Import the CSS file
import { useCartDialog } from "../context/CartContextProvider";
import CartDialog from "./CartDialog";

function Header() {
  const { open, setOpen } = useCartDialog();

  function openCartDialog() {
    console.log("Cart Dialog Opened");
    setOpen(true);
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <div>
          <h1>ABC Shop</h1>
        </div>
        <div className="cart-icon" onClick={openCartDialog}>
          <div>
            <ShoppingCartIcon />
          </div>
          <p>Cart</p>
        </div>
      </nav>
      {open && <CartDialog />}
    </header>
  );
}

export default Header;