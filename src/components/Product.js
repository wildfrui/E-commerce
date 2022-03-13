import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="products__item product">
      <div className="product__title">{product.title}</div>
      <img src={product.image} alt="" className="product__image" />

      <div className="product__info">
        <div className="product__price">{product.price + "$"}</div>
        <div className="product__options">
          <button className="product__add">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
