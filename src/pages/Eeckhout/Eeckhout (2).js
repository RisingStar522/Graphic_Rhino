import React from "react";
import Image from "../../images/Eeckhout_Woodline_jas.png";
import Img1 from "../../images/Eeckhout_Woodline_logo.png";
import Img2 from "../../images/Eeckhout_Woodline_visitekaartje.jpg";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function Eeckhout() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Eeckhout-Woodline, Oostrozebeke" />

        <meta
          name="description"
          content="Nieuw logo met bijhorende werkkleding en visitekaartjes voor het transportbedrijf Eeckhout-Woodline. Lees er hier alles over!"
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
          content="https://graphicrhino.be/cases/eeckhout-woodline"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Eeckhout-Woodline, Oostrozebeke" />

        <meta
          property="og:description"
          content="Nieuw logo met bijhorende werkkleding en visitekaartjes voor het transportbedrijf Eeckhout-Woodline. Lees er hier alles over!"
        />
      </Helmet>
      <Header image={Image} title="EECKHOUT - WOODLINE, OOSTROZEBEKE" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">EECKHOUT - WOODLINE, OOSTROZEBEKE</div>
            <p>
              Eeckhout - Woodline is een transportbedrijf in Oostrozebeke. Zij
              waren op zoek naar een nieuw logo met bijhorende visitekaartjes.
            </p>
            <p>
              Voor hun logo waren ze op zoek naar iets volledig nieuw, want hun
              oude logo viel niet meer zo in de smaak. Hun voorkeur qua kleuren
              ging uit naar rood en bordeaux. Qua stijl hadden ze liefst iets
              sierlijks. Ik heb de E van Eeckhout en de W van Woodline
              gecombineerd in een sierlijk lettertype om zo rekening te houden
              met hun vraag. Als kleur heb ik dan gekozen voor een opvallend
              rood.
            </p>
          </div>
          <img src={Image} alt="" className="grid-full case-img" />
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Later mocht ik ook een jas ontwerpen voor hun personeel. Hiervoor
              mocht het logo en de locatie van hun bedrijf op de voorkant. Op de
              achterkant staat opnieuw de naam van het bedrijf namelijk Eeckhout
              - Woodline en 2 vlaggen, de Nederlandse en Belgische, omdat ze
              voornamelijk in deze landen rijden.
            </p>
            <p>
              Bij de visitekaartjes was het vrij snel duidelijk dat ze graag hun
              vrachtwagens op het kaartje hadden. Hier heb ik dan ook voor
              gezorgd. Het logo en de soorten transport die ze doen moesten hier
              ook bij. Op de achterkant heb ik het logo laten terugkomen zodat
              het kaartje minder leeg leek. Verder is het visitekaartje gedrukt
              en afgewerkt met een matte laminaat.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Eeckhout;
