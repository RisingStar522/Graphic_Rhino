import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../images/logo-header.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Header({ image, title, text, btnText, link, scrollTo }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, anchorPlacement: "center-bottom" });
  }, []);
  return (
    <header
      className="header"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${image})`,
      }}
    >
      <Link to="/">
        <img src={Logo} className="header__logo" alt="Graphic Rhino" />
      </Link>
      <div className="container">
        <div className="header__content" data-aos="fade-down">
          <div className="header__text">
            <h1 className="header__title heading-1">{title}</h1>
            <p className="header__description">{text}</p>
          </div>
          {btnText === undefined ? null : (
            <Link to={link}>
              <Button btnText={btnText} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
