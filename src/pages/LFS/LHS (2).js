import React from "react";
import Image from "../../images/lhspreview.jpg";
import Header from "../../components/Header/Header";
import Img1 from "../../images/lhs-1.jpg";
import Img2 from "../../images/lhs-2.jpg";
import Img3 from "../../images/lhs-3.jpg";
import { Helmet } from "react-helmet";

function LHS() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Little Handmade Stories, Avelgem" />

        <meta
          name="description"
          content="Little Handmade Stories is net opgestarte concept store die nood had aan een eigen branding, hoe we dat aangepakt hebben? Dat lees je hier!"
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
          content="https://graphicrhino.be/cases/little-handmade-stories"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Little Handmade Stories, Avelgem" />

        <meta
          property="og:description"
          content="Little Handmade Stories is net opgestarte concept store die nood had aan een eigen branding, hoe we dat aangepakt hebben? Dat lees je hier!"
        />
      </Helmet>
      <Header image={Image} title="LITTLE HANDMADE STORIES, AVELGEM" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">LITTLE HANDMADE STORIES, AVELGEM</div>
            <p>
              Terugkerende klanten maken ons superblij! We mochten Happy
              Handmade Jewels een tijdje geleden al helpen met een logo en een
              huisstijl. Nu kwam Happy Handmade Jewels opnieuw bij ons
              aankloppen, want ze openen binnenkort hun eigen concept store in
              hartje Avelgem! We hebben voor Little Handmade Stories een logo
              ontworpen waarbij we ons, voor de herkenbaarheid, gebaseerd hebben
              op de reeds eerder uitgewerkte huisstijl van Happy Handmade
              Jewels.
            </p>
            <p>
              Bij een nieuw concept horen uiteraard visitekaartjes. Wij
              ontwierpen kaartjes voorzien van matte laminaat en spot UV lak.
              Spot UV lak is de blinkende laag die je niet alleen ziet op het
              kaartje, maar ook voelt je het kaartje in handen krijgt.
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Little Handmade Stories was ook op zoek naar een logobord om de
              etalage mee op te fleuren. Wij kozen voor een dibond bord met
              matte uitstraling waarop het logo recto verso geprint werd.
            </p>
            <p>
              Euh, dibond WAT? Dibond is een uit 3 lagen opgebouwde
              sandwichplaat. Het materiaal bestaat uit 2 alu buitenlagen met
              daartussenin een polyethyleen kernlaag.
            </p>
            <p>
              Waarom dibond? Wel, het materiaal trekt geen stof aan, verkleurt
              niet door zonlicht en is licht om op te hangen. Kortom, een ideaal
              materiaal voor een mooie en professionele afwerking.
            </p>
          </div>
          <img src={Img3} className="case-img" alt="" />
          <div className="case-content">
            <p>
              Voor het openingsweekend werden ook, compleet conform de huisstijl
              recto geprinte flyers geprint alsook enkele affiches om her en der
              te verspreiden.
            </p>
            <p>Ook een advertentie in Blits kon hierbij niet ontbreken!</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default LHS;
