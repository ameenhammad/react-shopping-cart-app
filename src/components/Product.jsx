import React from "react";
import "../index.css";
import { useCartItemContext } from "../context/CartItemContext";

function Product({ id, img, title, price }) {
  const { cartItem, dispatch } = useCartItemContext();
  function handleAddToCart() {
    for(let item of cartItem){
        if(item.id === id){
            alert("item already exist");
            return;
        }
    }

    const addNewItem = {
      id: id,
      img: img,
      title: title,
      price: price,
      quantity: 1,
    };
    dispatch({
      type: "ITEM-CART",
      payload: addNewItem,
    });

    // alert("item added");
  }
  return (
    <div className="product-card">
      {/* <p>id: {id}</p> */}
      <img src={img} alt="Product-Image" />
      <p>{title}</p>
      <p>Rs {price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
