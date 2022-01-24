import React from "react";
import { Link } from "react-router-dom";

function Masonry({ images }) {
  const items = [];
  for (const x of images) {
    items.push(
      <Link to={x.linkTo}>
        <div className="masonry__block">
          <img
            className="masonry__img"
            alt="Grid Item"
            src={require("../../images/" + x.url)}
          />
          <div className="masonry__cover"></div>
          <div className="masonry__content">
            <div className="masonry__title">{x.title.toUpperCase()}</div>
            <div className="masonry__text">{x.desc}</div>
          </div>
        </div>
      </Link>
    );
  }
  return <div className="masonry">{items}</div>;
}

export default Masonry;
