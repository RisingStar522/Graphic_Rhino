import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__logo-content">
            <img src={Logo} className="footer__logo" alt="Graphic Rhino Logo" />
            <div className="footer__slogan">take design by its horns</div>
            <div className="footer__icons">
              <a
                href="https://www.facebook.com/GraphicRhino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/graphic_rhino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/graphicrhino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.behance.net/GraphicRhino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance size={24} target="_blank" />
              </a>
            </div>
          </div>
          <div className="footer__copyright">&copy; 2020 Graphic Rhino</div>
        </div>
        <div className="footer__about">
          <div className="footer__subtitle">ontdek</div>
          <Link to="/over-ons" className="footer__link footer__item">
            Over ons
          </Link>
          <Link to="/cases" className="footer__link footer__item">
            Cases
          </Link>
          <Link to="/diensten" className="footer__link footer__item">
            Diensten
          </Link>
          <Link to="/blog" className="footer__link footer__item">
            Blog
          </Link>
        </div>
        <div className="footer__contact">
          <div className="footer__subtitle">contacteer ons</div>
          <div className="footer__item">0473328844</div>
          <a href="/#" className="footer__link footer__item">
            hello@graphicrhino.be
          </a>
          <div className="footer__item">
            Doorniksesteenweg 344 <br /> 8582 Outrijve
          </div>
          <div className="footer__item">BTW BE 0687 610 927</div>
        </div>

        <div className="footer__legal">
          <div className="footer__subtitle">handige links</div>
          <Link to="/privacy" className="footer__link footer__item">
            Privacybeleid
          </Link>
          <Link to="/contact" className="footer__link footer__item">
            Contacteer ons
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
