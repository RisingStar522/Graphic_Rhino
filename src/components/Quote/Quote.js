import React from "react";
import Quotation from "../../images/quotation.png";

function Quote({ name, text, anim, dur, del }) {
  return (
    <div
      data-aos={anim}
      data-aos-duration={dur}
      data-aos-delay={del}
      className="quote"
    >
      <img src={Quotation} className="quote__icon" alt="Quotation" />
      <p className="quote__name">{name}</p>
      <p className="quote__quote">{text}</p>
    </div>
  );
}

export default Quote;
