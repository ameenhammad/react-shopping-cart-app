import React from "react";
import { products } from "../data/product";
import Product from "./Product";
import "../index.css";

function Products() {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return <Product key={product.id} {...product}/>;
      })}
    </div>
  );
}

export default Products;
