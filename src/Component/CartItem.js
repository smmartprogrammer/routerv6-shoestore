import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/881-6303_1_2400x.jpg?v=1604299789"
          alt=""
        />
      </div>
      <Link to={`/product/${111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>
      <p className="cartitem__price">$499.99</p>
      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
