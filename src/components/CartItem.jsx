import React from "react";
import "../index.css";
import { useCartItemContext } from "../context/CartItemContext";
import CloseIcon from "@mui/icons-material/Close";

function CartItem({ id, img, title, quantity, price }) {
  const { dispatch } = useCartItemContext();
  const handleDecrement = () => {
    console.log("Decrement");
    if (quantity <= 1) {
      return;
    }
    dispatch({
      type: "DECREASE_QTY",
      payload: {
        id: id,
      },
    });
  };

  const handleIncrement = () => {
    console.log("Increment");
    dispatch({
      type: "INCREASE_QTY",
      payload: {
        id: id,
      },
    });
  };

  function removeCartItem() {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id: id },
    });
  }

  return (
    <div className="cart-item">
      {/* Image and Title */}
      <div className="cart-item-image-title">
        <img src={img} alt={title} className="cart-item-image" />
        <p className="cart-item-title">{title}</p>
      </div>

      {/* Quantity Control */}
      <div className="cart-item-quantity">
        <button className="cart-item-button" onClick={handleDecrement}>
          -
        </button>
        <p className="cart-item-quantity-text">{quantity}</p>
        <button className="cart-item-button" onClick={handleIncrement}>
          +
        </button>
      </div>

      {/* Price */}
      <div>
        <p className="cart-item-price">Rs {price * quantity}</p>
      </div>
      <div>
        <CloseIcon onClick={removeCartItem} />
      </div>
    </div>
  );
}

export default CartItem;
