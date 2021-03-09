import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      <img
        src="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/881-6303_1_2400x.jpg?v=1604299789"
        alt=""
      />
      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">
          jay sia raam , shri ram jay ram jay jay ram
        </p>
        <p className="info__price">$99.99</p>
      </div>
      <h1>welcome to Product</h1>{" "}
      <Link to={`/product/${1111}`} className="info_button">
        View
      </Link>
    </div>
  );
}

export default Product;
