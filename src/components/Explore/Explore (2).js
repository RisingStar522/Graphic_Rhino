import React from "react";
import { Link } from "react-router-dom";

function Explore({ num, title, text, image, anim, link }) {
  return (
    <Link
      className={`explore__box explore__box--${num}`}
      data-aos={anim}
      to={link}
    >
      <div className="explore__circle"></div>
      <div
        className="explore__img"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(${image})`,
        }}
      ></div>
      <div className="explore__content">
        <div className="explore__title">{title}</div>
        <div className="explore__text">{text}</div>
      </div>
    </Link>
  );
}

export default Explore;
