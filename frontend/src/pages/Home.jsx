import React from "react";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="home-container main-container">
      <div className="hero"> HERO</div>
      <NavLink to="/shop">
        <button>למוצרים</button>
      </NavLink>
    </div>
  );
}
