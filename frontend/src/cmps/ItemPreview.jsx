import React from "react";
import { Link } from "react-router-dom";

import { AddToCart } from "./AddToCart";

export function ItemPreview({ item }) {
  return (
    <Link to={`/details/${item._id}`} style={{ textDecoration: "none" }}>
      <div className="item-card flex ">
        <img src={item.imgUrl} alt="seitan-img" />
        <section className="item-info ">
          <h2>{item.name}</h2>
          {item.description.map((desc) => (
            <h3 key={desc}>{desc}</h3>
          ))}
        </section>
        <h3>{item.price}</h3>
        <AddToCart item={item} />
      </div>
    </Link>
  );
}
