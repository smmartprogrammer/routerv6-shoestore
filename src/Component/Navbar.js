import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar({ click }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <i className="fas fa-shoe-prints">
          <h2>ABC Online Shoes Store</h2>
        </i>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          {/* links */}
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
