import React from "react";
import Image from "../../images/keurslagerpreview2.jpg";
import Img1 from "../../images/keurslager-1.jpg";
import Img2 from "../../images/Keurslager-2.jpg";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function Keurslager() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Keurslager Crul, Moen" />

        <meta
          name="description"
          content="Drukwerk is onze specialiteit! Zo ontwierpen we visitekaartjes en A5 flyer voor Keurslager Crul. Lees er hier alles over!"
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="og:url"
          content="https://graphicrhino.be/cases/keurslager-crul"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Keurslager Crul, Moen" />

        <meta
          property="og:description"
          content="Drukwerk is onze specialiteit! Zo ontwierpen we visitekaartjes en A5 flyer voor Keurslager Crul. Lees er hier alles over!"
        />
      </Helmet>
      <Header image={Image} title="KEURSLAGER CRUL, MOEN" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">KEURSLAGER CRUL, MOEN</div>
            <p>
              Keurslager Crul had nood aan nieuwe visitekaartjes, wat wij met
              plezier ontwerpen. Deze kaartjes werden afgewerkt met een matte
              laminaat. Dit voelt een stuk aangenamer aan dan de glanzende
              laminaat die zeer vaak gebruikt wordt.
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Flyers kan je gebruiken om je event aan te kondigen zoals bij
              Happy Handmade Jewels, maar ook om je prijzen of nieuwe producten
              bekend te maken. Bij Keurslager Crul is het de bedoeling om via
              deze weg hun horeca prijzen door te geven aan hun klanten. Wij
              krijgen alvast honger van het ontwerp!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Keurslager;
