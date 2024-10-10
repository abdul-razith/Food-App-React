import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favorite Meal Now</h2>
        <p>
          Enjoy fresh, delicious meals from our diverse menu, crafted just for
          you.
        </p>

        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};
