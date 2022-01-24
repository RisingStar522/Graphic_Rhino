import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Img1 from "../../images/MIGmotors_billboard_3850x2850_0220_voorstellen.jpg";
import Img2 from "../../images/MIGmotors_billboard_3850x2850_0220_voorstellen2.jpg";
import Img3 from "../../images/MIGmotors_billboard_3850x2850_0220_voorstellen3.jpg";

function Motors() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Ongebruikte ontwerpen voor MIG Motors - Graphic Rhino"
        />

        <meta
          name="description"
          content="Niet elk ontwerp voor MIG Motors wordt direct goedgekeurd, maar daarom zijn we er niet minder trots op. Bekijk hier wat werd afgekeurd!"
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
          content="https://graphicrhino.be/graveyard/mig-motors"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Ongebruikte ontwerpen voor MIG Motors - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Niet elk ontwerp voor MIG Motors wordt direct goedgekeurd, maar daarom zijn we er niet minder trots op. Bekijk hier wat werd afgekeurd!"
        />
      </Helmet>
      <Header title="MIG Motors" image={Img1} />
      <div className="motors">
        <div className="container motors__container">
          <div className="motors__left">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
          </div>
          <div className="motors__right">
            <h2 className="motors__title">MIG Motors</h2>
            <p>
              MIG Motors is een officiële dealer van Audi, Volkswagen, Seat en
              Škoda in regio Gent. Ze onderscheiden zich door middel van hun 3
              pijlers: productaanbod, dienstverlening en imago, maar daar
              vertellen ze je graag meer over als je even langsgaat voor een
              nieuwe (tweedehands)wagen.
            </p>
            <p>
              Je kent het wel die grote banners van garages en automerken die je
              onderweg vaak tegen komt, meestal gebruiken ze hier standaard
              beelden voor. Bij MIG Motors wouden ze het net iets anders
              aanpakken en zochten ze een beeld die hun boodschap duidelijk
              weergeeft, nl voor jouw droomwagen moét je bij MIG Motors zijn!
              Hier vind je alvast enkele van onze voorstellen terug.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Motors;
