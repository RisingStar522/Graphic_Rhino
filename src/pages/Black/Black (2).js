import React from "react";
import Img from "../../images/portfolio7.jpg";
import Img1 from "../../images/Black_boekcover.jpg";
import Img2 from "../../images/Black_boekcover_presentatie.jpg";
import Img3 from "../../images/Black_boekcover_voorkant.jpg";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function Black() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Black - Dirk Bracke" />

        <meta
          name="description"
          content="Het herontwerpen van een boekcover was een van onze eindwerk opdrachten, lees er hier meer over!"
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta property="og:url" content="https://graphicrhino.be/cases/black" />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Black - Dirk Bracke" />

        <meta
          property="og:description"
          content="Het herontwerpen van een boekcover was een van onze eindwerk opdrachten, lees er hier meer over!"
        />
      </Helmet>
      <Header image={Img} title="BLACK - DIRK BRACKE" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img3} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">BLACK - DIRK BRACKE</div>
            <p>
              Een van mijn schoolopdrachten bestond uit het herontwerpen van een
              boekcover. Hiervoor koos ik voor Black van Dirk Bracke. De cover
              moest ook een binnenflap hebben aan het begin en aan het einde van
              het boek.
            </p>
            <br />
            <p>
              Voor de cover koos ik voor een sprekend beeld die helemaal paste
              bij het verhaal van een van de hoofdpersonages.
            </p>
          </div>
          <img src={Img2} alt="" className="grid-full case-img" />
          <img src={Img1} alt="" className="grid-full case-img" />
        </div>
      </main>
    </>
  );
}

export default Black;
