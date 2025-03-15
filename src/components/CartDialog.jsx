import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCartDialog } from "../context/CartContextProvider";
import "../index.css";
import { useCartItemContext } from "../context/CartItemContext";
import CartItem from "./CartItem";

function CartDialog() {
  const { open, setOpen } = useCartDialog();
  const { cartItem, dispatch } = useCartItemContext();
  //   console.log(cartItem);
  function handleClose() {
    setOpen(false);
  }

  //   let totalPrice = 0;
  //   for (let item of cartItem) {
  //     totalPrice = totalPrice + item.price * item.quantity;
  //   }

  //   or

  const totalPrice = cartItem.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "1200px", // Maximum width
            maxHeight: "600px", // Maximum height
            width: "100%", // Take full width up to maxWidth
            height: "90%", // Take full height up to maxHeight
          },
        }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Shopping Cart</DialogTitle>

        {cartItem.length > 0 ? (
          cartItem.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })
        ) : (
          <p
            style={{
              textAlign: "center",
            }}
          >
            Cart is empty
          </p>
        )}

        <h3
          style={{
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          Total Price: Rs {totalPrice}
        </h3>

        {/* <DialogContent>
          <DialogContentText id="dialog-description">
            This is the content of the dialog. You can add any component here,
            such as text, forms, or images.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default CartDialog;
