import React from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/portfolio1.jpg";
import Img1 from "../../images/cafetaria-1.png";
import Img2 from "../../images/cafetaria-2.jpg";
import Special from "../../images/Cafetaria_Michelsberg_drankkaart.jpg";
import { Helmet } from "react-helmet";

function Cafetaria() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Cafetaria Michelsberg, Spiere-Helkijn" />

        <meta
          name="description"
          content="Bij een nieuwe horecazaak hoort een sterke branding, zo verzorgden we de volledige branding voor Cafetaria Michelsberg. Lees er hier alles over!"
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
          content="https://graphicrhino.be/cases/cafetaria-michelsberg"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Cafetaria Michelsberg, Spiere-Helkijn"
        />

        <meta
          property="og:description"
          content="Bij een nieuwe horecazaak hoort een sterke branding, zo verzorgden we de volledige branding voor Cafetaria Michelsberg. Lees er hier alles over!"
        />
      </Helmet>
      <Header image={Image} title="CAFETARIA MICHELSBERG, SPIERE-HELKIJN" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">
              CAFETARIA MICHELSBERG, SPIERE-HELKIJN
            </div>
            <p>
              Cafetaria Michelsberg ligt in het sportcomplex van Spiere-Helkijn.
              Hier komen verschillende scholen en sportgroepen over de vloer.
              Emily Balcaen & Mathias De Lombaerde zijn hier onlangs de nieuwe
              uitbaters van geworden. Bij nieuwe uitbaters hoort uiteraard ook
              een nieuwe huisstijl.
            </p>
            <p>
              Ze hadden niet echt een idee van welke stijl ze precies wilden,
              echter hadden ze wel een voorkeur voor herfstkleuren. Voor het
              logo koos ik dan ook voor iets donkerdere tinten zoals bordeaux,
              aangevuld met wat wit en beige. Het logo kreeg uiteindelijk de
              vorm van een bierkroontje, heel toepasselijk voor een cafetaria.
            </p>
          </div>
          <img src={Special} alt="" className="grid-full case-img" />
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Voor het visitekaartje dacht ik aan een houten achtergrond, dit
              past helemaal in de herfstsfeer van het logo. Op de ommezijde van
              het kaartje heb ik de sierlijke stijl gecombineerd met een strak
              Sans Serif lettertype, ook een deel van het logo komt er terug.
            </p>
            <p>
              Bij een cafetaria hoort natuurlijk ook een drankkaart, deze werd
              volledig ontworpen in de stijl van het visitekaartje. Later kwam
              er nog het ontwerp bij van openingsuren en een affiche voor de
              opening. Ook deze werden gemaakt in de stijl van de drankkaart en
              het visitekaartje.
            </p>
          </div>
          <iframe
            title="cafe"
            src="https://indd.adobe.com/embed/40e8e6b4-7cf8-4761-ba5b-080e1005e295?startpage=1&allowFullscreen=true"
            width="525px"
            height="371px"
            frameborder="0"
            allowfullscreen=""
            className="grid-full"
          ></iframe>
        </div>
      </main>
    </>
  );
}

export default Cafetaria;
