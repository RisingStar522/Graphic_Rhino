import React from "react";
import Image from "../../images/portfolio5.jpg";
import Img1 from "../../images/Slagerij_Cannaert_pasta_flyer.jpg";
import Img2 from "../../images/Slagerij_Cannaert_pasta_menukaart.png";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function Slagerij() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Slagerij Cannaert, Anzegem" />

        <meta
          name="description"
          content="Slagerij Cannaert verkoopt nu ook take-away pasta, wij hielpen ze alvast met een A4 flyer en bijpassende menukaart. Benieuwd naar dit project? Lees er hier meer over!"
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
          content="https://graphicrhino.be/cases/slagerij-cannaert"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Slagerij Cannaert, Anzegem" />

        <meta
          property="og:description"
          content="Slagerij Cannaert verkoopt nu ook take-away pasta, wij hielpen ze alvast met een A4 flyer en bijpassende menukaart. Benieuwd naar dit project? Lees er hier meer over!"
        />
      </Helmet>
      <Header image={Image} title="SLAGERIJ CANNAERT, ANZEGEM" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">SLAGERIJ CANNAERT, ANZEGEM</div>
            <p>
              Ook flyers en menukaarten zijn geen probleem bij Graphic Rhino!
              Slagerij Cannaert uit Anzegem had graag flyers uitgedeeld om zo
              hun nieuwe take away pasta’s te promoten. Hierna heb ik ook een
              menukaart laten drukken om zo de klanten een duidelijk overzicht
              te geven van de soorten pasta’s dat ze aanbieden.
            </p>
          </div>
          <img src={Img2} className="case-img grid-full" alt="" />
        </div>
      </main>
    </>
  );
}

export default Slagerij;
