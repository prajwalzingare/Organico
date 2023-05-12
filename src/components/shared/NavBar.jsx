import React from "react";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <p>Organico</p>
          <p>Home</p>
          <p>Buy Now</p>
        </div>

        <div className="nav-right">
          <div className="searchbar-container">
            <input type="text" />
          </div>
          <div className="nav-icons-container">
            <div className="nav-icon">
              <i class="fa-solid fa-heart"></i>
            </div>
            <div className="nav-icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="nav-icon">
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
