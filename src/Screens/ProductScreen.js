import React from "react";
import "./ProductScreen.css";
import Shoes from "./../shoes.json";

function ProductScreen() {
  console.log(Shoes);
  console.log(Object.keys(Shoes));
  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left__image">
          <img
            src="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/881-6303_1_2400x.jpg?v=1604299789"
            alt=""
          />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price: $99.99</p>
          <p>Descriptin: raghupati raghav raja raam patit pawan sita raam</p>
        </div>
      </div>
      <div className="productscreen_right">
        <div className="right__info">
          <p>
            Price: <span>$99.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty{" "}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
