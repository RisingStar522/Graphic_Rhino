import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/logo-menu.png";

function Menu() {
  const closeMenu = () => {
    document.getElementById("menu-btn").click();
  };

  return (
    <div className="menu">
      <input type="checkbox" className="menu__checkbox" id="menu-checkbox" />
      <label htmlFor="menu-checkbox" className="menu__btn" id="menu-btn">
        <div className="menu__icon"></div>
      </label>
      <div className="menu__background">
        <Link to="/">
          <img className="menu__logo" src={Logo} alt="Menu Logo" />
        </Link>
        <div className="menu__nav">
          <ul className="menu__list">
            <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/over-ons"
              activeClassName="active"
              onClick={closeMenu}
            >
              <li>Over ons</li>
            </NavLink>
            <NavLink
              to="/diensten"
              activeClassName="active"
              onClick={closeMenu}
            >
              <li>Diensten</li>
            </NavLink>
            <NavLink to="/cases" activeClassName="active" onClick={closeMenu}>
              <li>Cases</li>
            </NavLink>
            <NavLink to="/blog" activeClassName="active" onClick={closeMenu}>
              <li>Blog</li>
            </NavLink>
            <NavLink
              to="/graveyard"
              activeClassName="active"
              onClick={closeMenu}
            >
              <li>Graveyard</li>
            </NavLink>
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
