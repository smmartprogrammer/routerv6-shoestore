import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import shoes from "./../shoes.json";

function Product() {
  return (
    <>
      {Object.keys(shoes).map((keyName) => {
        const shoeObj = shoes[keyName];
        return (
          <div className="product" key={keyName}>
            <img src={shoeObj.img} alt="product image" />
            <div className="product__info">
              <p className="info__name"> {shoeObj.name} </p>
              <p className="info__price">{shoeObj.price}</p>
            </div>
            <h1>welcome to Product</h1>{" "}
            <Link to={`/product/${1111}`} className="info_button">
              View
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Product;
