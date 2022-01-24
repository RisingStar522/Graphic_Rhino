import React from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/debaveyepreview.jpg";
import Img1 from "../../images/debaveye-1.jpg";
import { Helmet } from "react-helmet";

function Debaveye() {
  return (
    <>
      <Helmet>
        <meta name="title" content="De Baveye Interieur, Outrijve" />

        <meta
          name="description"
          content="Promotiemateriaal ontwerpen? Geen enkele probleem voor ons, zo verzorgden we de A4 flyer van De Baveye Interieur. Lees er hier meer over!"
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
          content="https://graphicrhino.be/cases/de-baveye-interieur"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="De Baveye Interieur, Outrijve" />

        <meta
          property="og:description"
          content="Promotiemateriaal ontwerpen? Geen enkele probleem voor ons, zo verzorgden we de A4 flyer van De Baveye Interieur. Lees er hier meer over!"
        />
      </Helmet>
      <Header image={Image} title="DE BAVEYE INTERIEUR, OUTRIJVE" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">DE BAVEYE INTERIEUR, OUTRIJVE</div>
            <p>
              Bij De Baveye interieur kan je terecht voor jouw keuken op maat!
              Niet zomaar een keuken op maat, maar een keuken ontworpen samen
              met zaakvoerder Greg De Baveye, die reeds een jarenlange ervaring
              heeft.
            </p>
            <p>
              Wij verzorgden een recto verso A4 flyer waarin de visie van De
              Baveye interieur vertaald werd in woord en beeld. Greg is een
              echte selfmade man en bedeelt de folders zelf in de brievenbussen
              van potentiële klanten. Zo proberen ze de klanten visueel te
              triggeren. Een flyer in de bus kan vaak leuker zijn dan een online
              reclame waar iedereen snel voorbij scrolt en de essentie nooit
              gezien heeft. Meer daarover kan je lezen in onze nieuwe blogpost
              &nbsp;
              <a href="http://www.google.com">De Kracht van papier.</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Debaveye;
