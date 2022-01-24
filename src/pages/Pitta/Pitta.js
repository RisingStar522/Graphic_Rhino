import React from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/portfolio2.jpg";
import Img1 from "../../images/pitta-1.png";
import Img2 from "../../images/pitta-2.jpg";
import Slider1 from "../../images/Pitta_Melita_folder_producten_1.jpg";
import Slider2 from "../../images/Pitta_Melita_folder_producten_2.jpg";
import Slider3 from "../../images/Pitta_Melita_folder_producten_3.jpg";
import Slider4 from "../../images/Pitta_Melita_folder_producten_4.jpg";
import SmSlider1 from "../../images/Pitta_Melita_folder_producten_1 (Small).jpg";
import SmSlider2 from "../../images/Pitta_Melita_folder_producten_2 (Small).jpg";
import SmSlider3 from "../../images/Pitta_Melita_folder_producten_3 (Small).jpg";
import SmSlider4 from "../../images/Pitta_Melita_folder_producten_4 (Small).jpg";
import ImageGallery from "react-image-gallery";
import { Helmet } from "react-helmet";

const images = [
  {
    original: Slider3,
    thumbnail: SmSlider3,
  },
  {
    original: Slider1,
    thumbnail: SmSlider1,
  },
  {
    original: Slider2,
    thumbnail: SmSlider2,
  },
  {
    original: Slider4,
    thumbnail: SmSlider4,
  },
];

function Pitta() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Pitta Melita, Avelgem" />

        <meta
          name="description"
          content="Pitta Melita had nood aan een nieuwe branding met bijhorende gevouwen A6 flyer. Hoe we dat aangepakt hebben? Dat lees je hier!"
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
          content="https://graphicrhino.be/cases/pitta-melita"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Pitta Melita, Avelgem" />

        <meta
          property="og:description"
          content="Pitta Melita had nood aan een nieuwe branding met bijhorende gevouwen A6 flyer. Hoe we dat aangepakt hebben? Dat lees je hier!"
        />
      </Helmet>
      <Header image={Image} title="PITTA MELITA, AVELGEM" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">PITTA MELITA, AVELGEM</div>
            <p>
              Toen ik vroeg om mijn eigen visitekaartjes op de toog van de pitta
              zaak in Avelgem te leggen was de uitbater meteen enthousiast. Hij
              vond dat het wel eens tijd werd voor een nieuw eigen logo met het
              bijhorende drukwerk.
            </p>
          </div>
          <div className="grid-full">
            <ImageGallery
              items={images}
              showBullets
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Zo gezegd, zo gedaan. Ik begon met het ontwerp van een nieuw logo
              voor Pitta Melita, daarna volgde een folder met hun nieuwe
              prijzen. Bij nieuwe prijzen moet je uiteraard ook het prijzenbord
              vervangen, dus heb ik ook nieuwe stickers gemaakt voor op hun
              lichtbak. Na de lichtbak sticker volgden er nog stickers voor op
              zijn wagen en de ramen van zijn zaak.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pitta;
