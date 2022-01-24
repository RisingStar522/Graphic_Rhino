import React from "react";

function Service({ name, desc, image, hover = false, anim, dur, del }) {
  return (
    <div
      data-aos={anim}
      data-aos-duration={dur}
      data-aos-delay={del}
      className={`service ${hover ? "service--hover" : null}`}
    >
      <img src={image} alt="Service" className="service__icon" />
      <div className="service__name">{name}</div>
      <div className="service__desc">{desc}</div>
    </div>
  );
}

export default Service;
